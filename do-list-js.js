function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn

            newItem();}}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u00D7");
  span1.className = "close";
  span1.appendChild(txt1);
  myNodelist[i].appendChild(span1);
}            

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("item").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("item").value = "";

  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u00D7");
  var span2=document.createElement("SPAN");
  var txt2=document.createTextNode("\u270E");
  span2.className="edit";
  span1.className = "close";
  span1.appendChild(txt1);
  span2.appendChild(txt2);
  myNodelist[i].appendChild(span1);
  myNodelist[i].appendChild(span2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
