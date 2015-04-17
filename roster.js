
  $(function() {
     
        
       $("#Learned2").change(function() {
          if (this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Learned)
          }
            else {
                remove(Learned)
            }
            update_view()
        });
        
        $("#ToLearn").change(function() {
          if (this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(ToLearn)
              console.log(FiltersOn)
          }
            else {
                remove(ToLearn);
            }
            update_view()
                
        });
                              
       

         $("#Undergrad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Undergrad);  
          }
            else {
                remove(Undergrad); 
            }
            update_view();
        });
        
        $("#Grad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Grad); 
          }
            else {
                remove(Grad); 
            }
            update_view();
        });
        
                           
        $("#Female").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Female); 
          }
            else {
                remove(Female); 
            }
            
            update_view();
                
        });
        
      
        $("#Male").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Male); 
          }
            else {
                remove(Male); 
                console.log("hello");
            }
            update_view();
                
        });

      
        function clear_view() {
            // clears the table 
            var faceTable = document.getElementById("faceTable"); 
            faceTable.innerHTML = "";
            
        }
                    
      
       function remove(item) {
           var i;
           for(i = 0; i < FiltersOn.length; i++) {
               if(FiltersOn[i] == item) {
                  FiltersOn.splice(i,1);

           }
            
           }
           
       }
            
        function update_view() {
            
            clear_view();
            if (FiltersOn.length == 0) {
                clear_view();
            }
            else{
            
            FiltersOn = $.unique(FiltersOn.sort()).sort();
            // Fill in the roster based on the filters that are checked
                
            var list_of_people = [];
            for (i = 0; i < FiltersOn.length; i++ ) {
                var filter = FiltersOn[i]; // 
                
                for (j = 0; j < filter.length; j++ ) {
                    list_of_people.push(filter[j]) // add each person to the list_of_people
                }
            }
            
            list_of_people = $.unique(list_of_people.sort()).sort();
            
            /// iterate through the list and add roster lines for each person
            for (k = 0; k < list_of_people.length; k++) { 
                var currentPerson = list_of_people[k] 
                var newRow = document.getElementById("faceTable").insertRow(k);
                var newPic = document.createElement('img');
                newPic.src = dict[currentPerson];
                var newface = newRow.insertCell(0);
                newface.innerHTML = "<img src=" + newPic.src + " alt=" + currentPerson + "height='70' width='60'>"; 
                var newName = newRow.insertCell(1);           
                newName.innerHTML = currentPerson;

            }

                
            }        
    }
  });