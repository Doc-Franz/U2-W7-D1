class User {
  constructor(firstname, lastname, age, location) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.location = location;
  }

  compareAge(userToCompare) {
    return this.age > userToCompare.age
      ? `Il primo user ha un'età di ${this.age} che è maggiore del secondo user di ${userToCompare.age}`
      : `Il primo user ha un'età di ${this.age} che è minore del secondo user di ${userToCompare.age}`;
  }
}

const firstUser = new User("Federico", "Franzi", "30", "Legnano");
const secondUser = new User("Alessandro", "Delpiero", "50", "Verona");

console.log(firstUser.compareAge(secondUser));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  isTheSameOwner = function (petListOwner) {
    const isDuplicated = petListOwner.filter((element, index) => petListOwner.indexOf(element) !== index);
    console.log(isDuplicated);
    return isDuplicated.length > 0;
  };
}

const register = document.getElementById("registrazione-dati");

const petList = [];
const petListOwner = [];

register.onsubmit = (event) => {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const petIstance = new Pet(petName, ownerName, species, breed);
  petList.push(petIstance);
  petListOwner.push(petIstance.ownerName);

  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
};

const checkBtn = document.getElementById("check");

checkBtn.onclick = () => {
  console.log(petList[petList.length - 1].isTheSameOwner(petListOwner));
};
