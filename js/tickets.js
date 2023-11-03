const ticketgral=200

let categoria=document.getElementById("categoria")
let cantidad=document.getElementById("cantidad")
let errorCantidad=document.getElementById("errorCantidad")
let resumen=document.getElementById("botonResumen")
let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let mail=document.getElementById("email")
let errorApellido=document.getElementById("errorApellido")
let errorNombre=document.getElementById("errorNombre")
let errorEmail=document.getElementById("errorEmail")


function validateEmail(email) {
    console.log(email)
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function quitarErrores(){
    let i;
    let lista=document.querySelectorAll(".form-control, .form-select")
    for(i = 0 ; i< lista.length; i++){
        lista[i].classList.remove("is-invalid");
        console.log(i)
    }

}
const calcularTotal =() => {
//function calcularTotal(){
    
    let descuento=0
    console.log(cantidad.value)
    console.log(categoria.value)
    console.log(ticketgral)
    //quito errores
    quitarErrores();
    //validaciones
    if (nombre.value === "")
    {
       nombre.classList.add("is-invalid")
       errorNombre.classList.add("muestra")
       nombre.focus()
       return
    }
    if (apellido.value === "")
    {
       apellido.classList.add("is-invalid")
       errorApellido.classList.add("muestra")
       apellido.focus()
       return
    }
    if (validateEmail(mail.value)) {
        console.log("Email valido");
    } else {
        console.log("Email invalido");
        mail.classList.add("is-invalid")
        errorEmail.classList.add("muestra")
        mail.focus()
        return
    }
    

    if ((cantidad.value==0) || isNaN(cantidad.value) ){
        cantidad.classList.add('is-invalid')
        errorCantidad.classList.add('muestra')
        cantidad.focus()
        return
    }
    else {
        switch (categoria.value) {
        case "Estudiante":
            descuento=ticketgral*0.8
            aPagar=cantidad.value*(ticketgral-descuento)
            break;
        case "Trainee":
            descuento=ticketgral*0.5
            aPagar=cantidad.value*(ticketgral-descuento) 
            break;
    
        case "Junior":
            descuento=ticketgral*0.15
            aPagar=cantidad.value*(ticketgral-descuento) 
            break;
        default:
            aPagar=cantidad.value*(ticketgral) 
            break;
      }
    //resultado.innerHTML=calcularTotal
    total.innerHTML =aPagar;
    }
    
}

botonResumen.addEventListener('click',calcularTotal)


const limpiarTodo =()=>{
    quitarErrores();
    total.innerHTML ='';
    
}
botonBorrar.addEventListener('click',limpiarTodo)