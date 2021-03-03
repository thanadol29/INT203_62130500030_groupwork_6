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

const app = Vue.createApp({
        data() {
            return {
            firstname: null,
            lastname: null,
            gender: null,
            email: null,
            phone: null,
            url:'images/pfp.jpg'
            }
        },
        methods: {
            checkForm(e){
                this.errors = validate({firstname: this.firstname,
                                        lastname: this.lastname,
                                        age: this.age,
                                        email: this.email,
                                        phone: this.phone,},
                                        constraints)
                if(this.errors){
                    e.preventDefault();
                }
            }
        }
    }
)

  
    app.mount('#app')