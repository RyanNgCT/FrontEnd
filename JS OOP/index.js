function Person(name, birthYear, gender){
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
    this.calculateAge = () => {
        let d = new Date();
        return d.getFullYear() - this.birthYear;
    };
}

let p1 = new Person("John", 2002, "M");

console.log(p1.calculateAge());