var div1 = document.createElement('div');
div1.setAttribute('class','header-container');

var Head1 =document.createElement('h1');
Head1.setAttribute('class', 'h1');
var Text1 = document.createTextNode('This is an h1');
Head1.appendChild(Text1);
div1.appendChild(Head1);

var item = 1;

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div1); // add the header to the document body
    document.getElementById("myBtn").addEventListener("click", function(){
        
        var node = document.createElement("LI");
        var textnode = document.createTextNode("This is the item "+ item);
        node.appendChild(textnode);
        document.getElementById("demo").appendChild(node);
        item++;

    document.getElementById("demo").addEventListener("click", myFunction1);

        function myFunction1() {
            
            var list = ['blue','red','yellow','black','brown','green','orange','purple'];
            var colorcontainer = list[Math.floor(Math.random() * 10)];
            Head1.style.color = colorcontainer;
        }
      });
 });


var Head2 = document.createElement('h2');
var Text2 = document.createTextNode('This is an h2');
Head2.setAttribute('class', 'h2');
Head2.appendChild(Text2);
div1.appendChild(Head2);

var Head3 = document.createElement('h3');
var Text3 = document.createTextNode('This is an h3');
Head3.setAttribute('class', 'h3');
Head3.appendChild(Text3);
div1.appendChild(Head3);

var Head4 = document.createElement('h4');
var Text4 = document.createTextNode('This is an h4');
Head4.setAttribute('class', 'h4');
Head4.appendChild(Text4);
div1.appendChild(Head4);

var Head5 = document.createElement('h5');
var Text5 = document.createTextNode('This is an h5');
Head5.setAttribute('class', 'h5');
Head5.appendChild(Text5);
div1.appendChild(Head5);

var Head6 = document.createElement('h6');
var Text6 = document.createTextNode('This is an h6');
Head6.setAttribute('class', 'h6');
Head6.appendChild(Text6);
div1.appendChild(Head6);



Head1.addEventListener("click", myFunction1);

function myFunction1() {
    
    var list = ['blue','red','yellow','black','brown','green','orange','purple'];
    var colorcontainer = list[Math.floor(Math.random() * 10)];
    Head1.style.color = colorcontainer;
}