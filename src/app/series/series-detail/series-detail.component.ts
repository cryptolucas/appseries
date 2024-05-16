import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  @Input() serieDetail!: Serie;

  constructor() { }

  ngOnInit() {
  }

}
