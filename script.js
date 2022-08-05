const squareDiv=document.querySelectorAll('.squares')

const clicked={"red":0,"yellow":0,"green":0,}
squareDiv.forEach(square=>{
    square.onclick=()=>{
        clicked[square.value]+=1;
        square.innerText=clicked[square.value];
    }
})

const clearText=()=>{
    clicked.red=0;
    clicked.yellow=0;
    clicked.green=0;
    squareDiv.forEach(square=>{
        square.innerText= " ";
    })
}
const clear=document.querySelector("#btn");
 clear.onclick=()=>{clearText()};