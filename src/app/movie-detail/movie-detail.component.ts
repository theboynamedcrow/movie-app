import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../app.component';
import { MovieDetail } from './movie-detail';
import { Observable } from 'rxjs/Rx';
import { TmdbApiService } from '../tmdb-api.service';
import { MovieCredits, Cast, Crew } from './movie-credits';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  movieDetail: MovieDetail;
  imageConfig;
  movieCredits: MovieCredits;
  releaseDates;
  requestToken;
  private imageDetail = {};
  imageUrl = "";

  getGenreInfo(genreId) {
    // for testing... we will actually want to use href to go to different route in application
    console.log(genreId);
  }


  getImageUrl(){
    let url: string;
    let imgSize = "w185";
    if (this.movieDetail && this.imageConfig){
      url = this.imageConfig.images.secure_base_url + imgSize +  this.movieDetail.poster_path;
    }
    return url;
  }
  getMovieYear(){
    let year = "XXXX";
    if (this.movieDetail){
      year = this.movieDetail.release_date.substr(0,4);
    }
    return year;
  }


  constructor(private tmdbApiService: TmdbApiService) {
  }

  ngOnInit() {
    var localExample = "example_data/movie_detail.json";
    var id = 345; // 345 - EWS, 238 - Godfather, 
    //this.getMovieDetailById(movieId);

    this.tmdbApiService.getMovieDetail(id)
      .subscribe(movieDetail => this.movieDetail = movieDetail);

    this.tmdbApiService.getImageConfig()
      .subscribe(imageConfig => this.imageConfig = imageConfig);
    
    this.tmdbApiService.getMovieCredits(id)
      .subscribe(movieCredits => this.movieCredits = movieCredits);

    this.tmdbApiService.getReleaseDates(id)
      .subscribe(releaseDates => this.releaseDates = releaseDates);

  }

}
