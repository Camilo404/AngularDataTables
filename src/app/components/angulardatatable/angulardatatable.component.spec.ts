import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardatatableComponent } from './angulardatatable.component';

describe('AngulardatatableComponent', () => {
  let component: AngulardatatableComponent;
  let fixture: ComponentFixture<AngulardatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulardatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
