var currentSelection = document.querySelector('#background');
currentSelection.addEventListener('change', itemClickEventHandler, false);
var currentSelectionTwo = document.querySelector('#backgroundColor');
currentSelectionTwo.addEventListener('change', itemClickEventHandler, false);
var currentSelectionThree = document.querySelector('#width');
currentSelectionThree.addEventListener('change', itemClickEventHandler, false);
var currentSelectionFour = document.querySelector('#height');
currentSelectionFour.addEventListener('change', itemClickEventHandler, false);
var currentSelectionFive = document.querySelector('#borderRadius');
currentSelectionFive.addEventListener('change', itemClickEventHandler, false);

var arraySelect = document.getElementsByTagName('select');

var element = document.getElementById('content');

function itemClickEventHandler(e) {
  
  var style = e.target.id;
  var value = e.currentTarget.value;
    
  element.style[style] = value;

}

var element = document.getElementById('content');
