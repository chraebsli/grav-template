#!/bin/sh

# Stash local changes
git stash push --include-untracked -- logs/popularity user/data/flex/indexes user/pages user/config

# Reset working directory
git reset --hard
git clean -fd

# Pull latest changes
git pull

# Restore local changes
git stash pop 0
