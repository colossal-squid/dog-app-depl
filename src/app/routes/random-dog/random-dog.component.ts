import { Component } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { RandomImageResponse } from '../../../service/data.service.types';
import { ImageComponent } from './../../components/image/image.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-random-dog',
  standalone: true,
  imports: [ButtonComponent, ImageComponent],
  templateUrl: './random-dog.component.html'
})
export class RandomDogComponent {
  public url: string = '';
  public loading: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.loading = true;
    this.dataService.getRandomBreedImage()
    .subscribe((response: RandomImageResponse) => {
      this.url = response.message;
      this.loading = false
    });
  }
}
