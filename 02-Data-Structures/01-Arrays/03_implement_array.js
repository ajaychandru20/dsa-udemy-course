class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return undefined;

    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myarray = new myArray();

myarray.push("Hi");
myarray.push("ajay");
myarray.push("How");
myarray.push("are");
myarray.push("you");

console.log(myarray);

const popitem = myarray.pop();
console.log(popitem); // you

const deleteditem = myarray.delete(1);
console.log(myarray); // Hi, How, are

console.log(deleteditem); // ajay
console.log(myarray.get(0)); // Hi
