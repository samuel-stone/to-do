$(document).ready(function() {

   var addTask = function() {
      $(document).on("click", ".add-task", function() {
         var taskText = $('.current-task').val();
         //this is where we construct our task HTMLf
         var currentTask ="<li class='task'><p>" + taskText + "</p>" + '<div class="toggleClass"><h2> TESTING</h2></div>' + '<button type="submit" class="btn btn-default detail-btn">Details</button>' + '<button type="submit" class="btn btn-default complete-task">Complete</button>' + '<button type="submit" class="btn btn-default remove-task">Remove Task</button> </li>';
         $(".task-list").append(currentTask);
      });
   };
   addTask();

   var removeTask = function() {
      $(document).on("click", ".remove-task", function() {
         $(this).parent(".task").remove();
      });
   };
   removeTask();

   var completeTask = function() {
      $(document).on("click", ".complete-task", function() {
         $(this).parent("li").toggleClass("completed");
      });
   };
   completeTask();

   var editTask = function() {
      var detailForm = '<form class="navbar-form navbar-left detail-form" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="Enter Details"></div><button type="submit" class="btn btn-default add-detail">Add</button></form>';

      $(document).on("click", ".detail-btn", function() {
         //need to find a way to reference the detail form box -- currently removing detail button
         $(this).toggle();
      });
   };
   editTask();

});

//push to Github
//Feature ideas

//x //add new tasks
//delete tasks
//mark as completed

//task details and are editable
//move tasks
