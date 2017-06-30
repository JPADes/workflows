import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('shake',[
      state('0',style({transform: 'translateX(0)'})),
      state('1' ,style({transform: 'translateX(0)'})),
       transition('0 => 1', [
        animate(500, keyframes([
          style({transform: 'translateX(-5px)'}),
          style({transform: 'translateX(5px)'}),
          style({transform: 'translateX(-5px)'}),
          style({transform: 'translateX(5px)'}),
          style({transform: 'translateX(-5px)'}),
          style({transform: 'translateX(2px)'}),
          style({transform: 'translateX(-2px)'}),
          style({transform: 'translateX(2px)'}),
        ]))
      ])
    ])

  ]
})
export class LoginComponent implements OnInit {

  private loginFailed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}