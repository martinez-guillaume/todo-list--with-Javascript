var input= document.getElementById("input");
input.maxLength="20";
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
       
       var newInput=document.createElement('input');
       newInput.id="inputModif";
       newInput.maxLength="20";
       newInput.value = titreDeTache.textContent;
       
       listTache2.replaceChild(newInput,listTache2.childNodes[0]);
       
       
       var sortie = document.getElementById("inputModif")

       var validBtn = document.createElement('button')
       validBtn.textContent = "Valider";
      
       
       
      validBtn.addEventListener('click', function() {
        if (newInput.value === '') {
          alert("Le champ d'entrée ne peut pas être vide!");
          return;
        }  
        listeTache2 = this.parentNode
        var nouveauTitreDeTache = document.createElement('p');
        nouveauTitreDeTache.textContent = newInput.value;
        listTache2.replaceChild(nouveauTitreDeTache, newInput);
        listTache2.removeChild(validBtn);
         listTache2.appendChild(editBtn); 
        // listTache2.replaceChild(nouveauTitreDeTache, newInput);
        

    });

    
    listTache2.appendChild(validBtn);
    listTache2.removeChild(editBtn);
})
    


        tache.appendChild(titreDeTache)
tache.appendChild(deleteBtn)
tache.appendChild(editBtn)

listTache.appendChild(tache)

     input.value =""
})


