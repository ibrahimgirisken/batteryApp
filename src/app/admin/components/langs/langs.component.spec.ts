import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangsComponent } from './langs.component';

describe('LangsComponent', () => {
  let component: LangsComponent;
  let fixture: ComponentFixture<LangsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangsComponent]
    });
    fixture = TestBed.createComponent(LangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
