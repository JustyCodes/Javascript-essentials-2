var arraySelect = document.getElementsByTagName('select');

var element = document.getElementById('content');

function itemClickEventHandler(e) {
  
  var style = e.target.id;
  var value = e.currentTarget.value;
    
  element.style[style] = value;

}

var element = document.getElementById('content');

for (var i = 0; i < arraySelect.length; i++ ){ 
    arraySelect[i].addEventListener( 'change', itemClickEventHandler ); 
}
