
$(document).ready(function() {
    loadTasksFromLS();

    
    
    $("#addtask").click(function(e) {
        blurModalBcgr();
        e.preventDefault();
    });








    $("#savechanges").click(function() {
        let taskTitle = $("#tasktitle").val();
        let taskDescription = $("#taskdesciption").val();

        let task = {
            title : taskTitle,
            description : taskDescription
        }
        let tasks = JSON.parse(localStorage.getItem('tasks'));

        if (taskTitle == "" || taskDescription == "") {
            alert("Please fill in all fields");
            return;
        }
        if (!tasks) {
            let taskArr = [];
            taskArr.push(task);
            localStorage.setItem('tasks' , JSON.stringify(taskArr)); 
            console.log('U krijua LS');
        } else {
            tasks.push(task);
            localStorage.setItem('tasks' , JSON.stringify(tasks));
            console.log('U shtua');
        }

        location.reload();
        $('#exampleModal').modal('toggle');
        unBlurModalBcgr();
    });

    //Load Tasks from LS(If there is any)
    function loadTasksFromLS() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if(!tasks) {
            $("#notasks").append('<p class="text-center">There is no task to show !!</p>');
            return;
        }
        for(let task of tasks) {
            $(".jumbotron").append(`<div style="padding-bottom:8px"><div class="card" style = "padding-bottom:5px;">
            <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div></div></div>`);
        }
    }

    //The following code is only for styling modal background with blur effect
    function blurModalBcgr() {
        $('.blurmodalbckr').css("filter","blur(4px)");
    }
    function unBlurModalBcgr() {
        $('.blurmodalbckr').css("filter","");
    }
    $("#xclose").click(function(e) {
        unBlurModalBcgr();
        e.preventDefault();
    });
    $("#closeModal").click(function(e) {
        unBlurModalBcgr();
        e.preventDefault();
    });
});
