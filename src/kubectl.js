"use strict";

const GLib = imports.gi.GLib;
const Util = imports.misc.util;

/**
 * Check if kubectl is installed
 * @return {Boolean} whether kubectl is installed or not
 */
var isKubectlInstalled = () => !!GLib.find_program_in_path("kubectl");

/**
 * Get an array of contexts
 * @return {Array} The array of contexts as strings
 */
var getContexts = () => {
  const [res, out, err, status] = GLib.spawn_command_line_sync(
    "kubectl config get-contexts --no-headers -o=name"
  );
  if (status !== 0) throw new Error("Error occurred while fetching contexts");

  return String.fromCharCode
    .apply(String, out)
    .trim()
    .split("\n")
    .filter(string => string.length > 0);
};

/**
 * Get current context
 * @return {String} current context as string
 */
var currentContext = () => {
  const [res, out, err, status] = GLib.spawn_command_line_sync(
    "kubectl config current-context"
  );
  if (status !== 0) throw new Error("Error occurred while getting current context");

  return String.fromCharCode
    .apply(String, out)
    .trim();
};

/**
 * Set current context 
 * @param {String} contextName The context
 * @return {Boolean} current context as string
 */
var useContext = (contextName) => {
  const [res, out, err, status] = GLib.spawn_command_line_sync(
    "kubectl config use-context " + contextName
  );
  if (status !== 0) throw new Error("Error occurred while setting current context");

  return String.fromCharCode
    .apply(String, out)
    .trim()
    .includes("Switched to context");
};
