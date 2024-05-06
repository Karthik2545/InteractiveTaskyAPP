const list={
    items:[]
};

const card=document.querySelector(".newcard");
const card1=document.querySelector(".newcard1");
const addreminder=({id,url,title,time,purpose})=>`
    <div>
        <div class="card mt-2" style="width: 18rem;background-color: whitesmoke;height: 345px;padding: 5px;" id=${id} key=${id}>
            <div class="but">
                <div class='card-header d-flex gap-2 justify-content-end task__card__header'>
                    <button type='button' class='btn btn-outline-danger mr-2' name=${id} onclick="deleteTask.apply(this, arguments)">
                    <i class='fas fa-trash-alt'></i></button>
                </div>
            </div>    
            <img src=${url} class="card-img-top" style="height: 150px;">
            <div class="card-body">
                <div class="card-items">
                    <i class="fa-solid fa-feather-pointed"></i>
                    <h5 class="card-title">${title}</h5>
                </div>
                <div class="card-items">
                    <i class="fa-solid fa-bell"></i>
                    <h5>${time}</h5>
                </div>
                <div class="card-items">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <p class="card-text">${purpose}</p>
                </div>
                <div class="butt">
                    <button type='button' class='btn btn-outline-info mr-2' name=${id} data-bs-toggle="modal" data-bs-target="#showTask" onclick="openTask.apply(this, arguments)">
                    open Task</button>
                </div>
            </div>
        </div>
    </div>
  `
  const add=({id,url,title,time,purpose})=>`
                    <div class="card mt-2" style="width: 18rem;background-color: whitesmoke;height: 315px;padding: 5px;" id=${id} key=${id}>  
                        <img src=${url} class="card-img-top" style="height: 150px;">
                        <div class="card-body">
                            <div class="card-items">
                                <i class="fa-solid fa-feather-pointed"></i>
                                <h5 class="card-title">${title}</h5>
                            </div>
                            <div class="card-items">
                                <i class="fa-solid fa-bell"></i>
                                <h5>${time}</h5>
                            </div>
                            <div class="card-items">
                                <i class="fa-solid fa-book-open-reader"></i>
                                <p class="card-text">${purpose}</p>
                            </div>
                        </div>
                    </div>`

const openTask=(e)=>{
    const tid =e.target.getAttribute("name");
    const mydata=JSON.parse(localStorage.getItem("data"));
    mydata.keys.map((numbers)=>{
            if(numbers.id===tid){
                card1.insertAdjacentHTML("beforeend",add({...numbers,tid}));
                
            }
        })
    }

const deleteTask=(e)=>{
    const tid =e.target.getAttribute("name");

    const mydata=JSON.parse(localStorage.getItem("data"));
    mydata.keys.map((values)=>{
        if (values.id===tid){
            list.items.pop(values);
            e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
            updlocalStorage();
        }
    })
}

const updlocalStorage=()=>{
    localStorage.setItem('data',JSON.stringify({keys:list.items}));
};

const load = () => {
    const localStorageCopy = JSON.parse(localStorage.data);

    if(localStorageCopy) list.items = localStorageCopy.keys;
    list.items.map((cardDate) => {
        card.insertAdjacentHTML("beforeend", addreminder(cardDate));
     });
};

const clicksubmit=()=>{
    var id=Date.now();
    id=id.toString();
    const input={
        url:document.getElementById("imageUrl").value,
        title:document.getElementById("title").value,
        time:document.getElementById("time").value,
        purpose:document.getElementById("purpose").value,
    }

    list.items.push({...input,id});
    updlocalStorage();
    card.insertAdjacentHTML("beforeend",addreminder({...input,id}));

}



// const search=(e)=>{
//     const message=document.getElementById("mark").value;
//     // if( message === list.items.title)
//     list.items.filter((cardDate) => {
//         card.insertAdjacentHTML("beforeend", addreminder(cardDate));
//     });
// };
// console.log(list.items);
// const searchTask = (e) =>{
//     if(!e) e = window.event;
    
//     while(taskContents.firstChild){
//         taskContents.removeChild(taskContents.firstChild);
//     }

//     const resultData = state.taskList.filter(({title})=>  title.includes(e.target.value));

//     console.log(resultData);
//     resultData.map((cardData) => {
//         taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardData));
//     });
// }*