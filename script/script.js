'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerButton = document.querySelector('.header-button');

let todoData = [];
    todoData = JSON.parse(localStorage.getItem("todoData"));

const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    localStorage.setItem('todoData', JSON.stringify(todoData));

    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' + 
                '<button class="todo-complete"></button>' + 
            '</div>';
        
        if (item.completed){
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        const btnTodoCompleted = li.querySelector('.todo-complete');
        btnTodoCompleted.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });
        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', () => {
           todoData.splice([0], 1);
           console.log(todoData);
           render();
        });
    });
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newToDo = {
        value: headerInput.value,
        completed: false   
    };
    if (headerInput.value !== ''){
        todoData.push(newToDo); 
        headerInput.value = '';       
    } else {
        return;
    }
    render();
});


render();
 
