const input = document.querySelector(".input-keep");
const btnSubmit = document.querySelector(".btn-submit");
let ul = document.querySelector("ul");
let div = document.querySelector("div");
let p = document.createElement("p");
input.focus();


function noItemMsg(){
    p.appendChild(document.createTextNode("Aucune tache pour le moment!"));
    div.appendChild(p);
    p.classList.add("paragraphe");
//    console.log(p);
}

// function deleteNoItemMsg(){
//     p
// }


(function getValues(){
    // debugger
    
    if(!window.localStorage.toDoList) {
       noItemMsg()
    }else{
        ul.innerHTML  = window.localStorage.toDoList;
    }
})()



function createNewKeep() {
    let li = document.createElement("li");
    let delBtn = document.createElement("button")
    let checkBtn = document.createElement("button")
    // p.classList.add("paragraphe-hidden");
    
    p.style.display = "none";
    
    checkBtn.appendChild(document.createTextNode("V"));
    li.appendChild(checkBtn);
    checkBtn.classList.add("check-btn")
    // checkBtn.addEventListener("click", checkItem())

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add("list-item")

    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    delBtn.classList.add("del-btn")
    // delBtn.addEventListener("click", deleteItem())

    input.value = "";
    
    // function checkItem(){
    //     li.classList.add("done")
    // }


    // function deleteItem(){
    //     li.classList.add("disappear")
    // }




    storage();
    input.focus();
    
}

function storage() {
  window.localStorage.toDoList = ul.innerHTML;
}




