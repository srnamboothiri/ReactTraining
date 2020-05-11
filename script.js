console.log("----React Assignmenet By Sreeraj----");

console.log("1. Constant Keyword");

const a = 10;

console.log("Const :" + a)

// a = 20; // will throw error "TypeError: Assignment to constant variable"

console.log("2. Var Keyword");

var b1 = 5;

if (true) {
    var b1 = 10;
    console.log(b1);
}

console.log(b1);

console.log("3 . Let Keyword");

let b2 = 5;

if (true) {
    let b2 = 10;

    console.log(b2);
}

console.log(b2);

console.log("4 . Let Keyword Hoisting");


console.log(c1);
var c1 = 5;

// console.log(c2);
// let c2 = 5;  // ReferenceError: Cannot access 'c2' before initialization

console.log("5.The let Keyword - A step towards closure");

var div,
    container = document.getElementById("container");

for (var i = 0; i < 3; i++) {
    div = document.createElement("div");
    div.onclick = () => {
        alert("This is box #" + i);
    };
    container.appendChild(div);
}

for (let j = 0; j < 3; j++) {
    div = document.createElement("div");
    div.onclick = () => {
        alert("This is box #" + j);
    };
    container.appendChild(div);
}



console.log("6. Template Strings");
const firstName = "Sreeraj";
const lastName = "Raman";
console.log(`Hello ${firstName} ${lastName}`);

console.log("7. Default Parameters");

function DisplayName(name = "Suyati") {
    console.log("Hello " + name);
}
DisplayName();
DisplayName("Sreeraj");

console.log("8.Arrow Functions");

const wishNoParam = () => `I am Engineer`
console.log(wishNoParam())

const wishOneParam = name => `I am ${name}`
console.log(wishOneParam("Sreeraj"))

const wishTwoParam = (greet = "Hello", name = "world") => {
    return `${greet} ${name}`
}
console.log(wishTwoParam())
console.log(wishTwoParam('Hai', 'Sreeraj'));

console.log("9.Arrow Functions - A closure");

// const map = {
//     country: ["India", "US", "UK", "Japan"],
//     display: function (delay) {
//         setTimeout(function () {
//             console.log(country.join(","))
//         }, delay);

//     }


// };
// map.display();

const map = {
    country: ["India", "US", "UK", "Japan"],
    display: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.country.join(","))
        }, delay);

    }


};
map.display();


console.log("10. Destructuring Objects");

const personalInfo = {
    Name: "Sreeraj",
    Place: "Ankamaly",
    District: "Ernakulam",
    State: "Kerala"
}

const { Name, District } = personalInfo;
console.log(Name, District);

const displayPersInfo = (info) => {
    console.log(`my district is ${info.District}`);
}

displayPersInfo(personalInfo);


const states = ["Kerala", "Karnataka", "Tamil Nadu"];

const [state1] = states;
console.log(`my state is ${state1}`);

const [, state2,] = states;

console.log(`my state is ${state2}`);



console.log("11. Literal");

const petName = "Jimmy",
    petType = "Dog",
    PetColor = "White";

const petInfo = {
    petName,
    petType,
    PetColor,
    printPetColor() {
        console.log(`pet colour is ${this.PetColor}`)
    }
}
console.log(petInfo);
petInfo.printPetColor();

console.log("12. Spread Operator");

const batsman = [
    "Sachin",
    "Dhoni",
    "Kohli",
    "Dravid",
    "Ganguly",
    "Rohit",
];
const bowler = [
    "Kumble",
    "Bumrah",
    "Sreenath",
    "Harbhajan",
    "Zaheer Khan",
    "Shami",
];

const team = [...batsman, ...bowler]
console.log(`Indian Team Legends: ${team.join(", ")}`);

const [legend, ...others] = team;
console.log(`God Of Cricket: ${legend}`);
console.log(`Other players: ${others.join(", ")}`);


console.log("12. XMLHttpRequest");

function onResponse() {
    var data = JSON.parse(this.responseText);
    console.log(`Response from XHR call: ${data}`);
}

function onError(error) {
    console.log(error);
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = onResponse;
xhrRequest.onerror = onError;
xhrRequest.open('get', 'https://randomuser.me/api/', true);
xhrRequest.send();



console.log("13. jQuery Ajax");


$.ajax("https://randomuser.me/api/")
    .then(function (data) {
        console.log(`Response from AJAX call: ${data}`);
    })
    .catch(function (error) {
        console.log(error);
    });




console.log("14. Fetch API");

fetch("https://randomuser.me/api/")
    .then((response) => {
        if (response.status !== 200) {
            throw new Error(`Request failed with status - ${response.status}`);
        }

        // response is a stream
        response.json().then((data) => {
            console.log(`Response from Fetch call: ${data}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });




console.log("15.  OOP prior to ES6");

function PersonClass2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonClass2.prototype.print = function () {
    console.log(
        `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
    );
};

const Sreeraj = new PersonClass2("Sreeraj", "Raman");
Sreeraj.print();



console.log("16.  ES6 Classes");

class PersonClass1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        console.log(
            `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
        );
    }
}

const Sreeraj2 = new PersonClass1("Sreeraj", "Raman");
Sreeraj2.print();

PersonClass1.prototype.greet = function () {
    console.log(`Hey "${this.lastName}, ${this.firstName}"`);
};
Sreeraj2.greet();

console.log("17.  Deep Copy and Shallow Copy");

function shallowCopyOfList(list) {
    return [...list];
}

function shallowCopyOfObject(object) {
    return { ...object };
}

function deepCopyOfList(list) {
    return JSON.parse(JSON.stringify(list));
}

function deepCopyOfObject(object) {
    return JSON.parse(JSON.stringify(object));
}




const arr = [[1, 2], 3];
let shalloCopy = shallowCopyOfList(arr);
shalloCopy[1]=5; 
shalloCopy[0][0]=0; 
console.log("shallow List copy"+ shalloCopy)
console.log("Original List"+arr);


const objShall= {
    Name:"Sreeraj",
    Age:"32",
    Job:{
        Company :"Suyati",
        Place:"Kakanad"
    },
    Place:"Ankamaly"
}

let objShalCopy= shallowCopyOfObject(objShall);
objShalCopy.Name ="Raman";
objShalCopy.Job.Company="Socxo";

console.log("Shallow Obj Copy "+JSON.stringify(objShalCopy))
console.log("Orginal Obj"+JSON.stringify(objShall))



const arrDeep = [[1, 2], 3];
let deepCopy= deepCopyOfList(arrDeep);
deepCopy[1]=5; 
deepCopy[0][0]=0; 
console.log("Deep List copy"+ deepCopy)
console.log("Deep List Original"+arrDeep);


const objDeep = {
    Name:"Sreeraj",
    Age:"32",
    Job:{
        Company :"Suyati",
        Place:"Kakanad"
    },
    Place:"Ankamaly"
}

let objDeepCopy= deepCopyOfObject(objDeep);
objDeepCopy.Name ="Raman";
objDeepCopy.Job.Company="Socxo";
console.log("Deep Obj Copy"+JSON.stringify(objDeepCopy))
console.log("Deep Obj Orginal"+JSON.stringify(objDeep))