#!/bin/sh

source ./.env.local

# Create staging folder in production environment
mkdir -p ~/domains/$DOMAIN_PRD/public_html-staging
chmod 755 ~/domains/$DOMAIN_PRD/public_html-staging
chown -R $HOSTINGER_USER:$HOSTINGER_GROUP ~/domains/$DOMAIN_PRD/public_html-staging

# Copy staging folder to production folder
cp -r ~/domains/$DOMAIN_STG/public_html/.* ~/domains/$DOMAIN_PRD/public_html-staging/

# Rename old production folder
mv ~/domains/$DOMAIN_PRD/public_html ~/domains/$DOMAIN_PRD/public_html-old

# Rename staging folder to production folder
mv ~/domains/$DOMAIN_PRD/public_html-staging ~/domains/$DOMAIN_PRD/public_html

# Remove old production folder
rm -rf ~/domains/$DOMAIN_PRD/public_html-old
