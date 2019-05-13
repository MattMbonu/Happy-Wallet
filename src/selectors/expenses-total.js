export default expenses => {
  const total = expenses.reduce((a, c) => {
    return a + c.amount;
  }, 0);
  return total;
};
