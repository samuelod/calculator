function getInputValue(){
    let input = event.target.innerText;
    console.log(input)
    printValue(input);
}

// we will make a function that will print the values inside our field 
function printValue(val){
    let output = document.querySelector('#result');
    let current = output.innerHTML;

    if(output.innerHTML == 0)
    {
        if(val !="AC" && val !="DEL"){
            output.innerHTML ="";
            output.innerHTML += val;
        }

    }else{

    }
}

let buttons = document.getElementsByTagName('button');
for(var i = 0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');//with this we will add the onclick method to all the buttons
}

