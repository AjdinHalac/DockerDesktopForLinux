"use strict";

const St = imports.gi.St;
const Gio = imports.gi.Gio; // For custom icons
const { PopupSubMenuMenuItem } = imports.ui.popupMenu;
const extensionUtils = imports.misc.extensionUtils;
const Me = extensionUtils.getCurrentExtension();
const { KubectlMenuItem } = Me.imports.src.kubectlMenuItem;
const GObject = imports.gi.GObject;

var KubectlSubMenu = GObject.registerClass(

  class KubectlSubMenu extends PopupSubMenuMenuItem {
  _init(currentContext, contexts) {
    
    super._init("Kubernetes");

      if (contexts.length > 0) {
        contexts.forEach(context => {
          this.menu.addMenuItem(
            new KubectlMenuItem(
              currentContext,
              context
            )
          );
        });
      } else {
        this.menu.addMenuItem(new PopupMenuItem("No contexts detected"));
      }
    }
  }
);