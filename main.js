var input= document.getElementById("input");
input.maxLength="21";
var btnAdd= document.getElementById("additionner");
var listTache = document.getElementById('list_tache')



btnAdd.addEventListener('click',function(){
  if (input.value === '') {
    alert("Le champ d'entrée ne peut pas être vide!");
    return;
  }      
// div
var tache = document.createElement('div')
tache.id = "tache"


var titreDeTache = document.createElement('p')
titreDeTache.textContent = input.value

var deleteBtn = document.createElement('button')
deleteBtn.textContent = "Supprimer";
 var editBtn = document.createElement('button')
    editBtn.textContent = "Modifier";


deleteBtn.addEventListener('click', function(){
      let res=   confirm('etes vous sur de vouloir supprimer ? ')
      if(res==true){

        tache=tache.remove()
      }
    })

     editBtn.addEventListener('click',function() {

      listTache2 = this.parentNode;
      console.log(listTache2)
       var newInput=document.createElement('input');
       newInput.id="inputModif";
       newInput.maxLength="21";
       newInput.value = titreDeTache.textContent;
       console.log(titreDeTache.textContent)
       
       listTache2.replaceChild(newInput,listTache2.childNodes[0]);

       
      var sortie = document.getElementById("inputModif")

      newInput.addEventListener('focusout', function() {
        var nouveauTitreDeTache = document.createElement('p');
        nouveauTitreDeTache.textContent = newInput.value;
        listTache2.replaceChild(nouveauTitreDeTache, newInput);
    });
})
    


        tache.appendChild(titreDeTache)
tache.appendChild(deleteBtn)
tache.appendChild(editBtn)

listTache.appendChild(tache)

     input.value =""
})
