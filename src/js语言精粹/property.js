class Father {
  constructor() {
    this.name = "father";
  }
}

class Child extends Father {
  constructor() {
    super();
  }
}

const man = new Child();

man["name"] = "child"

delete man.name;

console.log(man.name);
