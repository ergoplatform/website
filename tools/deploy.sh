#!/bin/bash

ssh website@88.198.13.202 << EOF
  git pull origin master
EOF
