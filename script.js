const teacher = function (address, degree) {
  this.address = address;
  this.degree = degree;
};

const person = function (name, subject, address, degree) {
  const newProperties = teacher.bind(this);
  newProperties(address, degree);
  this.name = name;
  this.subject = subject;
};

const p1 = new person("aryan", "maths", "varanasi", "U.G.");
const p2 = new person("sam", "physics", "delhi", "P.G.");
const p3 = new person("robert", "bio", "banglore", "U.G");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p1.address);
