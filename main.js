const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went " + 
"for a walk. When they got to :inserty:, they stared in horror " +  
"for a few moments, then :insertz:. Bob saw the whole thing, " +
"but was not surprised — :insertx: weighs 300 pounds, and " + 
"it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
    let newStory = "It was 94 fahrenheit outside, so :insertx: went " + 
    "for a walk. When they got to :inserty:, they stared in horror " +  
    "for a few moments, then :insertz:. Bob saw the whole thing, " +
    "but was not surprised — :insertx: weighs 300 pounds, and " + 
    "it was a hot day.";

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replaceAll(":insertx:", xItem);

    if(customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300); // divide lbs by 14 to get stones
        weight = ((weight / 14)).toFixed(2) + " stone";

        let temperature =  Math.round(94);// C = (°F - 32) × 5/9;
        temperature = ((temperature - 32) * (5 / 9)).toFixed(2) + " centigrade";

        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
    console.log(newStory);
}