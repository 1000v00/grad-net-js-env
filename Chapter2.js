"use strict"

var pizza = true;
pizza = false;
console.log(pizza);

const pizza_1 = true;
// pizza_1 = false;


var topic = "JavaScript";
if(topic)
{
    let topic = "React";
    console.log("block", topic);
}
console.log("global", topic);


// var div, container = document.getElementById("container");
// for(var i = 0; i < 5; i++)
// {
//     div = document.createElement("div");
//     div.onclick=function()
//     {
//         alert("This is box #" + i);
//     };
//     container.appendChild(div);
// }


// document.body.innerHTML = `
// <section>
//     <header>
//         <h1>The React Blog</h1>
//     </header>
//     <article>
//         <h2>${article.title}</h2>
//         ${article.body}
//     </article>
//     <footer>
//         <p>copyright ${new Date().getFullYear()} | The React Blog</p>
//     </footer>
// </section>
// `;


const test = "1";
function logCompliment(test)
{
    console.log(`You're doing great! ${test}`)
}
console.log(test);
logCompliment("javascript");



const defaultPerson = 
{
    name: 
    {
        first: "Shane",
        last: "McConkey",
    },
    favActivity: "skiing",
};

function logActivity(person=defaultPerson)
{
    console.log(`${person.name.first} loves ${person.favActivity}`);
}
logActivity();



// const lordify = function(firstName)
// {
//     return `${firstName} of Canterbury`;
// };
/* const lordify = (firstName, land) => 
{
    if(!firstName)
    {
        throw new Error("A firstName is required to lordify");
    }
    if(!land)
    {
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`
};
console.log(lordify("Dale", "Sonoma")); */
// console.log(lordify("Gail")); Error: A lord must have a land



const person = (firstName, lastName) =>
(
    {
        first: firstName,
        last: lastName,
    }
);
console.log(person("Brad", "Janson"));



/* const tahoe =
{
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000)
    {
        setTimeout
        (
            () =>
            {
                console.log(this.mountains.join(", "));
            },
            delay
        );
    }
};
tahoe.print();
 */


const sandwich =
{
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
let {bread, meat} = sandwich;
bread = "garlic";
meat = "turkey";
console.log(bread, meat);
console.log(sandwich.bread, sandwich.meat);



/* const lordify = regularPerson =>
{
    console.log(`${regularPerson.firstName} of Cnaterbury`);
};
*/
const lordify = ({ spouse: {firstname} }) =>
{
    console.log(`${ firstname } of Canterbury`);
};
const regularPerson =
{
    firstname: "Bill",
    lastname: "Wilson",
    spouse:
    {
        firstname: "Phil",
        lastname: "Wilson",
    }
};
lordify(regularPerson); 



const [firstAnimal, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal);



/* const name = "Tallac";
const elevation = 9738;

const funHike = { name, elevation };
console.log(funHike); */
const name = "Tallac";
const elevation = 9738;
const print = function()
{
    console.log(`Mt. ${this.name} is ${this.elevation} feet tail`);
};
const funHike = {name, elevation, print};
funHike.print();



/* const skier =
{
    name,
    sound,
    powerYell()
    {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph)
    {
        this.speed = mph;
        console.log("speed: ", mph);
    }
};  */



const peaks = ["Tallac", "Ralston", "Rose"];
const conyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...conyons];
const [,second] = [...peaks].reverse();
console.log(tahoe.join(", "));
console.log(second);
console.log(peaks.join(", "))

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", "));


function directions(...args)
{
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}
//directions(); Undefinedになる
directions("Turckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");



const morning =
{
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly",
};

const dinner = "mac and cheese"; 








console.log("\n\n");

