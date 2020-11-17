import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() movieRef: any;
  @Input() favoritesRef: any;
  @Output() closeEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.movieRef);
  }

  closeDetails = () => {
    this.closeEvent.emit();
  };
}
