const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    }
}

// url:'images/pfp.jpg'
function submitForm() {
    alert("Your profile is updated successfully.");
  }

const app = Vue.createApp({
        data() {
            return {
                firstname: null,
                lastname: null,
                age: null,
                email: null,
                phone: null,
                url:'images/pfp.jpg',
                errors: null,
            }
        },
        methods: {
            checkForm(e){
                this.errors = validate({firstname: this.firstname,
                                        lastname: this.lastname,
                                        age: this.age,
                                        gender: this.gender,
                                        email: this.email,
                                        phone: this.phone,
                                        chosensubject: this.chosensubject},
                                        constraints)
                if(this.errors){
                    e.preventDefault();
                }
            }
        }
    }
)

  
    app.mount('#app')