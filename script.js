for (i = 1; i < 8; i++){
    console.log(i);
  } // 1

  console.log(`----------------------`);
for (w = 5; w <= 25; w = w + 4){
    console.log(w);
} // 2

const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
] // 3a

for (char of wizards) {
    console.log(char);
} // 3b

let harryPotterMovies = 0 // 4a

while (harryPotterMovies < 8){
    harryPotterMovies++
    console.log(harryPotterMovies);
} // 4b
console.log(harryPotterMovies); // 4c
