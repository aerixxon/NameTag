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
      
        $("#ToLearn").change (function() {
          if(this.checked){
            // Add all the Learned people to roster-view
              FiltersOn.push(ToLearn) 
              update_view();  
              
          }
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
            
            
            for ()
            
             
    }
            
            
            
       });