/* Requisitos del Proyecto Lista de Tareas */
/* Hacer una lista de tareas en html, css y js  que tenga un input donde tenga un boton de agregar tarea
   Y tenga un input y un label donde se ingrese el nombre de la tarea 
   Tabien tiene que tener una lista de opciones donde se coloque la tarea pendiente en proceso y finalizada
   Y organizar en 3 columnas de segun en la opcion que este asignada la tarea segun este pendiente o en proceso y finalizada
   Y tambien tiene que subrayar la tarea cuando se quiera eliminar
   Agregar tambien un boton para cuando quieras eliminar la tarea.
*/

document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('taskName').value;
    if (taskName === '') {
        alert('Por favor, ingrese el nombre de la tarea.');
        return;
    }

    const task = document.createElement('div');
    task.className = 'task';
    
    const taskText = document.createElement('span');
    taskText.textContent = taskName;
    task.appendChild(taskText);
    
    const select = document.createElement('select');
    select.innerHTML = `
        <option value="pending">Pendiente</option>
        <option value="inProgress">En Proceso</option>
        <option value="completed">Finalizada</option>
    `;
    select.addEventListener('change', function() {
        moveTask(task, this.value);
    });
    task.appendChild(select);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        task.classList.add('underlined');
        setTimeout(() => {
            task.remove();
        }, 1000);
    });
    task.appendChild(deleteButton);
    
    document.getElementById('pending').appendChild(task);
    document.getElementById('taskName').value = '';
};

function moveTask(task, status) {
    const columns = {
        'pending': document.getElementById('pending'),
        'inProgress': document.getElementById('inProgress'),
        'completed': document.getElementById('completed')
    };
    columns[status].appendChild(task);
};
