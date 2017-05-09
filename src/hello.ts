export class Hello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.info(`Hello ${this.name}!`);
  }
}