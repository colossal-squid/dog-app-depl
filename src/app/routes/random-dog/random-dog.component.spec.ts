import { ComponentFixture, TestBed } from '@angular/core/testing';
import {of } from 'rxjs';
import { RandomDogComponent } from './random-dog.component';
import { DataService } from '../../../service/data.service';
import { ButtonComponent } from '../../components/button/button.component';

describe('RandomDogComponent', () => {
  let component: RandomDogComponent;
  let fixture: ComponentFixture<RandomDogComponent>;
  let dataService = {
    getRandomBreedImage: jasmine.createSpy().and.returnValue( of({
      message: 'image url'
    })) ,
  };
  beforeEach(async () => {
    dataService.getRandomBreedImage.calls.reset();
    await TestBed.configureTestingModule({
      imports: [RandomDogComponent, ButtonComponent],
      providers: [
        {
          provide: DataService, useValue: dataService
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

  it('loads data on init', () => {
    expect(dataService.getRandomBreedImage).toHaveBeenCalledTimes(1);
  })

  it('loads data on button click', () => {
    expect(dataService.getRandomBreedImage).toHaveBeenCalledTimes(1);
    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toBe(1);
    button[0].click();
    expect(dataService.getRandomBreedImage).toHaveBeenCalledTimes(2);
    button[0].click();
    expect(dataService.getRandomBreedImage).toHaveBeenCalledTimes(3);
  })
});
