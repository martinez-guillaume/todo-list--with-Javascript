var form =document.querySelector("form");
var btnValider = document.getElementById("valider");

var minCaractere = document.getElementById("minCaractere")
var majMinimum= document.getElementById("majMinimum")
var specialCaractere= document.getElementById("specialCaractere")
var chiffreMin= document.getElementById("chiffreMin")

form['password'].addEventListener('keyup',function(e){
    e.preventDefault()
    let value = e.target.value

    if(value.length>8){
        minCaractere.style.display="block"
        minCaractere.style.color="green"
        // minCaractere.className="bg-success"
    }else{
        minCaractere.style.color="red"
    }

})












// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let username = form['username'].value
//     let password = form['password'].value
//     var charactere = document.getElementById("charactere")
//     var vide = document.getElementById("vide")
   
//      if(username.length<3 || username.length>255){
//          charactere.style.display="block"
//          charactere.textContent="3 characteres"
//          setTimeout(() => {
//              charactere.style.display="none"
//            }, 1000);
//     }
//     if(form['username'].value==""){
//         vide.style.display="block";
//         setTimeout(() => {
//             vide.style.display="none"
//           }, 1000);
//     }    
// })
// var eyeHide= document.getElementById("eyeHide")
// var  eyeShow= document.getElementById("eyeShow");

// eyeShow.addEventListener('click',function(e){
//    form["password"].type='text'
//    eyeShow.style.display="none"
//    eyeHide.style.display="inline-block"
    
// })
// eyeHide.addEventListener('click',function(e){
//     form["password"].type='password'
//     eyeShow.style.display="inline-block"
//     eyeHide.style.display="none"
     
//  })


// 2eme facon de faire avec un seul bouton

//  var form = document.querySelector('form')


// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     var email = form['email'].value
//     var psw = form['password'].value

//     console.log(email, psw)
// })

// var eye = document.getElementById('eye')

// eye.addEventListener('click', function(e) {
//     if (form['password'].type == "password") {
//         form['password'].type = "text"
//         eye.style.fontSize = "18px"
//         eye.style.color = "green"
//     } else if (form['password'].type == "text") {
//         form['password'].type = "password"

//     }

// })


// email compris entre  3 et  255 

// countour rouge 

// un message