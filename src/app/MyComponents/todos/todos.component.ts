import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  localItem: string;
  todos: Todo[];
  constructor() {
    // # When our app initialise
    // # If 'todos-array' is empty then getItem returns 'null' else returns 'todos-array'
    this.localItem = localStorage.getItem('todos');
    // # Testing
    // console.log(this.localItem);
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  // # Delete Todo Method
  deleteTodo(todo: Todo) {
    // # Just For Reference
    // console.log(todo);

    // # Delete a Todo using 'splice' method from specific index
    // # Get index of todo
    const index = this.todos.indexOf(todo);
    // # Delete todo using 'splice' method
    this.todos.splice(index, 1);

    // # On delete - update Local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // # Add Todo Method
  addTodo(todo: Todo) {
    // # Just For Reference
    // console.log(todo);
    // # Add a Todo using 'push' method
    this.todos.push(todo);
    // # On add - update Local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // # Done Todo Method
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    // # Extra color field is added
    if (this.todos[index].active) {
      this.todos[index].color = 'bg-primary';
    } else {
      this.todos[index].color = 'bg-danger';
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

// # Note #

// 1. console.log() is very much useful for debugging

// 2. Local storage means your browser memory with any particular account
//    We have to save our todos on Local storage

// # Toggle means to switch between two options
//   If 'mark as done' then make it 'mark as undone' and vice versa

// 4. Hard coded array:
/* 
this.todos = [
  {
    sno: 1,
    title: 'This is title-1',
    desc: 'Description',
    active: true,
  },
  {
    sno: 2,
    title: 'This is title-2',
    desc: 'Description',
    active: true,
  },
  {
    sno: 3,
    title: 'This is title-3',
    desc: 'Description',
    active: true,
  },
];
}          
*/
