
//Array de usuarios
var users = [
    {
        name: "nadir",
        password: "nadir123"
    },
    {
        name: "blanco",
        password: "blanco123"
    },
    {
        name: "uriel",
        password: "uriel123"
    },
    {
        name: "sanchez",
        password: "sanchez123"
    }
];

//Datos de form

const form = document.getElementById("form");

const userForm = document.getElementById("user");
const passwordForm = document.getElementById("password");


const error = document.getElementById("error");

//Eventos

const button = document.getElementById("login");

button.addEventListener("click", validateForm);


//Validacion

function validateForm(){
    


    for(let user of users){

        console.log(user.name);
        console.log(user.password);

        if (userForm.value === user.name || passwordForm.value === user.password) {
            form.innerHTML = `
                <img src="./assets/nike.png" width="50px" height="50px" alt="nike">
                <h3>Ha iniciado sesion<h3/>
                <div class="userWelcome">
                    <h2>Bienvenido<h2/>
                    <h3> ${userForm.value.toUpperCase()}<h3/>    
                <div/>
                <a href="https://www.nike.com/ar/">Ir a la web<a/>
            `
        }else{
            error.innerHTML =`
                <h4>Usuario o contraseña incorrectos<h4/> 
            `
        }

    }

}




