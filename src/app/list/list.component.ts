import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todoList: Todo[] = [];
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public toggle(id: number) {
    this.toggleTodo.emit(id);
  }

}
