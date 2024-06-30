import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { DogBreedsResponse, DogSubBreedsListResponse, RandomImageResponse, RandomImagesResponse } from './data.service.types';

type Query = {
  breed: string;
  subbreed?: string;
}
/**
 * This is a wrapper around
 * https://dog.ceo/dog-api/documentation
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl!: string;

  constructor(
    private http: HttpClient, config: ConfigService
  ) {
    this.apiUrl = config.getApiUrl();
  }

  public getAllBreeds(): Observable<DogBreedsResponse>{
    return this.http.get<DogBreedsResponse>(`${this.apiUrl}/breeds/list/all`);
  }

  public getRandomBreedImage(): Observable<RandomImageResponse>{
    return this.http.get<RandomImageResponse>(`${this.apiUrl}/breeds/image/random`);
  }

  public getImagesByBreed({breed, subbreed}: Query): Observable<RandomImagesResponse>{
    const q = subbreed ? `${breed}/${subbreed}` : breed;
    return this.http.get<RandomImagesResponse>(`${this.apiUrl}/breed/${q}/images`);
  }

  public listAllSubBreeds(breed: string): Observable<DogSubBreedsListResponse>{
    return this.http.get<DogSubBreedsListResponse>(`${this.apiUrl}/breed/${breed}/list`);
  }

}
