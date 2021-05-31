let todoItems = [];
let element ;
let currentChange;
let  addList  = document.getElementById("add-list");
let closeList = document.querySelector(".close");
let closeItem = document.getElementById("close-item")






addList.addEventListener('click',function(){
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector(".main-container").style.filter = "blur(8px)";
    
});

closeList.addEventListener('click',()=>{
    document.querySelector(".pop-up").style.display = "none";
    document.querySelector(".main-container").style.filter = "none";
    document.querySelector("#myText").value = "";
});


function addTodo() {
   
    document.querySelector(".main-container").style.filter = "none";
    document.querySelector(".notodo").style.display = "none";


    var listname = document.getElementById("myText").value;
    if(listname !== ""){
        const todo ={
            listname,
            id : Date.now(),
            subtask: [],
        };
        todoItems.push(todo);
        render();
        back();
        document.querySelector("#myText").value = "";
    }
  }
 
  function render(todo){

    const list = document.querySelector(".flex-container");
    var child = list.lastElementChild;
    while(child){
        list.removeChild(child);
        child = list.lastElementChild;
    }
    for(let i=0; i<todoItems.length; i++){
        const card = document.createElement("div");
        card.setAttribute("class","card-container");
        card.setAttribute("id",todoItems[i].id);
        card.innerHTML =  `<p class="listname">${todoItems[i].listname}</p> 
                           <hr>
                           <ul class="ul"></ul>
                           <i class="fas fa-trash-alt" id="delete-card" onclick = "removeCard(this)"></i>
                           <i class="fas fa-plus-circle t " id ="add-item"  onclick="addNewItem(this)"></i>
                                `;
        
        list.append(card);
    }

  }
  

  
function back(){
    document.querySelector(".pop-up").style.display = "none";
}

function backItem(){
    document.querySelector("#pop-item").style.display = "none";
    document.querySelector(".main-container").style.filter = "none";
}

document.querySelector("#close-item").addEventListener('click',function(){
    document.querySelector("#pop-item").style.display = "none";
    document.querySelector(".main-container").style.filter = "none";
});


function addNewItem(e){  
    document.querySelector("#pop-item").style.display = "flex";
    document.querySelector(".main-container").style.filter = "blur(8px)";
    
    element=e.parentElement.id;
    console.log(element);
    
   
}



    /////  ADD SUBTASK
document.querySelector("#add-subitem").addEventListener('click',function(e){
   
    let subItemName = document.getElementById("subText").value;
   
    const subtodo ={
        subItemName,
        id:Date.now(),
    }
    const node = document.createElement("li");
    node.setAttribute('class','todo-item ul');
    node.innerHTML = `${subItemName}
                        <button class="mark-done" onclick="markDone(this)">Mark Done</button>`;
    let item = document.querySelector(".card-container");
    
    for(let i=0;i<todoItems.length;i++){
        if(element == todoItems[i].id){
            console.log(todoItems[i].id);
            console.log(element);
            todoItems[i].subtask.push({
                name:subItemName,
                id:Date.now(),
            });
        } 

    }   
    item.append(node);
    document.querySelector("#pop-item").style.display = "none";
    document.querySelector(".main-container").style.filter = "none";
    document.querySelector("#subText").value = "";
  
});



function removeCard(e){
   let a =e.parentNode.id;
   for(let i=0;i<todoItems.length;i++){
       if(a == todoItems[i].id){
        e.parentNode.remove();
        todoItems.pop();
       }
   }
    


}


function markDone(e){
   
    let mark = e.parentElement;
    e.style.display = "none";
    mark.classList.add("completed");
}


