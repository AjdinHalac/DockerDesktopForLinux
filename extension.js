"use strict";

const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const DockerMenu = Me.imports.src.dockerMenu;

// The docker indicator
let docker;

// Triggered when extension has been initialized
function init() {}

// Triggered when extension is enabled
function enable() {
  docker = new DockerMenu.DockerMenu(0.0, _("Docker"));
  Main.panel.addToStatusArea("Docker", docker);
}

// Triggered when extension is disabled
function disable() {
  docker.destroy();
}
