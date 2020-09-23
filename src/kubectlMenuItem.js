"use strict";

const { PopupMenuItem } = imports.ui.popupMenu;
const Main = imports.ui.main;
const extensionUtils = imports.misc.extensionUtils;
const Me = extensionUtils.getCurrentExtension();
const Kubectl = Me.imports.src.kubectl;
const GObject = imports.gi.GObject;

var KubectlMenuItem = GObject.registerClass(

  class KubectlMenuItem extends PopupMenuItem {
    _init(currentContext, context) {

      super._init(context);
      
      if (context == currentContext) {

      } else {
        this.connect("activate", () => {
            let ok = Kubectl.useContext(context);
            if (ok) {
              Main.notify("Command `" + command + "` successful");
            } else {
              let errMsg = _("Error occurred when running `" + command + "`");
              Main.notifyError(errMsg);
              logError(errMsg);
              logError(err);
            }
          }
        );
      }
    }
  }
);