import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todo-list';

  constructor() {
    this.changeName('nilkanth');
  }

  changeName(name:string):void{
   this.title = name; 
  }
}
