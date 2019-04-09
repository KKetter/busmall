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
new Item('bag', 'bag.jpg');
new Item('banana', 'banana.jpg');
new Item('bathroom', 'bathroom.jpg');
new Item('boots', 'boots.jpg');
new Item('breakfast', 'breakfast.jpg');
new Item('bubblegum', 'bubblegum.jpg');
new Item('chair', 'chair.jpg');
new Item('cthulhu', 'cthulhu.jpg');
new Item('dog-duck', 'dog-duck.jpg');
new Item('dragon', 'dragon.jpg');
new Item('pen', 'pen.jpg');
new Item('pet-sweep', 'pet-sweep.jpg');
new Item('scissors', 'scissors.jpg');
new Item('shark', 'shark.jpg');
//different filepath for sweep
new Item('sweep', 'sweep.png');
new Item('tauntaun', 'tauntaun.jpg');
new Item('unicorn', 'unicorn.jpg');
//different filepath for usb - this moves
new Item('usb', 'usb.gif');
new Item('water-can', 'water-can.jpg');
new Item('wine-glass', 'wine-glass.jpg');

//show items
function showItem(idOne, idTwo, idThree){
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
function getRandomNumbers(){
  while (displayedItems.length < 3 ) {
    var randomNumber = Math.floor(Math.random() * allItems.length);
    //check if exists in array
    if( !displayedItems.includes(randomNumber) ){
      displayedItems.push(randomNumber);
    }
  }
}
//generate random numbers
getRandomNumbers();
//below will display 3 random images from indecies populated into the displayed Items array
showItem(displayedItems[0],displayedItems[1],displayedItems[2]);

//target voting id section, return id
function handleVoteClick(event) {
  //DIAG
  //console.log('', event.target.title);
  //CHANGE THIS TO 25 WOWEEZOWIE
  if (clicks < 5 ) {
    console.log('', clicks);
    for(let i = 0; i < allItems.length; i++){
      if((allItems[i]).name === event.target.alt){
        allItems[i].voteCounter++;
      }
      //DIAG
      //console.log(allItems[i].name);
    }
    //display new images -> set displayed values to previous, clear displayed values
    previousDisplay = displayedItems;
    displayedItems = [];
    //reassign randoms/display
    getRandomNumbers();
    showItem(displayedItems[0],displayedItems[1],displayedItems[2]);
    //increment universal clicks
    clicks++;
    //when votes reached do this other thing - print chart js is probably good for now we have a console log
  } else for (let index = 0; index < allItems.length; index++) {
    console.log(allItems[index].name + ' total Votes', allItems[index].voteCounter);
  }
}
votingZone.addEventListener('click', handleVoteClick);


