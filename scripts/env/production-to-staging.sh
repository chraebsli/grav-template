#!/bin/sh

source ./.env.local

# Create production folder in staging environment
mkdir -p ~/domains/$DOMAIN_STG/public_html-production
chmod 755 ~/domains/$DOMAIN_STG/public_html-production
chown -R $HOSTINGER_USER:$HOSTINGER_GROUP ~/domains/$DOMAIN_STG/public_html-production

# Copy production folder to staging folder
cp -r ~/domains/$DOMAIN_PRD/public_html/.* ~/domains/$DOMAIN_STG/public_html-production/

# Rename old staging folder
mv ~/domains/$DOMAIN_STG/public_html ~/domains/$DOMAIN_STG/public_html-old

# Rename production folder to staging folder
mv ~/domains/$DOMAIN_STG/public_html-production ~/domains/$DOMAIN_STG/public_html

# Remove old staging folder
rm -rf ~/domains/$DOMAIN_STG/public_html-old