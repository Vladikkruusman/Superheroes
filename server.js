let superheroes = require("superheroes");
let supervillains = require("supervillains")

superheroes.all.forEach(hero => {
    console.log(hero);
});
supervillains.all.forEach(villain => {
    console.log(villain);
})

console.log(superheroes.random());
console.log(supervillains.random());

console.log(`${superheroes.random()} fights ${supervillains.random()}`);

//console.log(superheroes.all);
