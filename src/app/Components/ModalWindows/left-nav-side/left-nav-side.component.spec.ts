import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavSideComponent } from './left-nav-side.component';

describe('LeftNavSideComponent', () => {
  let component: LeftNavSideComponent;
  let fixture: ComponentFixture<LeftNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
