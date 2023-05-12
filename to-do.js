const toDoList = [{name:'sym',
                dueDate:'22/12/2001'},
                {name:'syd',
                dueDate:'22/12/2001'}



            ];

renderList();

function addToDo() {    

const inputElm = document.querySelector('.in');
const name = inputElm.value;

const dateInputElm = document.querySelector('.date');
const dueDate = dateInputElm.value;

toDoList.push({name: name,
dueDate: dueDate});
console.log(toDoList);
inputElm.value = ''; 


renderList();
}

function renderList () {


let post = '';


for (let i = 0; i < toDoList.length; i ++){

const todoObject = toDoList[i];
// const name = todoObject.name;
const {name, dueDate} = todoObject;
// const dueDate = todoObject.dueDate;
const html = `
    <p>
        ${name}  ${dueDate}
        <button onclick="toDoList.splice(${i}, 1);  renderList()
        ">delte</button>
    </p>`;
 post +=  html;

}

document.querySelector('.list').innerHTML = post;


}



