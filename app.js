
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


//Validacion

function validateForm(){
    
    let checkUser = localStorage.getItem('localUser');

    let checkUserObject = JSON.parse(checkUser);

    users.push(checkUserObject);

    console.log(checkUserObject);
    console.log(users);

    const userSolicited = users.filter((user => user.name == userForm.value))
    
    if(userForm.value == "" || passwordForm.value == ""){
        error.innerHTML =`
                <h4>Ingrese un usuario o contraseña</h4> 
            `
    }

    for(let user of userSolicited){

        console.log(user.name);
        console.log(user.password);

        if (userForm.value === user.name && passwordForm.value === user.password) {
            form.innerHTML = `
                <img src="./assets/nike.png" width="50px" height="50px" alt="nike">
                <h3>Ha iniciado sesion</h3>
                <img class="pictureProfile" src="./assets/picture.jpg" alt="pictureProfile">
                <div class="userWelcome">
                    <h2>Bienvenido</h2>
                    <h3> ${userForm.value.toUpperCase()}</h3>    
                </div>
                <a href="https://www.nike.com/ar/">Ir a la web</a>
            `
        }else{
            error.innerHTML =`
                <h4>Usuario o contraseña incorrectos</h4> 
            `
        }
    }
}



//Registro de nuevo usuario

const userRegister = document.getElementById("user-register");
const passwordRegister = document.getElementById("password-register");

const errorRegister = document.getElementById("error-register");

class User {

    constructor(name,password) {
        this.name = name;
        this.password = password;
    }

}

function registerUser(){
    console.log("click");

    if(userRegister.value == "" || passwordRegister.value == ""){
        errorRegister.innerHTML =`<h4>Ingrese un usuario o contraseña correctos</h4> `
    }else{
        const newUser = new User (userRegister.value, passwordRegister.value);
        console.log(newUser);
        errorRegister.innerHTML =`<h4 class="userCreate">Usuario creado exitosamente</h4>`

        let userCreate = JSON.stringify(newUser);
        localStorage.setItem('localUser', userCreate);
    }


}