import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  // # Input Decorator - Which accepts the index of the last element of an array
  @Input() index: number;

  // # Event Emitter
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  // # Variables
  title: string;
  desc: string;

  // # Changes
  tag: string;
  brand: string;

  // # Submit Method
  onSubmit() {
    // # Changes
    if (this.tag === 'Important') this.brand = 'I';
    else if (this.tag === 'Urgent') this.brand = 'U';
    else if (this.tag === 'Nothing') this.brand = 'N';
    else if (this.tag === 'Today') this.brand = 'T';
    else this.brand = 'UI';

    // # Create one Todo
    const todo = {
      sno: this.index,
      title: this.title,
      desc: this.desc,
      active: true,
      color: 'bg-primary',
      tag: this.tag,
      brand: this.brand,
    };

    // # 'todoAdd' is an event that we emit by using EventEmitter
    // # That event emits one 'todo'
    if (!this.title || !this.desc || !this.tag) {
      // # Alert Message
      alert('Title or Description or Tag cannot be blank !');
    } else {
      // # Add Todo
      this.todoAdd.emit(todo);
      // # clear the Input
      this.title = '';
      this.desc = '';
      this.tag = '';
    }
  }
}
