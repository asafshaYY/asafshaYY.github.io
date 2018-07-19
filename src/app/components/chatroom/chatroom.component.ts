import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/Message';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  @Input() roomNumber : number;
  userFontSize: number = 12;
  @Input() messages_room:Message[];

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  AddFontSize(){
    this.userFontSize += 1;
  }

  ReduceFontSize(){
    this.userFontSize -= 1;
  }

  Delete(id:string){
    for(let i=0;i<this.messages_room.length;i++){
      if(this.messages_room[i].id == id){
        this.messages_room.splice(i, 1);
      }
    }
  }

  SendMessage(newMessage:string){
    if(newMessage.length < 4 || newMessage.length > 255){
      alert("message should be from 4 to 255 characters")
      return;
    }
    let id = this.GenerateNewId();
    this.messages_room.push(
      new Message(
        id.toString(),
        this.data.currentNickname,
        this.data.currentColor,
        newMessage,
        new Date(Date.now())
      )
    )
  }

  GenerateNewId(){
    return new Date().valueOf();
  }
}
