
class Model {
  constructor() {}
}

class User extends Model {
  constructor() {
    super();
    this.sayHello();
  }

  sayHello() {
    alert("Hello World!");
  }
}

import B from './b';
// alert(B);

new User();
