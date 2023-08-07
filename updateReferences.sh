#!/bin/bash

# Function to check if a URL is external
is_external_url() {
  local url=$1
  if [[ $url == http://* || $url == https://* ]]; then
    return 0
  else
    return 1
  fi
}

# Function to update HTML file with relative links
update_html_file() {
  local html_file=$1
  local original_url=$2
  local local_filename=$3

  sed -i "s|$original_url|$local_filename|g" "$html_file"
}

# Function to download linked file
download_file() {
  local url=$1
  local output_dir=$2

  local filename=$(basename "$url")
  local output_file="$output_dir/$filename"

  if [ -f "$output_file" ]; then
    echo "Skipping download: $output_file already exists."
  else
    echo "Downloading: $url"
    wget -q "$url" -P "$output_dir"
    if [ $? -eq 0 ]; then
      echo "Download successful."
    else
      echo "Download failed."
      return 1
    fi
  fi

  echo "$output_file"
}

# Function to process HTML files
process_html_files() {
  local directory=$1
  local output_dir=$2

  find "$directory" -type f -name "*.html" | while read -r html_file; do
    echo "Processing: $html_file"

    # Get the directory of the HTML file
    local html_dir=$(dirname "$html_file")

    # Read each line of the HTML file
    while IFS= read -r line; do
      # Check if the line contains a link to an external page
      if [[ $line == *"<a"*"href"* ]]; then
        local url=$(echo "$line" | grep -oE 'href="([^"#]+)"' | cut -d'"' -f2)
        if is_external_url "$url"; then
          # Download the linked file
          local downloaded_file=$(download_file "$url" "$output_dir")
          if [ $? -eq 0 ]; then
            # Update the HTML line with a relative link
            local relative_link=$(realpath --relative-to="$html_dir" "$downloaded_file")
            update_html_file "$html_file" "$url" "$relative_link"
          fi
        fi
      fi
    done <"$html_file"
  done
}

# Entry point of the script
if [ $# -ne 1 ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

directory=$1
output_dir="downloaded_files"

mkdir -p "$output_dir"
process_html_files "$directory" "$output_dir"
