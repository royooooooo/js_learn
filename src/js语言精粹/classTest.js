class A {
  constructor() {
    this.state = "";
    this.setState = newState => {
      this.state = newState;
    };
  }
}

class B extends A {
  constructor() {
    super();
    this.state = "B";
    this.change = state => {
      this.setState(state);
    };
  }
}

const b = new B();

b.change("test");

console.log(b.state);
