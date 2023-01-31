import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  inputTodo:string = "";
  
 ngOnInit(): void {
  this.todos = [
    {
      content: 'First todo',
      completed: false
    },
    {
      content: 'Second todo',
      completed: true
    }
  ]
 }

 toggleDone (id:number) {
  this.todos.map((v, i) => {
    if (i == id) v.completed = !v.completed;

    return v;
  }) 
 }

 deleteTodo (id:number) {
  this.todos = this.todos.filter((v, i) => i !== id);
 }

 addTodo () {
  this.todos.push({
    content: this.inputTodo,
    completed: false
  });

  this.inputTodo = "";
 }
}
