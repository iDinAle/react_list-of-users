export const generatePageButtons = (amount) => {
  const result = [];

  for (let i = 1; i <= amount; i += 1) {
    result.push(i);
  }

  return result;
};
