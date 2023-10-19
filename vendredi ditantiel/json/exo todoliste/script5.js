var tachesJSON = JSON.parse(localStorage.getItem("taches")) || {
  taches: [],
};

function initialiserListeTaches() {
  var listeTaches = document.getElementById("listeTaches");
  for (var i = 0; i < tachesJSON.taches.length; i++) {
    var tache = tachesJSON.taches[i];
    var elementListe = document.createElement("li");
    console.log(elementListe);
    var classeTache = tache.terminee ? "tache-terminee" : "tache";
    var classeTache1 = tache.terminee ? "tache-faite" : "tache";
    elementListe.classList.add(classeTache);
    elementListe.onclick = cocherTache;
    elementListe.innerHTML = `
            <span class="tache ${classeTache1}" >${tache.texte}</span>

            <button class="bouton-supprimer" onclick="supprimerTache(this)">x</button>
        `;
    listeTaches.appendChild(elementListe);

    activerDeplacementElement(elementListe);
  }
}

initialiserListeTaches();

function ajouterTache() {
  var saisieTache = document.getElementById("saisieTache");
  var texteTache = saisieTache.value.trim();
  if (texteTache !== "") {
    var listeTaches = document.getElementById("listeTaches");
    var elementListe = document.createElement("li");
    elementListe.onclick = cocherTache;
    elementListe.innerHTML = `
            <span class="tache" >${texteTache}</span>

            <button class="bouton-supprimer" onclick="supprimerTache(this)">x</button>
        `;
    listeTaches.appendChild(elementListe);
    saisieTache.value = "";

    activerDeplacementElement(elementListe);

    tachesJSON.taches.push({
      texte: texteTache,
      terminee: false,
    });
    sauvegarderTachesDansLocalStorage();
  }
}

function cocherTache(e) {
  let span = e.target;
  if (span instanceof HTMLLIElement) span = span.querySelector("span");
  span.classList.toggle("tache-faite");

  span.parentElement.classList.toggle("tache-terminee");

  var texteTache = span.textContent;
  for (var i = 0; i < tachesJSON.taches.length; i++) {
    if (tachesJSON.taches[i].texte === texteTache) {
      tachesJSON.taches[i].terminee = !tachesJSON.taches[i].terminee;
      break;
    }
  }
  sauvegarderTachesDansLocalStorage();

  reorganiserListe();
}

function supprimerTache(bouton) {
  var elementListe = bouton.parentElement;
  var texteTache = elementListe.querySelector(".tache").textContent;
  elementListe.remove();

  for (var i = 0; i < tachesJSON.taches.length; i++) {
    if (tachesJSON.taches[i].texte === texteTache) {
      tachesJSON.taches.splice(i, 1);
      break;
    }
  }
  sauvegarderTachesDansLocalStorage();
}

function activerDeplacementElement(element) {
  element.draggable = true;

  element.ondragstart = function (e) {
    e.dataTransfer.setData("text/plain", "");
    e.target.classList.add("dragging");
  };

  element.ondragend = function (e) {
    e.target.classList.remove("dragging");
  };

  element.ondragover = function (e) {
    e.preventDefault();
  };

  element.ondrop = function (e) {
    e.preventDefault();
    var draggingElement = document.querySelector(".dragging");
    if (draggingElement) {
      var parent = element.parentElement;
      var indexA = Array.from(parent.children).indexOf(draggingElement);
      var indexB = Array.from(parent.children).indexOf(element);

      if (indexA > indexB) {
        parent.insertBefore(draggingElement, element);
      } else {
        parent.insertBefore(draggingElement, element.nextElementSibling);
      }

      tachesJSON.taches.splice(indexA, 1);
      tachesJSON.taches.splice(indexB, 0, tachesJSON.taches[indexA]);
    }
  };
  sauvegarderTachesDansLocalStorage();
}

function reorganiserListe() {
  var listeTaches = document.getElementById("listeTaches");
  tachesJSON.taches = [];
  for (var i = 0; i < listeTaches.children.length; i++) {
    var tacheElement = listeTaches.children[i];
    var texteTache = tacheElement.querySelector(".tache").textContent;
    var estTerminee = tacheElement
      .querySelector(".tache")
      .classList.contains("tache-faite");
    tachesJSON.taches.push({
      texte: texteTache,
      terminee: estTerminee,
    });
  }
  sauvegarderTachesDansLocalStorage();
}

function sauvegarderTachesDansLocalStorage() {
  localStorage.setItem("taches", JSON.stringify(tachesJSON));
}
