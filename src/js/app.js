const orderByProps = (obj, options) => {
  const objCopy = { ...obj };
  const arraySort = [];

  options.forEach((key) => {
    arraySort.push({ key, value: objCopy[key] });
    delete objCopy[key];
  });

  Object.keys(objCopy)
    .sort()
    .forEach((key) => {
      arraySort.push({ key, value: objCopy[key] });
    });

  return arraySort;
};

export default orderByProps;
