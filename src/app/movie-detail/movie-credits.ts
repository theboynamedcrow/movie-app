export interface MovieCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];

}
export interface Cast {
  cast_id: number; // 1,
  character: string; // "Dr. William 'Bill' Harford",
  credit_id: string; // "52fe423ac3a36847f800df1b",
  id: number; // 500, 
  name: string; // "Tom Cruise",
  order: number; // 0,
  profile_path: string; // "/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg"
}

export interface Crew {
    credit_id: string; // "52fe423bc3a36847f800df45",
    department: string; //"Directing",
    id: number; // 240,
    job: string; // "Director",
    name: string; // "Stanley Kubrick",
    profile_path: string; // "/ywoN9gI2lFOA5EAxxyRbQ1R4GQ6.jpg"
}