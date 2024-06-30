import { ComponentFixture, TestBed } from '@angular/core/testing';
import {of } from 'rxjs';
import { RandomDogComponent } from './random-dog.component';
import { DataService } from '../../../service/data.service';

describe('RandomDogComponent', () => {
  let component: RandomDogComponent;
  let fixture: ComponentFixture<RandomDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomDogComponent],
      providers: [
        {
          provide: DataService, useValue: {
            getRandomBreedImage: () => of({
              message: ''
            }) ,
          }
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RandomDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
