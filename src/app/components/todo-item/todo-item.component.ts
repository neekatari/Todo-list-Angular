import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'

import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      alert: true,
      'alert-info': true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    //Toggle UI
    todo.completed = !todo.completed;

    //Toggle Server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });

  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
