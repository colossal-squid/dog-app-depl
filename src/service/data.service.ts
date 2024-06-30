import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { DogBreedsResponse, DogSubBreedsListResponse, RandomImageResponse, RandomImagesResponse } from './data.service.types';

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

  public getImagesByBreed(query: string): Observable<RandomImagesResponse>{
    return this.http.get<RandomImagesResponse>(`${this.apiUrl}/breed/${query}/images`);
  }

  public listAllSubBreeds(breed: string): Observable<DogSubBreedsListResponse>{
    return this.http.get<DogSubBreedsListResponse>(`${this.apiUrl}/breed/${breed}/list`);
  }

}
