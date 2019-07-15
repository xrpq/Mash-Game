function getRandomInt(maxInt) {
    return Math.floor(Math.random() * Math.floor(maxInt));
 }
 function randItemOfList(listName){
    return (listName[Math.floor(Math.random() * listName.length - 1) + 1]);
 }
 function inputName(){
     if ((process.argv[2]) == typeof 'string'){
        return "Your name is " + process.argv[2];
    }
    else{
        console.log("You did not input a valid name so a random name was chosen for you!")
        let inputName = randItemOfList(Users)
        console.log(inputName)
        return inputName
    }
          
}
function fiftyChance(){
    if (getRandomInt(100) >= 50){
       return (hair[0]);
    }
    else
        return (hair[1]);

}
   
 let Users = ["Urman", "arqkk", "Dividing", "PotRefill", "Edsby", "Landen", "Vexin", "Evilrare", "Grayers", "Chimpys"];
 let Abilities = ["immortality", "flight", "xray Vision", "no Vision", "invisibility", "super Strength", "super Speed", "super Sped", "no special pwoer"];
 let Jobs = ["Teacher", "Assasin", "Bouncer", "jobless", "Garbage Man", "Professional Gamer", "Scientist", "Pizza maker", "Youtuber"];
 let homes = ["a condo", "a mansion", "a home", "the outback", "a cardbaord box", "the street"];
 let Location = ["Europe", "Alaska", "North America", "South America", "Antartica", "Africa", "Asia", "Austrailia", " the ocean", "the bermuda triangle"];
 let income = ["below minimun wage", getRandomInt(80) +" an hour"];
 let hair = ["you have hair", "you do not have hair"];
 let kids = [getRandomInt(100)];
 
console.log(inputName() + " you are a " + randItemOfList(Jobs) + " who lives in " + randItemOfList(homes) + " in " + randItemOfList(Location) + " and you make " + randItemOfList(income) + ". The Gods have given you  " + randItemOfList(Abilities) + ".");
console.log("Oh yea... and " + fiftyChance())
 
// const jobs = await input.checkboxes(`OK ${name}, choose some jobs`, ['Teacher', 'Assasin', 'Bouncer', 'jobless', 'Garbage Man', "Professional Gamer", "Scientist"
//   , "Pizza maker", "Youtuber"]); 
// console.log('You chose:\n  ' + jobs.join('\n  '));

