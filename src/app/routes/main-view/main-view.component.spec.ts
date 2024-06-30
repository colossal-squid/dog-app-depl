import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { DataService } from '../../../service/data.service';
import { from, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ListComponent } from '../../components/list/list.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  const router = {
    navigate: jasmine.createSpy(),
  }
  let dataService = {
    getImagesByBreed: jasmine.createSpy().and.returnValue( of({
      message: [
         'image url - 1',
         'image url - 2',
      ]
    })),
    getAllBreeds: jasmine.createSpy().and.returnValue( of({
      message: {
        'dog-1': [],
        'dog-2': ['sub-1', 'sub-2'],
      }
    })),
  };
  beforeEach(async () => {
    dataService.getAllBreeds.calls.reset();
    dataService.getImagesByBreed.calls.reset();
    router.navigate.calls.reset();
    await TestBed.configureTestingModule({
      imports: [MainViewComponent, ListComponent],
      providers: [
        {
          provide: DataService, useValue: dataService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: from([{ breed: 'dog-1', subbreed: 'test' }]),
          },
        },
        {
          provide: Router,
          useValue: router,
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

  it('loads data on init', () => {
    expect(dataService.getAllBreeds).toHaveBeenCalledTimes(1);
    expect(dataService.getImagesByBreed).toHaveBeenCalledTimes(1);
  });

  it('calls router navigate on breed and sub-breed click', () => {
    expect(dataService.getImagesByBreed).toHaveBeenCalledTimes(1);
    const lists = fixture.debugElement.queryAll(By.directive(ListComponent));
    expect(lists.length).toBe(2);
    const breedList = lists[0];
    breedList.componentInstance.select.emit('dog-1');
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledTimes(1);
    const subbreedList = lists[1];
    subbreedList.componentInstance.select.emit('sub-1');
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledTimes(2);
  });
});
