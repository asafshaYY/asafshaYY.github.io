import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentNickname:string;
  currentColor:string;

  private messageSource = new BehaviorSubject<Object>({});
  currentMessage = this.messageSource.asObservable();

  ChangeMessage(message: Object){
    this.currentNickname = message["nickname"];
    this.currentColor = message["color"];
    //in case i want to send this data to components
    //this.messageSource.next(message);
  }

  constructor() { }
}
