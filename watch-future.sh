#!/bin/bash

bundle exec jekyll clean
bundle exec jekyll serve --watch --draft --future
