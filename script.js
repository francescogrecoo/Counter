//dichiaro le variabili

let add = document.querySelector("#plus");
let remove = document.querySelector("#minus");
let result = document.querySelector("#result");
let clean = document.querySelector("#clean");
let counter = 0;

//selezioen la variabibile e con .addeventlistener do le istruzioni

add.addEventListener("click" , () =>{
    counter++;
    result.innerText = counter;
});

remove.addEventListener("click" , () =>{
    counter--;
    result.innerText = counter;
});

//button refresh add o remove meno add o remove

clean.addEventListener("click" , () => {
    counter = add | remove - add | remove ;
    result.innerText = counter;
});