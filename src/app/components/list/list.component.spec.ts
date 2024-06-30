import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a list of items', () => {
    const items = [1,2,3].map(i => ({ text: `${i}`, value:  `${i}` }))
    component.items = items;
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelectorAll('button');
    expect(listItems.length).toBe(items.length);
  });

  it('shows "no items" text', () => {
    component.items = [];
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelectorAll('button');
    expect(listItems.length).toBe(0);
    const emptyText = fixture.nativeElement.querySelector('p');
    expect(emptyText.textContent).toContain('No items to display');
    component.noItemsText = 'Another text';
    fixture.detectChanges();
    expect( fixture.nativeElement.querySelector('p').textContent).toContain('Another text');
  });

  it('an item can be clicked', () => {
    const items = [1,2,3].map(i => ({ text: `${i}`, value:  `${i}` }))
    component.items = items;
    spyOn(component.select, 'emit');
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelectorAll('button');
    listItems[0].click();
    expect(component.select.emit).toHaveBeenCalledWith(items[0].value);
  });
});
