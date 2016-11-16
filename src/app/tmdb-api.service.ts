import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { MovieDetail } from './movie-detail/movie-detail';

@Injectable()
export class TmdbApiService {
  private keyV3 = "6b2da9ca30c12676e1c4654fc911c488";
  private keyV4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjJkYTljYTMwYzEyNjc2ZTFjNDY1NGZjOTExYzQ4OCIsInN1YiI6IjU4MWUyODAyOTI1MTQxMGVlMzAwY2NlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgO-6iAK6gKZvKUOhooviXKz627yNL14Pp2gvZJz3uw";
  private baseUrl = "https://api.themoviedb.org/";
  //private imageConfig;

  getMovieDetail(id) {
    let url = this.baseUrl+"3/movie/"+id+"?api_key="+this.keyV3+"&language=en-US";
    let localPath = 'example_data/movie_detail.json';
    return this.http.get(localPath)
      .map(response => <MovieDetail>response.json(),
              err => console.error(err));
  }
  
  getImageConfig(){
    let v3Url = this.baseUrl + "3/configuration?api_key=" + this.keyV3;
    let v4Url = this.baseUrl + "4/configuration";
    let localPath = 'example_data/image_config.json';
    return this.http.get(localPath)
        .map(res => res.json(),
        err => console.error(err));
  }

 /* buildHeaders(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=utf-8');
    headers.append('Authorization', 'Bearer ' + this.keyV4);
    return headers;
  }

  getRequestToken() {
   let url = this.baseUrl + "4/auth/request_token";
   let headers = this.buildHeaders();
   let options = new RequestOptions({ headers: headers});
   let data = JSON.stringify({
      redirect_to: 'http://www.themoviedb.org/'
    });
   return this.http.post(url, data, options)
    .map(res => res.json(),
        err => console.error(err));
  }*/


  constructor(private http: Http) { }

}
