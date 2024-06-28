import { Component } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { RandomImageResponse } from '../../../service/data.service.types';

@Component({
  selector: 'app-random-dog',
  standalone: true,
  imports: [],
  templateUrl: './random-dog.component.html',
  styleUrl: './random-dog.component.css'
})
export class RandomDogComponent {
  public url: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.dataService.getRandomBreedImage()
    .subscribe((response: RandomImageResponse) => {
      this.url = response.message;
    });
  }
}
