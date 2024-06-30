import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { DogBreeds } from '../../../service/data.service.types';
import { ListComponent, ListItem } from '../../components/list/list.component';
import { ImageComponent } from '../../components/image/image.component';
import { ButtonComponent } from '../../components/button/button.component';

type QueryParams = {
  breed?: string;
  subbreed?: string;
}
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent, ListComponent],
  templateUrl: './main-view.component.html',
})
export class MainViewComponent {
  breeds: ListItem[] = []
  data: DogBreeds | undefined = undefined;
  urls: string[] = [];
  loading: boolean = false;
  breed: string | undefined = undefined;
  subbreed: string | undefined = undefined;

  constructor(
    private api: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get subbreeds(): ListItem[] {
    if (!this.breed || !this.data) {
      return []
    }
    const values = this.data[this.breed] || []
    return values.map(value => ({ value, text: value }));
  }

  ngOnInit() {
    this.api.getAllBreeds().subscribe(response => {
      this.data = response.message;
      this.breeds = Object.keys(response.message).map(value => ({
        text: this.formatBreed(value),
        value
      }))
      this.activatedRoute.queryParams.subscribe(params => {
        this.breed = params['breed'] ?? undefined;
        this.subbreed = params['subbreed'] ?? undefined;
        this.reloadImage();
      })
    })
  }

  updateRouteQueryParams(queryParams: QueryParams) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: queryParams['subbreed'] ? 'merge' : null,
      }
    );
  }

  formatBreed(breed: string): string {
    const b = breed;
    const subBreeds = ((this.data ?? {})[b] || []).length
    return `${breed}` + (subBreeds > 0 ? ` (${subBreeds})` : '');
  }

  reloadImage(): void {
    this.loading = true;
    if (!Array.isArray(this.breeds) || this.breeds.length === 0) {
      return
    }
    let breed = this.breed;
    const subbreed = this.subbreed;
    if (!breed) {
      breed = this.breeds[0].value;
    }
    const query = subbreed ? `${breed}/${subbreed}` : breed;
    this.api.getImagesByBreed(query)
      .subscribe(response => {
        this.urls = response.message;
        this.loading = false;
      });
  }

}
