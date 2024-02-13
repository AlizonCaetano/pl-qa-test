function createRandomName() {
  const repoNames = [
    "bug",
    "free",
    "enigma",
    "code",
    "happy",
    "unicorn",
    "awesome",
    "star",
    "magic",
    "sky",
    "cool",
    "banana",
    "moon",
    "sun",
    "green",
    "red",
    "blue",
    "yellow",
    "space",
    "planet",
  ];

  const firstNameIndex = Math.floor(Math.random(100) * repoNames.length);
  const firstName = repoNames[firstNameIndex];

  const middleNameIndex = Math.floor(Math.random(100) * repoNames.length);
  const middleName = repoNames[middleNameIndex];

  const lastNameIndex = Math.floor(Math.random(100) * repoNames.length);
  const lastName = repoNames[lastNameIndex];

  const fullnameRepo = `${firstName}-${middleName}-${lastName}`;

  return fullnameRepo;
}

module.exports = createRandomName;
