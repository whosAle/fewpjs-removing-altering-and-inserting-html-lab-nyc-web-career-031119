// Write your code here!
let main = document.querySelector('#main');
main.remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerText = "YOUR-NAME is the champion";
document.querySelector('body').appendChild(newHeader);
