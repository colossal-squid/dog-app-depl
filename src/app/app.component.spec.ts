import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from '../service/data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{
        provide: DataService, useValue: {
          getAllBreeds: () => { },
        }
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
