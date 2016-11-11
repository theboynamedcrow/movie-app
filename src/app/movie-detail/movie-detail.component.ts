import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../app.component';
import { MovieDetail } from './movie-detail';
import { Observable } from 'rxjs/Rx';
import { TmdbApiService } from '../tmdb-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  movieDetail: MovieDetail;
  imageConfig;
  requestToken;
  private imageDetail = {};
  imageUrl = "";

  
  getImageUrl(){
    let url: string;
    let imgSize = "w185";
    if (this.movieDetail && this.imageConfig){
      url = this.imageConfig.images.secure_base_url + imgSize +  this.movieDetail.poster_path;
    }
    return url;
  }


  constructor(private tmdbApiService: TmdbApiService) {
  }

  ngOnInit() {
    var localExample = "example_data/movie_detail.json";
    var id = 238; // 345 - EWS, 238 - Godfather, 
    //this.getMovieDetailById(movieId);

    this.tmdbApiService.getMovieDetail(345)
      .subscribe(movieDetail => this.movieDetail = movieDetail);

    this.tmdbApiService.getImageConfig()
      .subscribe(imageConfig => this.imageConfig = imageConfig);

      
      
      //this.tmdbApiService.getRequestToken()
      //.subscribe(requestToken => this.requestToken = requestToken);
      //console.log(this.requestToken);
  }

}
