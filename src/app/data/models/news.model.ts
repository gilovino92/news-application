import { Deserializable } from "./deserializable.model";
export default class News implements Deserializable {
  public author: string;
  public content: string;
  public description: string;
  public publishedAt: string;
  public source: {
    id: any;
    name: string;
  };
  public title: string;
  public url: string;
  public urlToImage: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  getAuthor() {
    return this.author;
  }
}
