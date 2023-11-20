#!/bin/bash
sudo apt-get update -qq -o Acquire::Retries=3
sudo apt-get update -qq -o Acquire::Retries=3 libvips libvips-tools
echo "libvips installed" >libvips-completed.txt
