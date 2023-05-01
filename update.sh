#!/bin/bash

# Stash local changes
git stash push --include-untracked -- logs/popularity user/data/flex/indexes

# Reset working directory

# Pull latest changes

# Restore local changes
git stash pop 0
