let _name = 'Common';

class Common {
  constructor() {
    console.log(`>>> ${this.getName()} constructor`);
  }
  getName() {
    return _name;
  }
}

export { Common };
