import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkComponentComponent } from './drink-component.component';

describe('DrinkComponentComponent', () => {
  let component: DrinkComponentComponent;
  let fixture: ComponentFixture<DrinkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
