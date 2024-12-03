let taskList = ["Task A", "Task B", "Task C", "Task D", "Task E"];
console.log("Initial Task List:", taskList);

for (let i = 0; i < taskList.length - 1; i++) {
  taskList[i] = taskList[i + 1]; 
}
taskList.length -= 1; 
console.log("Task List after removing the first task:", taskList);

let highPriorityTasks = ["High Priority Task 1", "High Priority Task 2"];
taskList.length += 2;  
for (let i = taskList.length - 1; i >= 2; i--) {
  taskList[i] = taskList[i - 2]; 
}
taskList[0] = highPriorityTasks[0];
taskList[1] = highPriorityTasks[1];
console.log("Task List after adding high-priority tasks:", taskList);

taskList[taskList.length - 1] = "New Task"; 
console.log("Task List after replacing the last task:", taskList);
