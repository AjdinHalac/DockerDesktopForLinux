#!/bin/bash

# Simple bash script to build the GNOME Shell extension
echo "Zipping the extension..."
zip -r docker-desktop-for-linux@ajdinhalac.github.io.zip . -x *.git* -x *.idea* -x *.history* -x *.*~ -x build.sh
echo "Building is done."
