/**
 * Student represents a student in the database
 *
 */

var dict = {"Allie": "faces/Allie.png", "Joyce": "faces/Joyce.png", "Malika":"faces/Malika.png", "McCall":"faces/McCall.png", "Milly":"faces/Milly.png", "Sara":"faces/Sara.jpg", "Scotty": "faces/Scotty.png", "Eben": "faces/Eben.png"};

function Student(First, Last, Gender, Learned, Undergrad) {
    this.fullName = First + " " + Last; 
    this.firstName = First;
    this.lastName = Last; 
    this.gender = Gender; 
    this.learned = Learned; //boolean
    this.undergrad = Undergrad; 
    this.img = dict[First];  
    
    function LearnedName() { 
        if (this.learned = false) {
            this.learned = true; 
        }
    }

    function UnlearnedName() { 
        if (this.learned = true) {
            this.learned = false; 
        }
    }

    };


        


      
      


    