function generateRandomColor() {
  let color = "#";
  let codes = "0123456789ABCDEF";

  for (var i = 0; i < 6; i++) {
    color += codes[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateRandomFirstName() {
  let firstNames = [
    "John",
    "Ram",
    "Smith",
    "Steven",
    "Steve",
    "Larry",
    "Bailee",
    "Gauge",
    "Madison",
    "Karl",
    "Carl",
    "Jimmy",
    "Chandler",
    "Johnny",
    "Marcus",
    "David",
    "Ashutosh",
    "Alesh",
    "Chris",
    "Vivan",
    "Richard",
    "Issac",
    "Jacob",
    "Dominic",
    "Susan",
    "Natasha",
    "Rohan",
    "Pratibha",
    "Atharva",
    "Alex",
    "Alexander",
    "Billy",
    "Hope",
    "Tony",
    "Howard",
    "Peter",
    "George",
    "Ricky",
  ];
  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  return firstName;
}

function generateRandomLastName() {
  let lastNames = [
    "Evans",
    "Potts",
    "Stark",
    "Bailey",
    "Dukes",
    "Stoinis",
    "Warner",
    "Chapman",
    "Lyon",
    "Wong",
    "Strange",
    "Parker",
    "Holland",
    "Wikkins",
    "Faulkner",
    "Henricks",
    "Brown",
    "Khan",
    "Swamy",
    "Swami",
    "Lang",
    "Thomas",
    "Williomson",
    "Boult",
    "Carey",
  ];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return lastName;
}

module.exports = {
  generateRandomColor,
  generateRandomFirstName,
  generateRandomLastName,
};
