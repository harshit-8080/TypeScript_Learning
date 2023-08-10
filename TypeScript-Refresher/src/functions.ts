function calculateArea(length: number, width: number): number {
  let area: number = length * width;
  return area;
}

calculateArea(10, 20);

function getInfo(firstName: string, lastName: string, age = 20): string {
  let fullName = firstName + " " + lastName;
  let value: number = age * 2;
  console.log(value);

  return fullName;
}

let harshit = getInfo("Harshit", "Raj", 24);
console.log(harshit);

let manikesh = getInfo("Manikesh", "Ranjan");
console.log(manikesh);
