/*let petname1 = document.getElementById("petname-1");
let ownerName1 = document.getElementById("ownerName-1");
let species1 = document.getElementById("species-1");
let breed1 = document.getElementById("breed-1");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
  constructor(petname, ownerName, species, breed) {
    this.petname = petname;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Nome: " + pet.petname + ", Proprietario: " + pet.ownerName + ", Specie: " + pet.species + ",Razza: " + pet.breed;
    petList.appendChild(newLi);
  });
};

addButton.onclick = function () {
  let newPet = new Pet(petname1.value, ownerName1.value, species1.value, breed1.value);
  pets.push(newPet);
  renderList();
  petname1.value = ""; // <-- svuota l'input field alla fine
  ownerName1.value = ""; // <-- svuota l'input field alla fine
  species1.value = ""; // <-- svuota l'input field alla fine
  breed1.value = ""; // <-- svuota l'input field alla fine
};
-AGGIUNTA CONTROLLO PROPRIETARIO UGUALE-
*/

let petname1 = document.getElementById("petname-1");
let ownerName1 = document.getElementById("ownerName-1");
let species1 = document.getElementById("species-1");
let breed1 = document.getElementById("breed-1");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
  constructor(petname, ownerName, species, breed) {
    this.petname = petname;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkSameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota lla lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Nome: " + pet.petname + ", Proprietario: " + pet.ownerName + ", Specie: " + pet.species + ", Razza: " + pet.breed;
    petList.appendChild(newLi);
  });
};

addButton.onclick = function () {
  let newPet = new Pet(petname1.value, ownerName1.value, species1.value, breed1.value);

  let hasSameOwner = pets.some((existingPet) => newPet.checkSameOwner(existingPet));
  console.log(hasSameOwner);

  if (hasSameOwner) {
    pets.push(newPet);
    console.log("Esiste già un animale con lo stesso proprietario");
  } else {
    pets.push(newPet);
    console.log("Animale aggiunto:", newPet);
  }

  renderList();

  petname1.value = "";
  ownerName1.value = "";
  species1.value = "";
  breed1.value = "";
};
