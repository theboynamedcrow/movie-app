import { Component} from '@angular/core';
import { MovieDetailComponent } from './movie-detail';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tmdb';
  
}
