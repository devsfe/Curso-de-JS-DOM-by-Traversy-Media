//   EXAMINANDO O DOCUMENTO   //

//console.dir(document); 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
  //document.title = "Testando"; Mudando o titulo
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
  //document.all[10].textContent = 'Helllo World'; Mudando elemento com document.all(não usar.)
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


//   getElementById   //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello World';
// headerTitle.innerText = 'Goodbye World';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h2>Teste<h2>';    
// header.style.borderBottom = 'solid 1px #000';


//   getElementsByClassName   //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[1].textContent = 'Hello World';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// da erro
//items.style.backgroundColor = 'blue';

//for(var i = 0; i < items.length; i++) {
//    items[i].style.backgroundColor = 'blue';
// }



//   getElementsByTagName   //
// var li = document.getElementsByTagName('li');     
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello World';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// da erro
//li.style.backgroundColor = 'blue';

// for(var i = 0; i < li.length; i++) {
//    li[i].style.backgroundColor = 'blue';
// }



//   querySelector   //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); 
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.style.backgroundColor = 'blue';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'pink';



//   querySelectorAll   //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
    // odd[i].style.backgroundColor = 'red';
    // even[i].style.backgroundColor = 'purple';
// }



//   ATRAVESSANDO O DOM   //
var itemList = document.querySelector('#items');
  //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode);


  //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement);

  //childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'blue';

  //firstChild
  // console.log(itemList.firstChild);
  //firstElementChild
  // console.log(itemList.firstElementChild);
  // itemList.firstElementChild.textContent = 'Hello First';

  //lastChild
  // console.log(itemList.lastChild);
  //lastElementChild
  // console.log(itemList.lastElementChild);
  // itemList.lastElementChild.textContent = 'Hello Last';

  //nextSibling
  // console.log(itemList.nextSibling);
  //nextElementSibling
  // console.log(itemList.nextElementSibling);

  //previousSibling
  // console.log(itemList.previousSibling);
  //previousElementSibling
  // console.log(itemList.previousElementSibling);
  // itemList.previousElementSibling.style.color = 'green';

  //createElement


  // Criar uma div
  var newDiv = document.createElement('div');

  // Adicionar classe  
  newDiv.className = 'hello';

  // Adicionar ID
  newDiv.id = 'hello1';

  // Adicionar attr
  newDiv.setAttribute('title', 'hello Div');

  // Criar text node
  var newDivText = document.createTextNode('Hello World');

 // Adicionar text a div
 newDiv.appendChild(newDivText);

 // Inserindo elemento no Dom

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = '600';

container.insertBefore(newDiv, h1);
