import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NogglesComponent } from './noggles.component';

describe('NogglesComponent', () => {
  let component: NogglesComponent;
  let fixture: ComponentFixture<NogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NogglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
