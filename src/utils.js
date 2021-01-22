export const formatPath = (path) => {
  const newPath = path.replace(/[0-9]/g, '');

  return (newPath.substring(newPath.length - 1) === '/')
    ? newPath.substring(0, newPath.length - 1)
    : newPath;
};

export const pathIsActive = (pagePath, pathTo, pathBase) => {
  if (formatPath(pagePath) === formatPath(pathBase)) {
    return formatPath(pagePath) === formatPath(pathTo);
  } else if (formatPath(pathTo) === formatPath(pathBase)) {
    return false;
  }
  return pagePath.includes(formatPath(pathTo));
};
