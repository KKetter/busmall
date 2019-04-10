'use strict';

//Global Variables
//contains all created  item objects
var allItems = [];
//contains objects currently displayed - GOAL: display 3
var displayedItems = [];
var previousDisplay = [];
var votingZone = document.getElementById('votingZone');
//click counter - GOAL: 25 votes
var clicks = 0;
var chartDrawn = false;

//item Constructor - NEEDS: item name, filepath, number of times shown, number of times clicked
function Item(name, imgFilePath) {
  this.name = name;
  this.imgFilePath = 'img/' + imgFilePath;
  this.displayCounter = 0;
  this.voteCounter = 0;
  //Get into the global array
  allItems.push(this);
}

//20 items
new Item('Bag', 'bag.jpg');
new Item('Banana', 'banana.jpg');
new Item('Bathroom', 'bathroom.jpg');
new Item('Boots', 'boots.jpg');
new Item('Breakfast', 'breakfast.jpg');
new Item('Bubblegum', 'bubblegum.jpg');
new Item('Chair', 'chair.jpg');
new Item('Cthulhu', 'cthulhu.jpg');
new Item('Dog-Duck', 'dog-duck.jpg');
new Item('Dragon', 'dragon.jpg');
new Item('pen', 'pen.jpg');
new Item('Pet-Sweep', 'pet-sweep.jpg');
new Item('Scissors', 'scissors.jpg');
new Item('Shark', 'shark.jpg');
//different filepath for sweep
new Item('Sweep', 'sweep.png');
new Item('Tauntaun', 'tauntaun.jpg');
new Item('Unicorn', 'unicorn.jpg');
//different filepath for usb - this moves
new Item('Usb', 'usb.gif');
new Item('Water-can', 'water-can.jpg');
new Item('Wine-glass', 'wine-glass.jpg');

//show items
function showItem(idOne, idTwo, idThree) {
  //anchor to DOM - this is my failure to allow intake of array. rest can be looped easily?
  let itemPicOne = document.getElementById('pic1');
  let itemPicTwo = document.getElementById('pic2');
  let itemPicThree = document.getElementById('pic3');

  allItems[idOne].displayCounter += 1;
  allItems[idTwo].displayCounter += 1;
  allItems[idThree].displayCounter += 1;

  itemPicOne.alt = allItems[idOne].name;
  itemPicTwo.alt = allItems[idTwo].name;
  itemPicThree.alt = allItems[idThree].name;

  itemPicOne.title = allItems[idOne].name;
  itemPicTwo.title = allItems[idTwo].name;
  itemPicThree.title = allItems[idThree].name;

  itemPicOne.src = allItems[idOne].imgFilePath;
  itemPicTwo.src = allItems[idTwo].imgFilePath;
  itemPicThree.src = allItems[idThree].imgFilePath;

  itemPicOne.value = idOne;
  itemPicTwo.value = idTwo;
  itemPicThree.value = idThree;
}

//pick a number, check if in array
function getRandomNumbers() {
  while (displayedItems.length < 3) {
    var randomNumber = Math.floor(Math.random() * allItems.length);
    //check if exists in array
    if (!displayedItems.includes(randomNumber) && !previousDisplay.includes(randomNumber)) {
      displayedItems.push(randomNumber);
    }
  }
}
//generate random numbers
getRandomNumbers();
//below will display 3 random images from indecies populated into the displayed Items array
showItem(displayedItems[0], displayedItems[1], displayedItems[2]);

//target voting id section, return id
function handleVoteClick(event) {
  //DIAG
  //console.log('', event.target.title);
  //change this to 25 plz
  if (clicks < 25) {
    console.log('', previousDisplay);
    for (let i = 0; i < allItems.length; i++) {
      if ((allItems[i]).name === event.target.alt) {
        allItems[i].voteCounter++;
      }
      //DIAG
      //console.log(allItems[i].name);
    }
    //display new images -> set displayed values to previous, clear displayedItems array
    previousDisplay = displayedItems;
    displayedItems = [];
    //reassign randoms/display
    getRandomNumbers();
    showItem(displayedItems[0], displayedItems[1], displayedItems[2]);
    //increment universal clicks
    clicks++;
    //when votes reached do this other thing - print chart js is probably good for now we have a console log
  } else {
    if (!chartDrawn) createChart();
    fillLocalStorage();
  }
}
votingZone.addEventListener('click', handleVoteClick);

//CHART creation
function createChart() {
  chartDrawn = true;
  let arrayOfNames = [];
  let arrayOfVotes = [];
  for (let index = 0; index < allItems.length; index++) {
    //name indexes to go into arrName
    arrayOfNames[index] = allItems[index].name;
    //voteCounter indexies(?) to arrVote
    arrayOfVotes[index] = allItems[index].voteCounter;
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  //eslint-disable-next-line no-undef, no-unused-vars
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      //image names = labels
      labels: arrayOfNames,
      datasets: [{
        label: 'Bus Mall Voting',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        //import data by means allItems[index].voteCounter values
        data: arrayOfVotes
      }]
    },

    // Configuration options go here
    options: {}
  });
}


//LOCAL STORAGE INTEGRATION
//Use this somewhere - localStorage.clear();
//store values AFTER 25 clicks - line 114 is actions once we break 25 clicks
//create the array to hold ls values
//put values in array - parse ints for storage?
//
// if (typeof(Storage) !== 'undefined'){
//   //if ls exists retrieve & parse & assign
//   for (let index = 0; index < voteValue.length; index++) {
//     var voteValue = JSON.parse(localStorage.getItem('voteValue'));
//   }
// } else {
// }
//else instantiate product obj (into ls)
function fillLocalStorage() {
  localStorage.clear();
  for (let index = 0; index < allItems.length; index++) {
    localStorage.setItem(JSON.stringify(allItems[index].name), JSON.stringify(allItems[index].voteCounter));
  }
}

function loadLocalStorage() {
  //check for local storage
  if (typeof (Storage) !== 'undefined') {
    //
    //object.values()
  }
}
loadLocalStorage();

