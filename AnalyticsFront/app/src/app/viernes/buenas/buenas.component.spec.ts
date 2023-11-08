import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenasComponent } from './buenas.component';

describe('BuenasComponent', () => {
  let component: BuenasComponent;
  let fixture: ComponentFixture<BuenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
