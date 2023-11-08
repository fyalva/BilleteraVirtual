import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoqueComponent } from './roque.component';

describe('RoqueComponent', () => {
  let component: RoqueComponent;
  let fixture: ComponentFixture<RoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
