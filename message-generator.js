// A day predictor program

const positiveOrNegative = ["positive", "negative"];



const dayAdjectivePos = ["great", "shiny", "the best day of your life"];
const dayAdjectiveNeg = ["shitty", "terrible", "the worst day of your life"];

const randomNounPos = ["sun and rainbow", "coffee for free", "compliments"];
const randomNounNeg = ["spit in your face", "mud and rain", "unexpected bills"];

const dayChangePos = ["even better", "super social", "warmer and happier"];
const dayChangeNeg = ["even worse", "dark and cold", "very lonely"];

const personGeneral = ["boss", "mom", "closest friend", "crush", "colleague"];

const personActionPos = ["hug you and sing a song for you", "give you some extra money just because you are so awesome", "take you out for lunch"];
const personActionNeg = ["slap you", "shout at you for being so terribel person", "complain to you all day and you will have to listen"];

const doThisPos = ["Go out with your friends", "Treat yourself with spa", "Buy yourself a new car"];
const doThisNeg = ["Go hide yourself", "Sell a kidney", "Go get drunk alone"];

const eveningPrognosePos = ["be followed by paparrazi cause they love you", "have too much money for yourself", "get even pretier"];
const eveningPrognoseNeg = ["die alone", "get shoutet on by random strangers", "get bulied again"];

const nicknamePos = ["Dancing Queen", "Love of everyone's life", "Pretty"];
const nicknameNeg = ["Loser", "Sucker", "Stupid"];

const positiveDay = [dayAdjectivePos, randomNounPos, dayChangePos, personGeneral, personActionPos, doThisPos, eveningPrognosePos, nicknamePos];
const negativeDay = [dayAdjectiveNeg, randomNounNeg, dayChangeNeg, personGeneral, personActionNeg, doThisNeg, eveningPrognoseNeg, nicknameNeg];


// What day is it - negative or positive?

const whatDay = () => {
    let day
    let number = Math.floor(Math.random() * 2);
    if (num === 0 ) {
        day = "negative"
    } else {
        day = "positive"
    }
    return day
}

const yourDayPrognose = (func) => {
    if (func = "positive") {
        return true;
    } else {
        return false;
    }
}

console.log(yourDayPrognose(whatDay));

//console.log("This day will be " + dayAdjective + ".");
//console.log("Be ready for some " + randomNoun + ".");
//console.log("Once you get through noon, it will get " + dayChange + ".");
//console.log("Your " + person + " will probably " + personAction + ".");
//console.log(doThis + " tonight, otherwise you will " + eveningPrognose + ".");
//console.log("Good luck, " + nickname + ".");