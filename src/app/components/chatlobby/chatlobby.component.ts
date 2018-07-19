import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chatlobby',
  templateUrl: './chatlobby.component.html',
  styleUrls: ['./chatlobby.component.css']
})
export class ChatlobbyComponent implements OnInit {

  currentNickname:string;
  currentColor:string;
  //test:Object;

  messages_room1:Message[] = [];
  messages_room2:Message[] = [];
  messages_room3:Message[] = [];

  constructor(private data:DataService) { }

  ngOnInit() {
    //this.data.currentMessage.subscribe(message=>this.test = message);
  }
}
