let mapOne = new Map([
  ["keyOne", "value"],
  ["k", true],
]);

// let mapOneSize = mapOne.keys();

// console.log(mapOneSize)

//!
//  class School  {
//     name;
//     constructor(_name){
//         this.name = _name
//     }

//  }

// //  let studentOne = new School("eden");

// class Student {
//     name;
//     class;
//     grade;
//     constructor(_name , _class,_grade){
//         this.name = _name;
//         this.class = _class;
//         this.grade = _grade;
//     }
// }

//!, "R", "T", "j"

let arrayOfStr = ["D", "M", "A", "C", "X", "E"];

function switchFunction(array, str) {
  switch (str) {
    case "S":
      return array.sort();
    case "R":
      return array.reverse();
    case "T":
      return array.toString();
    case "J":
      return array.join("&");
    default:
      console.log("NOT FOUND");
      break;
  }
}

// console.log(switchFunction(arrayOfStr, "K"));

//!
let arrayOfNumber = [10, 20, 40, 12, 56, 80, 8, 91];
let arrayOfOver20 = [];

function returnOver20(array) {
  array.forEach((ele) => {
    // console.log(ele);
    if (ele > 20) arrayOfOver20.push(ele);
  });
  return arrayOfOver20;
}

// console.log(returnOver20(arrayOfNumber));

//!

let objectOne = { color: "Red", year: 1996, brand: "Mazda" };

function runOverLoops(object) {
  for (const key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}

// runOverLoops(objectOne);

//!
let arrayOfObject = [
  { name: "Eden", age: 25, class: 8 },
  { name: "Daniel", age: 28, class: 8 },
  { name: "Oshra", age: 210, class: 8 },
];

let newArrayOfObject = [];

function returnNewArray(arrayOfObject) {
  for (const item of arrayOfObject) {
    item.name = `${item.name} Sir`;
    newArrayOfObject.push(item);
  }
  return newArrayOfObject;
}

// console.log(returnNewArray(arrayOfObject));

//!

class Student {
  name;
  class;
  grade;
  constructor(_name, _class, _grade) {
    this.name = _name;
    this.class = _class;
    this.grade = _grade;
  }
}

let students = new Map([
  ["Eden", { color: "pink", hight: 190 }],
  ["Daniel", { color: "blue", hight: 200 }],
  ["Oshra", { color: "pink", hight: 170 }],
]);
// console.log(students);

for (let item of students) {
  console.log(item[0]);
  firstDiv.innerHTML += `${item[0]}<br>`;
}

function ReturnStr(str) {
  return new Promise((resolve, reject) => {
    if (str) resolve("HELLO");
    else reject("GoodBye");
  });
}

async function functionAsync() {
  try {
    return await ReturnStr("fefewfew");
  } catch (error) {
    return error;
  }
}

// functionAsync().then(res=> console.log(res)).catch(rej=>{console.log(rej)})

class Yesov {
  nameOfYesove;
  numOfPepole;
  constructor(_nameOfYesov, _numOfPeople) {
    this.nameOfYesove = _nameOfYesov;
    this.numOfPepole = _numOfPeople;
  }
  returnString() {
    return `name :${this.nameOfYesove} , number Of People ${this.numOfPepole} `;
  }
  peopleNew() {
    return `${this.numOfPepole - 10}`;
  }
  static returnMaxNum() {}
}

let newOne = new Yesov("nameOne", 45);
// console.log(newOne.peopleNew());

class Medina extends Yesov {
  type;
  constructor(_nameOfYesov, _numOfPeople, _Type) {
    super(_nameOfYesov, _numOfPeople);
    this.type = _Type;
  }
  returnType() {
    return `${super.returnString()} type: ${this.type}`;
  }
  childFunction() {
    return `${super.peopleNew()} , type ${this.type}`;
  }
}

let medinaOne = new Medina("eden", 50, "Medina");
// console.log(medinaOne.childFunction());

class City extends Yesov {
  returnType() {
    return `name :${super.returnString()} , City`;
  }
}

let nameThree = new City("nameThree", 45);

class Village extends Yesov {
  returnType() {
    return `${super.returnString()} ,Medina`;
  }
}

let nameFour = new Village("eedede", 45);

// console.log(nameFour.returnType());

//!
let counter = 1;

class Cars {
  brand;
  year;
  rating;
  constructor(_brand, _year, _rating) {
    this.brand = _brand;
    this.year = _year;
    this.rating = _rating;
    console.log(counter++);
  }
  static returnNewest(yearOne, yearTwo) {
    if (yearOne.year > yearTwo.year) {
      return yearOne;
    }
    {
      return yearTwo;
    }
  }
  static returnRating(objectOne, objectTwo) {
    if (objectOne.rating > objectTwo.rating) return objectOne;
    else return objectTwo;
  }
}

let carOne = new Cars("Mazda", 20888, 9);
let carTwo = new Cars("Toyota", 2010, 10);
let carThree = new Cars("cxcx", 1632, 50);

// console.log(carOne.year ,carTwo.year );

// console.log(Cars.returnRating(carOne,carThree));

let fruit = new Map([["orang", "orang"] , ["lemon" , "Yellow"], ["strawberry" , "red"] , ["grape" , "purple"] , ["lettuce", "green"]]);

// fruit.set("sagol" , "sagol");

let onlyFruitKeys = fruit.keys()

// for(const fruit of onlyFruitKeys){
//   trySection.innerHTML += `${fruit} <br>`
// }


