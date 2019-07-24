var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('.list-item');
var deleteButtons = document.querySelectorAll('.delete');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var deleteButton = document.createElement('button');

    span.appendChild(document.createTextNode(input.value));
    span.classList.add('list-item');
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.classList.add('delete');

    li.appendChild(span);
    li.appendChild(deleteButton);
    addMarkOffEventListener(li);
    addDeleteButtonEventListener(deleteButton);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addMarkOffEventListener(li) {
    li.addEventListener("click", markItemDone);
}

function markItemDone(event) {
    event.target.classList.toggle('done');
}

function addDeleteButtonEventListener(button) {
    button.addEventListener("click", deleteListItem);
}

function deleteListItem(event) {
    var li = event.target.parentElement;
    li.parentNode.removeChild(li);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
lis.forEach(addMarkOffEventListener);
deleteButtons.forEach(addDeleteButtonEventListener);
