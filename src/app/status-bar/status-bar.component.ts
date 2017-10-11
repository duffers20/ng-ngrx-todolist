import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Input() countRemaining: Observable<number>;
  @Output() removeCompleted: EventEmitter<any> = new EventEmitter();

  public count: number;
  public label: string;

  constructor() { }

  ngOnInit() {
    this.countRemaining.subscribe ((count) => {
      this.count = count;
      if (this.count === 1) {
        this.label = 'item';
      } else {
        this.label = 'items';
      }
    });
  }

  public removeCompletedHandler() {
    this.removeCompleted.emit()
  }
}
