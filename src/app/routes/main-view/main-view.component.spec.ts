import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { DataService } from '../../../service/data.service';
import { from, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainViewComponent],
      providers: [
        {
          provide: DataService, useValue: {
            getAllBreeds: () => of({
              message: []
            }),
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ breed: 'test', subbreed: 'test' }]),
          },
        },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
