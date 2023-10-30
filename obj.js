const myObj = {
    name:"mikel"
};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "tea"
    },
    action: function(){
        return `time for ${this.beverage.morning}`; //string template
    }
};

console.log(anotherObj.action());

const vehicle = {
    wheels: 4, 
    engine: function(){
        return "Vroom!";
    }
};

const truck = Object.create(vehicle); //object constructor
truck.doors = 2;

console.log(truck);

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "whoosh";
}

console.log(car.doors);