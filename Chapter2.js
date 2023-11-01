
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
const lordify = firstName => `${firstName} of Canterbury`;
console.log(lordify("Dale"));
console.log(lordify("Gail"));

