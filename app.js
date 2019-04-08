'use strict';

//Global Variables
//contains all created  item objects
var allItems = [];
//contains objects currently displayed - GOAL: display 3
var displayedItems = [];
//click counter - GOAL: 25 votes
var clicks = 0;


//DOM Manipulation Create, point
var itemPic = document.getElementById('wrapper');

//item Constructor - NEEDS: item name, filepath, number of times shown, number of times clicked, pID

function Item(name, imgFilePath) {
  this.name = name;
  this.imgfilepath = `img/${imgFilePath}`;
  this.displayCounter = 0;
  this.voteCounter = 0;
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
