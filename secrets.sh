#!/bin/bash

# Get Environment Variables
SALT=$(doppler secrets get SALT --plain)
LICENSE_LIGHTBOX_GALLERY=$(doppler secrets get LICENSE_LIGHTBOX_GALLERY --plain)

# Set Environment Variables in .env.local
touch .env.local
echo "SALT=$SALT" >> .env.local
echo "LICENSE_LIGHTBOX_GALLERY=$LICENSE_LIGHTBOX_GALLERY" >> .env.local
