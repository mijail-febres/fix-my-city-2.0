# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

# include these settings
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

# do updates
RUN apt-get update && apt-get upgrade -y && apt-get install wget -y

# download and install node js and npm
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

# creating a folder on the root level
RUN mkdir -p /backend
RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files

# copy fles from local to container
COPY ./backend/requirements.yml /backend/requirements.yml

# run conda to create the environment inside the image
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/fix_my_city_backend/bin:$PATH
RUN echo "source activate fix_my_city_backend" >~/.bashrc

COPY ./backend/ /backend
COPY ./scripts /scripts
RUN chmod +x /scripts*

WORKDIR /frontend_tmp
COPY ./frontend/package.json /frontend_tmp/
RUN npm install
COPY ./frontend /frontend_tmp
RUN npm run build

WORKDIR /backend