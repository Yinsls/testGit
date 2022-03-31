const obj = {
  name: "master",
};
export const say = () => {
  console.log(obj.name);
};

export const setName = (name) => {
  obj.name = name;
};
