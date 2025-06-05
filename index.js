const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

function openModal() {
    document.getElementById("taskModal").classList.add("active");
}
function closeModal() {

    document.getElementById("taskModal").classList.remove("active");

}
function opencreate() {
    document.getElementById("create").classList.add("active");
}
function openjoin() {
    document.getElementById("Join").classList.add("active");
}
function opennewtask() {
    document.getElementById("taskModal").classList.add("active");
}
function closejoin() {
    document.getElementById("Join").classList.remove("active");
}
function closecreat() {
    document.getElementById("create").classList.remove("active");
}





document.querySelector('.btn-save').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get values from the form
    const name = document.querySelector('input[placeholder="Enter task title"]').value;
    const description = document.querySelector('textarea').value;
    const assignee = document.querySelectorAll('select')[0].value;
    const priority = document.querySelectorAll('select')[2].value;
    const startDate = document.querySelectorAll('input[type="date"]')[0].value;
    const endDate = document.querySelectorAll('input[type="date"]')[1].value;
    const status=document.querySelectorAll('select')[3].value;

    // Construct the task object
    const taskData = {
        name: name,
        description: description,
        assignee: assignee,
        priority: priority,
        startDate: startDate,
        endDate: endDate,
        status:status
    };

    // Send POST request to Spring Boot backend
    fetch('http://localhost:8080/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('Error creating task');
        }
        return response.json();
    })
    .then(data => {
        console.log('Task created:', data);
        alert('Task created successfully!');
        closeModal(); // Close modal
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to create task');
    });
});

// Close modal function
function closeModal() {
    document.getElementById('taskModal').style.display = 'none';
}

 async function fetchTask() {
    try {
        const response = await fetch("http://localhost:8080/api/tasks"); // Adjust URL if needed
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const task = await response.json();
        
        console.log(task); 
        renderTask(task);
    }
     catch (error) {
        console.error("Error fetching Task:", error);
    }

}

function renderTask(task) {
   
    let todo= document.querySelector(".todo");
    let inProgress = document.querySelector(".inProgress");
     let inReview = document.querySelector(".inReview");
    let done = document.querySelector(".done");
    let blocked = document.querySelector(".blocked");
   
    
    task.forEach(t=>{
        console.log(t["name"]);
        if(t["status"].toLowerCase()=="todo"){
            todo.innerHTML += 
            `<div class="task-card">
        <p class="task-id">Task id - ${t["id"]}</p>
        <p class="task-title">${t["name"]}</p>
        <div class="tags">
          <span class="Priority">${t["priority"].toUpperCase()}</span>
        </div>
      </div>`
        }else if(t["status"].toLowerCase()=="inprogress"){
            inProgress.innerHTML += 
            `<div class="task-card">
        <p class="task-id">Task id - ${t["id"]}</p>
        <p class="task-title">${t["name"]}</p>
        <div class="tags">
          <span class="Priority">${t["priority"].toUpperCase()}</span>
        </div>
      </div>`
        } else if(t["status"].toLowerCase()=="inreview"){
            inReview.innerHTML += 
            `<div class="task-card">
        <p class="task-id">Task id - ${t["id"]}</p>
        <p class="task-title">${t["name"]}</p>
        <div class="tags">
          <span class="Priority">${t["priority"].toUpperCase()}</span>
        </div>
      </div>`
        } else if(t["status"].toLowerCase()=="blocked"){
            blocked.innerHTML += 
            `<div class="task-card">
        <p class="task-id">Task id - ${t["id"]}</p>
        <p class="task-title">${t["name"]}</p>
        <div class="tags">
          <span class="Priority">${t["priority"].toUpperCase()}</span>
        </div>
      </div>`
        }else if(t["status"].toLowerCase()=="done"){
            done.innerHTML += 
            `<div class="task-card">
        <p class="task-id">Task id - ${t["id"]}</p>
        <p class="task-title">${t["name"]}</p>
        <div class="tags">
          <span class="Priority">${t["priority"].toUpperCase()}</span>
        </div>
      </div>`
        }
    })

}

fetchTask()








