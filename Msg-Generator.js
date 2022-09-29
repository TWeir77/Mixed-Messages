const ansObj = {
    array1 : ["Goku", "Vegeta", "Monster #8", "Future Trunks", "Simon the Digger", "Kamina", "Yoko Ritona", "Gutz", "Noctis Leucis Caelum", "Aksel Naess", "Ashley Price", "Iron Man", "Thor", "Saitama", "Genos", "Obi-Wan Kenobi", "All-Might", "Itadori Yuji", "Sukuna Ryomen",],
    array2 : ["This is to go even Further Beyond!", "Go beyond Plus Ultra!", "All the lights in the sky are stars!", "Believe in the You that believes in Yourself!", "I am Kafka Hibino!", "I'm a hero for fun!", "I must get stronger, I Need To!", "Have a taste of Saiyan Pride!", "Let's see you Grit Those Teeth!", "It'll take Two, and No More!", "Touch the Untouchable, Break the Unbreakable!", "Row! Row! Fight The Power!", "I am Iron Man!", "This Ends Here And Now!", "Kings of Leucis, Come To Me!", "It's Over Anakin, I Have The High Ground!", "It's Alright Now, Because I Am Here!", "You Cannot Stop Me!", "Black Flash!"],
    array3 : ["Storm the Castle", "Steal the Data", "Collect the DragonBalls", "Stop the Sith", "Deceive the Beastmen", "Defeat the Spiral King", "Defeat Frieza", "Stop Strazar", "Destory the Death Star", "Annihilate the Demons", "Disarm the Bomb", "Conquer Hell", "Train to go Super Saiyan", "Become the #1 Hero", "Find the Meaning of Life", "Build a Harem", "Look Beyond Your Past", "Solve the Puzzle", "Destroy the Curse"]
}

let randArrNum = arr => Math.floor(Math.random() * arr.length)

const messageSelector = (arr) => {
    return arr[randArrNum(arr)]
}

console.log(`Your partner for this mission is ${messageSelector(ansObj.array1)}!`);
console.log(`Your Battle Cry is "${messageSelector(ansObj.array2)}"`);
console.log(`Your Objective: ${messageSelector(ansObj.array3)}`);