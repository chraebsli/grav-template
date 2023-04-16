#!/bin/bash

# Get Environment Variables
SALT=$(doppler secrets get SALT --plain)
LICENSE_LIGHTBOX_GALLERY=$(doppler secrets get LICENSE_LIGHTBOX_GALLERY --plain)

# Inject Environment Variables
yq -i ".salt = \"$SALT\"" user/config/security.yaml
yq -i ".licenses.lightbox-gallery = \"$LICENSE_LIGHTBOX_GALLERY\"" user/data/licenses.yaml
