// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function dialog(){

  let hagrid="Hagrid: You're a wizard, Harry!";
  let harry="Harry: I'm a wot?!"
    console.log(`${hagrid} / ${harry}`);
      function dialog2() {
         let hagrid2="A wizard !";
          console.log(`${hagrid} / ${harry} / ${hagrid2}`);
      }
       dialog2();

}
dialog();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

 // ==== Challenge 2: Create a counter function ====
  const counter = (() => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function () {
    counter += 1; 
    return counter;
  }
})();

counter();
counter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    "increment": function(){
      counter += 1; return counter;
    },
    "decrement": function(){
      counter --; return counter;
    }
  }
})();

counterFactory.increment();
counterFactory.increment();
counterFactory.decrement();
counterFactory.decrement();
counterFactory.decrement();