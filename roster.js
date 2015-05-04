
  $(function() {
     
        
       $("#Learned2").change(function() {
          if (this.checked){
            // Add all the Learned people to roster-view
                bool_Learned = true;
                console.log(Learned);
          }
            else {
                bool_Learned = false; 
            }
           
            update_view()
        });
        
        $("#ToLearn").change(function() {
          if (this.checked){
              // Add all the Learned people to roster-view
              bool_ToLearn = true;
//              console.log(FiltersOn)
          }
            else {
                bool_ToLearn = false;
            }
            update_view()
                
        });
                              
  

      
        function clear_view() {
            // clears the table 
            var faceTable = document.getElementById("faceTable"); 
            faceTable.innerHTML = "";
            
        }
                    

      
     function add_to_roster(student) {
            var currentPerson = student.fullName; 
            console.log(currentPerson);
            var newRow = document.getElementById("faceTable").insertRow();

            var newPic = document.createElement('img');
            newPic.src = student.img;
            var newface = newRow.insertCell(0);
            newface.setAttribute('style', 'width: 40px');
            newface.innerHTML = "<img src=" + newPic.src + " alt=" + currentPerson + "height='70' width='60' class = 'studentName'>"; 
            var newName = newRow.insertCell(1);           
            newName.innerHTML = currentPerson;
          
      } 
      
            
        function update_view() {
            clear_view();      
            if (bool_Learned == true  && bool_ToLearn == true) { 
                console.log("Learned and ToLearn"); 
                for (var i = 0; i < Students.length; i++) {
                    var student = Students[i]; 
                    add_to_roster(student);
                }
            } 
            
            else if (bool_Learned == true && bool_ToLearn== false) {
                for (var i = 0; i < Students.length; i++) { 
                    var student = Students[i];
                    console.log(student); 
                    console.log(Students);
                    if (student.learned == true) {
                        add_to_roster(student); 
                    } 
                }
                
            }else if (!bool_Learned && bool_ToLearn) {
                for (var i = 0; i < Students.length; i++) { 
                    var student = Students[i];
                    if (student.learned == false ) {
                        add_to_roster(student);
                    } 
                }
            } else {
                clear_view();
            }
        }
                
  
      
      
      

  });