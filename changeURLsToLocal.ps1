$directory = Join-Path -Path $PSScriptRoot -ChildPath "Websockets"

# Get all files in the directory
$files = Get-ChildItem -Path $directory -File -Recurse

# Create a hashtable to store the mappings between URLs and local file paths
$mappingTable = @{}

# Loop through each file
foreach ($file in $files) {
    # Read the file content
    $content = Get-Content -Path $file.FullName

    # Match script references using regular expression pattern
    $pattern = "<script.*?src=[""'](.*?)[""']"
    $matches = [regex]::Matches($content, $pattern)

    # Loop through matched script references
    foreach ($match in $matches) {
        $url = $match.Groups[1].Value

        # Check if the URL contains illegal characters
        if ($url -match '[\\/:*?"<>|]') {
            Write-Host "Skipping URL with illegal characters: $url"
            continue
        }

        try {
            # Generate a unique local filename
            $filename = [System.IO.Path]::GetFileName($url)
            $localFilePath = Join-Path -Path $directory -ChildPath $filename
            $count = 1
            while (Test-Path -Path $localFilePath) {
                $extension = [System.IO.Path]::GetExtension($filename)
                $baseName = [System.IO.Path]::GetFileNameWithoutExtension($filename)
                $numberedName = "{0}({1}){2}" -f $baseName, $count, $extension
                $localFilePath = Join-Path -Path $directory -ChildPath $numberedName
                $count++
            }

            # Download the file if it doesn't already exist locally
            if (-not (Test-Path -Path $localFilePath)) {
                Write-Host "Downloading: $url"
                Invoke-WebRequest -Uri $url -OutFile $localFilePath
            }

            # Add the mapping to the hashtable
            $mappingTable[$url] = $localFilePath

            # Replace the script reference with the absolute local file path
            $updatedContent = $content -replace [regex]::Escape($url), $localFilePath

            # Overwrite the file with updated content
            Set-Content -Path $file.FullName -Value $updatedContent
        }
        catch {
            Write-Host "Error processing URL: $url"
            Write-Host $_.Exception.Message
        }
    }
}

# Output the mappings between URLs and local file paths
$mappingTable | Format-Table -AutoSize

Write-Host "Script references updated successfully."
