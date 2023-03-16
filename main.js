

var input = document.getElementById("input");
input.maxLength = "20";
var btnAdd = document.getElementById("additionner");
var listTache = document.getElementById("list_tache");

// Récupération des tâches depuis le localStorage
var taches = JSON.parse(localStorage.getItem('taches')) || [];

// Afficher les tâches sauvegardées
taches.forEach(function(tache){
  var divTache = document.createElement("div");
  divTache.id = "tache";

  var titreDeTache = document.createElement("p");
  titreDeTache.textContent = tache;

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";

  var editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";

  deleteBtn.addEventListener("click", function () {
    let res = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if (res == true) {
      divTache.remove();
      // Supprimer la tâche du tableau dans le local storage
      taches.splice(taches.indexOf(tache), 1);
      localStorage.setItem('taches', JSON.stringify(taches));
    }
  });

  editBtn.addEventListener("click", function () {
    var listTache2 = this.parentNode;
    var newInput = document.createElement("input");
    newInput.id = "inputModif";
    newInput.maxLength = "20";
    newInput.value = titreDeTache.textContent;

    listTache2.replaceChild(newInput, listTache2.childNodes[0]);

    var validBtn = document.createElement("button");
    validBtn.textContent = "Valider";

    validBtn.addEventListener("click", function () {
      if (newInput.value === "") {
        alert("Le champ d'entrée ne peut pas être vide!");
        return;
      }

      var nouveauTitreDeTache = document.createElement("p");
      nouveauTitreDeTache.textContent = newInput.value;
      listTache2.replaceChild(nouveauTitreDeTache, newInput);

      listTache2.removeChild(validBtn);
      listTache2.appendChild(editBtn);

      // Mettre à jour la tâche dans le tableau dans le local storage
      taches[taches.indexOf(tache)] = nouveauTitreDeTache.textContent;
      localStorage.setItem('taches', JSON.stringify(taches));
    });

    listTache2.appendChild(validBtn);
    listTache2.removeChild(editBtn);
  });

  divTache.appendChild(titreDeTache);
  divTache.appendChild(deleteBtn);
  divTache.appendChild(editBtn);
  listTache.appendChild(divTache);
});

btnAdd.addEventListener("click", function () {
  if (input.value === "") {
    alert("Le champ d'entrée ne peut pas être vide!");
    return;
  }

  var divTache = document.createElement("div");
  divTache.id = "tache";

  var titreDeTache = document.createElement("p");
  titreDeTache.textContent = input.value;

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";

  var editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";

  deleteBtn.addEventListener("click", function () {
    let res = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if (res == true) {
      divTache.remove();
      // Supprimer la tâche du tableau dans le local storage
      taches.splice(taches.indexOf(input.value), 1);
// Mettre à jour le local storage après la suppression d'une tâche
localStorage.setItem('taches', JSON.stringify(taches));
}
});

editBtn.addEventListener("click", function () {
var listTache2 = this.parentNode;
var newInput = document.createElement("input");
newInput.id = "inputModif";
newInput.maxLength = "20";
newInput.value = titreDeTache.textContent;

listTache2.replaceChild(newInput, listTache2.childNodes[0]);

var validBtn = document.createElement("button");
validBtn.textContent = "Valider";

validBtn.addEventListener("click", function () {
  if (newInput.value === "") {
    alert("Le champ d'entrée ne peut pas être vide!");
    return;
  }

  var nouveauTitreDeTache = document.createElement("p");
  nouveauTitreDeTache.textContent = newInput.value;
  listTache2.replaceChild(nouveauTitreDeTache, newInput);

  listTache2.removeChild(validBtn);
  listTache2.appendChild(editBtn);

  // Mettre à jour la tâche dans le tableau dans le local storage
  taches[taches.indexOf(input.value)] = nouveauTitreDeTache.textContent;
  localStorage.setItem('taches', JSON.stringify(taches));
});

listTache2.appendChild(validBtn);
listTache2.removeChild(editBtn);
});

divTache.appendChild(titreDeTache);
divTache.appendChild(deleteBtn);
divTache.appendChild(editBtn);
listTache.appendChild(divTache);

// Ajouter la tâche dans le tableau dans le local storage
taches.push(input.value);
localStorage.setItem('taches', JSON.stringify(taches));

// Réinitialiser le champ d'entrée après avoir ajouté une tâche
input.value = "";
});


