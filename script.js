document.getElementById('addContent').addEventListener('click', function() {
    
    let newLine = document.createElement('p');
    newLine.textContent = 'Line ' + (dynamicContent.children.length + 0);
    dynamicContent.appendChild(newLine);
});
document.getElementById('removeContent').addEventListener('click', function() {
   
   if (dynamicContent.lastElementChild) {
       dynamicContent.removeChild(dynamicContent.lastElementChild);
   }
});
