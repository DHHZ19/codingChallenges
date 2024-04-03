let user = { name: "foo" };

const userData = new WeakMap();

console.log(userData.set(user, { yup: 1 }));

user = null;

console.log(userData.get(user));

console.log(userData.keys());
