import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavSideComponent } from './right-nav-side.component';

describe('RightNavSideComponent', () => {
  let component: RightNavSideComponent;
  let fixture: ComponentFixture<RightNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightNavSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
