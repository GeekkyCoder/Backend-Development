const student = {
  name: "Faraz",
  roll: "CSE 87",
  batch: "2020",
};

const printDetails = () => {
  const { name, roll, batch } = student;
  return `${name}'s roll no is ${roll} and of batch ${batch}`;
};

module.exports = {
  student,
  printDetails,
};
