import { Injectable } from '@angular/core';

/**
 * This could have used dotenv/process.env here,
 * for the sake of simplicity, I'm just returning the URL directly.
*/
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getApiUrl(): string {
    return `https://dog.ceo/api`
  }
}
