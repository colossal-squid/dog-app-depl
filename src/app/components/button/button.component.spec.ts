import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit', () => {
    spyOn(component.click, 'emit');
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelector('button');
    listItems.click();
    expect(component.click.emit).toHaveBeenCalledTimes(1);
    listItems.click();
    expect(component.click.emit).toHaveBeenCalledTimes(2);
  });

});
