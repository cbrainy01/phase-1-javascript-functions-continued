// Your code here

function saturdayFun(activity = "roller-skate") {
const plans = `This Saturday, I want to ${activity}!`;
return plans;
}

const mondayWork = function(chore = "go to the office") {
    const plans = `This Monday, I will ${chore}.`;

    return plans;
}


 function wrapAdjective(flair = "*") {
    
    return function(description = "special") {
        const message = `You are ${flair}${description}${flair}!`;
        return message;
    }
}

//wrapAdjective($)("an idiot");

// function outer(greeting, msg) {

//     return function(name, lang) {
//        return `${greeting}, ${name}! ${msg} ${lang}`;
//     }
// return innerFunction;
// }

// outer("Hello", "Its a fine day to learn")("student", "Javascript");

const array = (
    function(thingToAdd) {
      const base = 3;
      return [
        function() { return base + thingToAdd; },
        function() { return base; }
      ];
    }
  )(2)