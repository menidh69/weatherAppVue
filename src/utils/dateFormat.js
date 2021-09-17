// @ts-ignore
// eslint-disable-next-line no-unused-vars
const displayDateOnly = (d) => {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  return date.toLocaleDateString();
};

export default displayDateOnly;
