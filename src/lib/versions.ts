const isValidVersion = (version: string): boolean => {
  return (
    version === "latest" ||
    version.match(/^v\d+\.\d+(\.\d+(\.\d+)?)?$/) !== null
  );
};

export { isValidVersion };
