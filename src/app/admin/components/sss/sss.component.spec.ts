import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SssComponent } from './sss.component';

describe('SssComponent', () => {
  let component: SssComponent;
  let fixture: ComponentFixture<SssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SssComponent]
    });
    fixture = TestBed.createComponent(SssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
