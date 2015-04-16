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
        
        var FiltersOn = [];   
      
      
        $(".checkbox").change (function() {
          if(this.checked){
            
          }
        }

            
            
            
        function add_row() {
            correct_ans = Object.keys(current_dict)[Math.round(Math.random()*dict_length)];
            word = current_dict[correct_ans]; 
            $("span.current_word").html(word); 
    }
            
            
            
       });