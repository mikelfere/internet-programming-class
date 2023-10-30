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