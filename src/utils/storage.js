export const getLeaves = () => {
  return JSON.parse(localStorage.getItem("leaves")) || [];
};

export const saveLeaves = (leaves) => {
  localStorage.setItem("leaves", JSON.stringify(leaves));
};