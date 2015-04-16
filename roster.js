
  $(function() {
        var ALL  = ["Allie", "Joyce", "Malika", "McCall", "Milly", "Sara", "Scotty", "Eben"]
     
        var Female = [ "Allie", "Joyce", "Malika", "McCall", "Milly", "Sara"]; 
        var Male = ["Scotty", "Eben"]; 
        var Learned = ["Allie", "Joyce", "Malika", "McCall"]
        var ToLearn = ["Milly", "Sara", "Scotty", "Eben"]; 
        
        var FiltersOn = [];   
        
      
        var dict = {"Allie": "faces/Allie.png", "Joyce": "faces/Joyce.png", "Malika":"faces/Malika.png", "McCall":"faces/McCall.png", "Milly":"faces/Milly.png", "Sara":"faces/Sara.jpg", "Scotty": "faces/Scotty.png", "Eben": "Eben.png"};
      
      
        
       $("#Learned2").change(function() {
          if (this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Learned)
          }
            else {
                FiltersOn.pop(Learned)
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
                FiltersOn.pop(ToLearn)
            }
            update_view()
                
        });
                              
       

         $("#Undergrad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Undergrad);  
          }
            else {
                FiltersOn.pop(Undergrad); 
            }
            update_view();
        });
        
        $("#Grad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Grad); 
          }
            else {
                FiltersOn.pop(Grad); 
            }
            update_view();
        });
        
                           
        $("#Female").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Female); 
          }
            else {
                FiltersOn.pop(Female); 
            }
            update_view();
                
        });
        
        $("#Male").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Male); 
          }
            else {
                FiltersOn.pop(Male); 
            }
            update_view();
                
        });
                           
                           
            
        function update_view() {
            FiltersOn = $.unique(FiltersOn.sort()).sort();
            var list_of_people = [];
            // Fill in the roster based on the filters that are checked
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
  });