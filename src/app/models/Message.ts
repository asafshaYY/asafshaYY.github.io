export class Message{
  constructor(
    public id: string,
    public nickname : string,
    public color : string,
    public message: string,
    public date: Date
  ){
  }
}