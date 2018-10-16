import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherWorkComponent } from './another-work.component';

describe('AnotherWorkComponent', () => {
  let component: AnotherWorkComponent;
  let fixture: ComponentFixture<AnotherWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
