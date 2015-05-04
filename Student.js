/**
 * Student represents a student in the database
 *
 */

var dict = {"Allie": "faces/Allie.png", "Joyce": "faces/Joyce.png", "Malika":"faces/Malika.png", "McCall":"faces/McCall.png", "Milly":"faces/Milly.png", "Sara":"faces/Sara.jpg", "Scotty": "faces/Scotty.png", "Eben": "faces/Eben.png", "Colin": "faces/colin.jpg", "Derek":"faces/derek.jpg", "Emma":"faces/emma.jpg", "Hannah":"faces/hannahchen.jpg", "Joanna": "faces/joanna.jpg", "Tre": "faces/livingston.jpg", "Elizabeth": "faces/liz.jpg", "Luca": "faces/luca.jpg" , "Manolya": "faces/manolya.jpg", "Natalie": "faces/natalie.jpg", "Nick":"faces/nickd.jpg", "Priyanka": "faces/Priyanka.png", "Benji":"faces/benji.jpg"};

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


        


      
      


    