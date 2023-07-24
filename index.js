
const txtresults = document.getElementById("results");
    
    let tasks = [];
    let elem2remove;

 
    function managetasks(){

    const taskname = prompt("Insert task title: ");
    const numOperation = prompt("Insert number of operation you want to perform: ");
    let intnum = parseInt(numOperation);
 
       
        if(intnum ===1){
            //1. Add a task to the end of the task list. 
            //check if array is empty
          
            tasks.push(taskname);
            
            txtresults.value = "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + '\n'+  '\n' + "Tasks Available: " + tasks +'\n';
           
            }else if(intnum ===2){
               
                // 2. Remove a task from the beginning of the task list.
                let tasknamepars = parseInt(taskname);
                if(tasknamepars === 0){
                 elem2remove = tasks.shift();
                 let updatedArea2 = txtresults.value +'\n' + "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + '\n'+  '\n' + "Tasks Available: " + tasks+'\n';
                 txtresults.value = updatedArea2;
                }
             
            }else if(intnum ===3){
               
                // 2. Remove a task from the beginning of the task list.
                let tasknamepars = parseInt(taskname);
                if(tasknamepars === 0){
                 elem2remove = tasks.pop();
                 let updatedArea3 = txtresults.value +'\n' + "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + '\n'+  '\n' + "Tasks Available: " + tasks+'\n';
                 txtresults.value = updatedArea3;
                }
             
        } else if(intnum ===4){
            //4. Remove a task from a specific position in the task list.
            let tasknamepars = parseInt(taskname);
            if(tasknamepars === 0){
             elem2remove = tasks.splice(2,1);
             let updatedArea4 = txtresults.value +'\n' + "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + '\n'+  '\n' + "Tasks Available: " + tasks+'\n';
             txtresults.value = updatedArea4;
            }
         
    }  else if(intnum ===5){
        //5. Display the current task list.
        let tasknamepars = parseInt(taskname);
        if(tasknamepars === 0){
         let updatedArea5 = txtresults.value +'\n' + "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + '\n'+  '\n' + "Tasks Available: " + tasks+'\n';
         txtresults.value = updatedArea5;
        }
      
    }
}
    
   


/*
         //display on text area
         txtresults.value = "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + "Tasks: " + tasks;
        } else if(numOperation ===2){
            // 2. Remove a task from the beginning of the task list.
            
            if(tasks.length ===0){
                throw new Error("Array is empty, no tasks to remove!");
           }else{
               elem2remove = tasks.shift();
               for(let i = 0; i < tasks.length; i++){
                   tasks[i] = tasks[i] - 1;
               }
           }
            
            console.log(elem2remove);
            console.log(tasks);
           
            //display on text area
            txtresults.value = "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + "Tasks: " + tasks;
        }else if(numOperation ===3){
           // 3. Remove a task from the end of the task list.
             elem2remove = tasks.pop();
             console.log(elem2remove);
             console.log(tasks);
            
             //display on text area
             txtresults.value = "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + "Tasks: " + tasks;

        }else if(numOperation ===4){
           //4. Remove a task from a specific position in the task list.
           elem2remove = splice(2,1);
           console.log(tasks);
           
           //display on text area
           txtresults.value = "Taskname: " + taskname + '\n' +  '\n' +"Operation: "  + numOperation + "Tasks: " + tasks;

        }else if(numOperation ===5){
           //5. Display the current task list. 
           console.log(tasks);
           //display on text area
           txtresults.value =  "Tasks: " + tasks;

        }
        else{
            throw new Error("Invalid task number entered! ");

        }*/
 