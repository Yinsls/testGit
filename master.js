const obj = {
  name: "master",
  age: 110,
};
export const say = () => {
  console.log(obj.name);
};

export const setName = (name) => {
  obj.name = name;
};

export const addAttribute = (key, value) => {
  obj[key] = value;
};
