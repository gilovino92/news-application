export default class User {
  username: string;
  data: string;
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
