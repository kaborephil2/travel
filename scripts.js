// Travel Class: Represents a Travel
class Travel {
    constructor(destination, location, photo, description) {
        this.destination = destination;
        this.location = location;
        this.photo = photo;
        this.description = description;
    }
}

// UI Class: Handle UI Tasks
class UI {
  static displayTravels() {
    const travels = Store.getTravels();

    travels.forEach((travel) => UI.addTravelToList(travel));
  }

  static addTravelToList(travel) {
    const list = document.querySelector('#travel-list');

    const container = document.createElement('div');

    container.innerHTML = `
      <img src=\"http://placehold.it/350x350\" width=\"150px\" height=\"150px\">
      <p>${travel.destination}</p>
      <p>${travel.location}</p>
	  <p>${travel.description}</p>
      <p>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Remove</a>
      </p>
    `;

    list.appendChild(container);
  }

  static deleteTravel(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // edit()
    static edit() {

  }

  static clearFields() {
    document.querySelector('#destination').value = '';
    document.querySelector('#location').value = '';
    document.querySelector('#photo').value = '';
	document.querySelector('#description').value = '';
  }
}

// Store Class: Handles Storage
class Store {
  static getTravels() {
    let travels;
    if(localStorage.getItem('travels') === null) {
     travels = [];
    } else {
      travels = JSON.parse(localStorage.getItem('travels'));
    }

    return travels;
  }

  static addTravel(travels) {
    var travels = Store.getTravels();
    travels.push(travels);
    //localStorage.setItem('travels', JSON.stringify(travels));
  }

  static removeTravel(destination) {
    const travels = Store.getTravels();

    travels.forEach((travel, index) => {
      if(travel.destination === destination) {
        travel.splice(index, 1);
      }
    });

    localStorage.setItem('travels', JSON.stringify(travels));
  }
}

// Event: Display Travels
document.addEventListener('DOMContentLoaded', UI.displayTravels);

// Event: Add a travel
document.querySelector('#form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  //change the h2 text to "My WishList"
  document.querySelector("#info").innerHTML = "My WishList";
  // Get form values
  const destination = document.querySelector('#destination').value;
  const location = document.querySelector('#location').value;
  const photo = document.querySelector('#photo').value;
  const description = document.querySelector('#description').value;

    const travel = new Travel(destination, location, photo, description);

    // Add Travel to UI
    UI.addTravelToList(travel);

    // Add travel to store
    Store.addTravel(travel);

    // Clear fields
    UI.clearFields();
//   }
 });

// Event: Remove a travel
document.querySelector('#travel-list').addEventListener('click', (e) => {
  // Remove travel from UI
  UI.deleteTravel(e.target);

  // Edit travel from UI
  UI.edit(e.target); //In Progres.....

  // Remove travel from store
  Store.removeTravel(e.target.parentElement.previousElementSibling.textContent);

});