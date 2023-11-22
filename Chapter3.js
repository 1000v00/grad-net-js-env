"use strict"

const schools =
[
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Leberty" },
    { name: "Wakefield" },
];

 const editName = (oldName, name, arr) =>
     arr.map((item) => (item.name === oldName ? { ...item, name } : item));
const updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log(updatedSchools[1]);
console.log(schools[1]);


const schoolArray = Object.keys(schools).map
(
    key => 
    (
        {
            name: key,
            wins: schools[key],
        }
    )
);

console.log(schoolArray);


const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce
(
    (max, age) =>
    {
        console.log(`${age} > ${max} = ${age > max}`);
        if (age > max)
        {
            return age;
        }
        else
        {
            return max;
        }
    }
    , 0
);

console.log("maxAge", maxAge);

/*
const colors =
[
    {
        id: "xekare",
        title: "red red",
        rating: 3,
    },
    {
        id: "jbwsof",
        title: "big blue",
        rating: 2,
    },
    {
        id: "prigbj",
        title: "grizzly grey",
        rating: 5,
    },
    {
        id: "ryhbhsl",
        title: "banana",
        rating: 1,
    },
];


const hashColors = colors.reduce
(
    (hash, {id, title, rating}) =>
    {
        hash[id] = {title, rating};
        return hash;
    }
    , {}
);

console.log(hashColors);
*/

const colors = ["red", "red", "green", "blue", "green"];
const uniqueColors = colors.reduce
(
    (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],[]
);
console.log(uniqueColors);




const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome");
const showUnauthorized = () => console.log("Unauthorized");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);


/*
const userLogs = userName => messege => console.log(`${userName} -> ${message}`);
const log = userLogs("grandpa23");

log("attempted to laod 20 fake members");
getFakeMembers(20).then
(
    members => log(`successfully loaded ${members.length}members`)
)
.catch
(
    error => log("encountered an error loading members")
)
*/


/*
const countdown = (value, fn) =>
{
    fn(value);
    return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, value => console.log(value));
*/

const countdown = (value, fn, delay = 1000) =>
{
    fn(value);
    return value > 0 ? setTimeout( () => countdown(value - 1, fn), delay) : value;
};
const log = value => console.log(value);
countdown(10, log);


const dan =
{
    type: "person",
    data: 
    {
        gender: "male",
        info:
        {
            id: 22,
            fullname:
            {
                first: "Dan",
                last: "Deacon",
            }
        }
    }
}



const deepPick = (fields, object = {}) =>
{
    const [first, ...remaining] = fields.split(".");
    return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first];
};

const test0 = deepPick("type", dan);
const test1 = deepPick("data.info.fullname.first", dan);
console.log(test0);
console.log(test1);


const template = "hh:mm:ss tt";
const clockTime = template
    .replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM");

console.log(clockTime);

/*
const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);

const both = compose
(
    civilianHours,
    appendAMPM,
);
both(new Date());
*/


setInterval(logClockTime, 1000);
function logClockTime()
{
    let time = getClockTime();
    console.clear();
    console.log(time);
}

function getClockTime()
{
    let date = new Date();
    let time = "";

    time = 
    {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM",
    };

    if(time.hour == 12) // <- ?? === ??
    {
        time.ampm = "PM";
    }
    else if (time.hours > 12)
    {
        time.ampm = "PM";
        time.hours -= 12;
    }

    if (time.hours < 10)
    {
        time.hours = "0" + time.hours;
    }
    if(time.minutes < 10)
    {
        time.minutes = "0" + time.minutes;
    }
    if(time.seconds < 10)
    {
        time.seconds = "0" + time.seconds;
    }


    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}

