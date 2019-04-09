'use strict';

//Global Variables
//contains all created  item objects
var allItems = [];
//contains objects currently displayed - GOAL: display 3
var displayedItems = [];
//click counter - GOAL: 25 votes
var clicks = 0;

//item Constructor - NEEDS: item name, filepath, number of times shown, number of times clicked
function Item(name, imgFilePath) {
  this.name = name;
  console.log('', 'img/' + imgFilePath);
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

//DOM Manipulation anchor, create, do

//show items
function showItem(idOne, idTwo, idThree){
  //anchor
  let itemPicOne = document.getElementById('pic1');
  let itemPicTwo = document.getElementById('pic2');
  let itemPicThree = document.getElementById('pic3');

  //This will be tripled to show 3 items?
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

showItem(0,1,2);

//this will need a pick random values tied in w/ checking for image redundancy

