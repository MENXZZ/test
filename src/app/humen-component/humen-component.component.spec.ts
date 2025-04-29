import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumenComponentComponent } from './humen-component.component';

describe('HumenComponentComponent', () => {
  let component: HumenComponentComponent;
  let fixture: ComponentFixture<HumenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
