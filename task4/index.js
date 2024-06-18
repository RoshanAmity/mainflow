document.addEventListener('DOMContentLoaded', () => {
    const addtask = document.getElementById('Add');
    const task = document.getElementById('task');
    const time = document.getElementById('time');
    const list = document.getElementById('list');

    addtask.addEventListener('click', addTodoItem);

    function addTodoItem() {
        const todotask = task.value.trim();
        const todotime = time.value.trim();

        if (todotask === "") {
            task.style.backgroundColor = 'red';
            alert("Please Enter Your Task.");
            return;
        } else {
            task.style.backgroundColor = '';
        }

        if (todotime === "") {
            time.style.backgroundColor = 'red';
            alert("Please Enter Your Time.");
            return;
        } else {
            time.style.backgroundColor = '';
        }

        const li = document.createElement('li');

        const check = document.createElement('div');
        check.classList.add('check');
        check.style.width = '20px';
        check.style.height = '20px';
        check.style.backgroundColor = "#ffffff";
        check.style.borderRadius = "3px";
        check.style.display = 'inline-block';
        check.style.marginRight = '10px';

        check.addEventListener('click', checkcolor);

        const texttask = document.createElement('span');
        texttask.classList.add('texttask');
        texttask.textContent = todotask;

        const texttime = document.createElement('span');
        texttime.classList.add('texttime');
        texttime.textContent = todotime;
        texttime.style.marginLeft = '10px';

        const deletebutton = document.createElement('img');
        deletebutton.classList.add('delete');
        deletebutton.src = "dustbin.png";
        deletebutton.style.backgroundColor = "#C80036";
        deletebutton.style.marginLeft = '10px';
        deletebutton.addEventListener('click', deleteitems);

        li.appendChild(check);
        li.appendChild(texttask);
        li.appendChild(texttime);
        li.appendChild(deletebutton);

        list.appendChild(li);

        // Clear input fields after adding the task
        task.value = '';
        time.value = '';
    }

    function checkcolor(event) {
        const clicked = event.target;
        const currentColor = clicked.style.backgroundColor;

        const li = clicked.parentElement;
        const texttask = li.querySelector('.texttask');
        const texttime = li.querySelector('.texttime');

        if (currentColor === 'rgb(255, 255, 255)') {
            clicked.style.backgroundColor = "#C80036";
            texttask.style.textDecoration = "line-through";
            texttime.style.textDecoration = "line-through";
        } else {
            clicked.style.backgroundColor = "#ffffff";
            texttask.style.textDecoration = "none";
            texttime.style.textDecoration = "none";
        }
    }

    function deleteitems(event) {
        const deleteitem = event.target;
        const li = deleteitem.parentElement;
        list.removeChild(li);
    }
});
