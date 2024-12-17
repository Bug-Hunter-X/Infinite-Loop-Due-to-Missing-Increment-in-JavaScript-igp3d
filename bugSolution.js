function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++; // Increment i to avoid infinite loop
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}