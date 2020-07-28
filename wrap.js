Module.locateFile = function (path, prefix) {
  if (ENVIRONMENT_IS_NODE) {
    return prefix + path;
  }

  return path;
};
