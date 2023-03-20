function getInputValue(){
    let input = event.target.innerText;
    console.log(input)
}

let buttons = document.getElementsByTagName('button');
for(var i = 0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');//with this we will add the onclick method to all the buttons
}