var currentSelection = document.querySelector('#filters');
currentSelection.addEventListener('change', itemClickEventHandler, false);

var element = document.getElementById('content');

function itemClickEventHandler(e) {
  
  var style = e.target.dataset.property;
  var value = e.target.value;
    
  element.style[style] = value;

}

