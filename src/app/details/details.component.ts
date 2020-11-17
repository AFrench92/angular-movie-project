import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() movieRef: any;
  @Input() favoritesRef: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.movieRef);
  }
}
