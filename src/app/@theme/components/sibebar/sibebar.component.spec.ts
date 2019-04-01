import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibebarComponent } from './sibebar.component';

describe('SibebarComponent', () => {
  let component: SibebarComponent;
  let fixture: ComponentFixture<SibebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
