//$(function() { 
//    var Female = ["Cimran", "Allie", "Joyce", "Sara"]; 
//    var Male = ["Bill", "Bob"]; 
//    var Learn = ["Cimran", "Allie"]
//    var ToLearn = ["Joyce", "Sara"]; 
//    
//    
// 
// )
// 
 
  $(document).ready(function() {
        var ALLnames  = ["John Doe", "Sara Huang"]
        var pictures = ["faceMale.jpg", "faceFemale.jpg"]
     
        var Female = ["Cimran", "Allie", "Joyce", "Sara"]; 
        var Male = ["Bill", "Bob"]; 
        var Learn = ["Cimran", "Allie"]
        var ToLearn = ["Joyce", "Sara"]; 
        
        var FiltersOn = [ToLearn, Learn];   
        var list_of_people = []
      
        var dict = {"Cimran": "faceFemale.jpg"};
        
        
        $("#ToLearn").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(ToLearn); 
          }
            else {
                FiltersOn.pop(ToLearn); 
            }
            update_view();
                
        }
                              
        $("#Learned").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Learned); 
          }
            else {
                FiltersOn.pop(Learned); 
            }
            update_view();
        }

         $("#Undergrad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Undergrad);  
          }
            else {
                FiltersOn.pop(Undergrad); 
            }
            update_view();
        }
        
        $("#Grad").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(Grad); 
          }
            else {
                FiltersOn.pop(Grad); 
            }
            update_view();
        }
        
                           
        $("#Female").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Female); 
          }
            else {
                FiltersOn.pop(Female); 
            }
            update_view();
                
        }
        
        $("#Male").change (function() {
          if(this.checked){
              // Add all the Learned people to roster-view
              FiltersOn.push(Male); 
          }
            else {
                FiltersOn.pop(Male); 
            }
            update_view();
                
        }
                           
                           
            
        function update_view() {
            
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
                // get a new row for this person! 
            }        
    }
       });