const myObject = {
  name: "John",
  age: 30,
  city: "New York",
  sayHi: function (name) {
    console.log("Hi, " + name);
  },
};

function sayHi(name) {
  console.log("Hi, " + name);
}

sayHi("John");

myObject.sayHi("John");

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log("Button clicked");
});
