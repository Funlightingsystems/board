ROM --platform=i386 i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get clean && apt-get update && apt-get -y upgrade
RUN apt-get -y install apt-utils gcc \
	python3 unzip nodejs \
	fakeroot dbus base whiptail hexedit \
	patch wamerican ucf manpages \
	file make dialog curl \
	less cowsay netcat-openbsd ola
COPY . /'Configuration Software'
WORKDIR /'Configuration Software'
CMD node server.js
