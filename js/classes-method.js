
  class person{
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myFriend = new person("Dani", 2002);
  console.log( myFriend.age(year))