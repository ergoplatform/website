#!/bin/bash

echo "Start deploy"
ssh -tq website@88.198.13.202 "bash -lc 'git pull'"
ssh -tq website@88.198.13.202 "bash -lc 'make site'"
echo "Deployed Successfully!"

exit 0
