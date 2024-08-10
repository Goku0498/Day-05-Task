class Person {
  constructor(name, age, gender, address, phoneNumber) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  getDetails() {
    return `The Output of Person Class is 
    
${this.name}, ${this.age}, ${this.gender}, ${this.address}, ${this.phoneNumber}
    `;
  }
}

let person = new Person("Gokul", 26, "Male", "Chennai", "9994698888");
console.log(person.getDetails());
