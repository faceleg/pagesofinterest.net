#!/bin/bash

# Function to display help
show_help() {
  echo "Usage: $0 [--clean] [--production] [--help]"
  echo
  echo "Options:"
  echo "  --clean       Clean the site before serving"
  echo "  --production  Set JEKYLL_ENV to production"
  echo "  --help        Show this help message"
}

# Default values
CLEAN=false
PRODUCTION=false

# Check for flags
for arg in "$@"; do
  case $arg in
    --clean)
      CLEAN=true
      shift # Remove --clean from the arguments
      ;;
    --production)
      PRODUCTION=true
      shift # Remove --production from the arguments
      ;;
    --help)
      show_help
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      show_help
      exit 1
      ;;
  esac
done

# Run clean if the flag is passed
if [ "$CLEAN" = true ]; then
  bundle exec jekyll clean
fi

# Set production environment if the flag is passed
if [ "$PRODUCTION" = true ]; then
  export JEKYLL_ENV=production
fi

# Serve the site
bundle exec jekyll serve --watch --drafts
