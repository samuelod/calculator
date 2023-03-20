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
        if(val =="DEL"){
            output.innerHTML = current.slice(0,-1); // the slice() method allows us to remove a part of the string 
            if(output.innerHTML.length <=1){
                output.innerHTML = "0";
            }
        }

        if(val != "AC" && val!="DEL" && val!="="){
            output.innerHTML += val;
        }

        if(val =="AC"){
            output.innerHTML = "0";
         }

         //now we will return the formula 
         //for this we will use the eval function that return a result of a mathematic formula
         if(val =="="){
            let ans = output.innerHTML
            output.innerHTML = eval(ans)
         }
    }
}

let buttons = document.getElementsByTagName('button');
for(var i = 0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');//with this we will add the onclick method to all the buttons
}

