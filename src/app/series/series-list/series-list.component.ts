import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  totalTemporadas: number = 0;

  selected: Boolean = false;
  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calcularPromedioTemporadas();
    });
  }

  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  calcularPromedioTemporadas() {

    let totalTemporadas = 0;
    for (const serie of this.series) {
      totalTemporadas += serie.seasons; // Sumamos las temporadas de cada serie
    }
    this.totalTemporadas = totalTemporadas / this.series.length; // Calculamos el promedio
  }

  ngOnInit() {
    this.getSeries();
  }

}
