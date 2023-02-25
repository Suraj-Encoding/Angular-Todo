import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  // # Input Decorator - Which accepts the argument passed from another component
  // # Accepts Input from parent
  @Input() todo: Todo;

  // # Event Emitter
  // # Give Output the parent
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  // # Event Emitter - For checkbox
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  // # Constructor
  constructor() {}

  // # On click 'Delete' button
  onClick(todo: Todo) {
    // # Just for reference
    // console.log("Delete button has been clicked");
    // console.log(todo.title);

    // # 'todoDelete' is an event that we emit with value 'todo'
    // # This event emits todo
    this.todoDelete.emit(todo);
  }

  // # On checkbox click
  onCheckBoxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}

// # Delete todo flow:
//   Delete button click -> onclick() call -> todoDelete() call ->
//   Listen in parent component -> deleteTodo() call -> delete the Todo

// # Checkbox flow:
//   checkbox click -> onCheckBoxClick() call -> todoCheckbox() call ->
//   Listen in parent component -> toggleTodo() call -> update the Todo
