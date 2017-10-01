import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Output() removeCompleted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public removeCompletedHandler() {
    this.removeCompleted.emit()
  }
}
