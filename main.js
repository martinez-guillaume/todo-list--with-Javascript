var input= document.getElementById("input");
var btnAdd= document.getElementById("additionner");
var container2=document.getElementById("container2");
var grandeDiv=document.getElementById("gd-div");
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
      console.log(res)
})

var editBtn = document.createElement('button')
editBtn.textContent = "Modifier"

tache.appendChild(titreDeTache)
tache.appendChild(deleteBtn)
tache.appendChild(editBtn)
console.log(tache )
listTache.appendChild(tache)

     input.value =""
})