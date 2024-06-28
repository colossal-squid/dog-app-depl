import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DogBreedsResponse } from '../service/data.service.types';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public data: any = undefined
  constructor (
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getAllBreeds()
    .subscribe((response: DogBreedsResponse) => {
      this.data = response.message;
    });
  }
}
