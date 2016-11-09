import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MovieDetail } from './movie-detail/movie-detail';

@Injectable()
export class TmdbApiService {
  private keyV3 = "6b2da9ca30c12676e1c4654fc911c488";
  private keyV4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjJkYTljYTMwYzEyNjc2ZTFjNDY1NGZjOTExYzQ4OCIsInN1YiI6IjU4MWUyODAyOTI1MTQxMGVlMzAwY2NlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgO-6iAK6gKZvKUOhooviXKz627yNL14Pp2gvZJz3uw";
  //private imageConfig = {};

  getMovieDetail(id) {
    var url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+this.keyV3+"&language=en-US";
    return this.http.get(url)
      .map(response => <MovieDetail>response.json());
  }
  
  getImageConfig(){
    let imageConfig_baseUrl = "https://api.themoviedb.org/3/configuration?api_key=";
    return this.http.get(imageConfig_baseUrl + this.keyV3)
        .map(res => res.json());
  }

  constructor(private http: Http) { }

}
