var input= document.getElementById("input");
var btnAdd= document.getElementById("additionner");
var listTache = document.getElementById('list-tache')



btnAdd.addEventListener('click',function(){
        
// div
var tache = document.createElement('div')
tache.id = "tache"


var titreDeTache = document.createElement('p')
titreDeTache.textContent = input.value

var deleteBtn = document.createElement('button')
deleteBtn.textContent = "Supprimer"

deleteBtn.addEventListener('click', function(){
      let res=   confirm('etes vous sur ')
      if(res==true){

        tache=tache.remove()
      }
    })

    var editBtn = document.createElement('button')
    editBtn.textContent = "Modifier";

     editBtn.addEventListener('click',function() {

      listTache = document.getElementById('list-tache').children[0];
       var newInput=document.createElement('input');
       input.type="text"
       newInput.id="inputModif";
       console.log(newInput);
       
       listTache.replaceChild(newInput,listTache.childNodes[0]);

       
      })
      
      var newInput=document.getElementById('inputModif')

      newInput.addEventListener('focusout',function(){
        
          newInput.value=document.createElement('p')
          console.log(newInput.value);
       })

        tache.appendChild(titreDeTache)
tache.appendChild(deleteBtn)
tache.appendChild(editBtn)

listTache.appendChild(tache)

     input.value =""
})
