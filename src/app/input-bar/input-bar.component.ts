import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent {
  public newTodo = '';
  @Output() add: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public addTodo() {
    if (this.newTodo.trim().length) {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
