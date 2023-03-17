import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottemLeftNavSideComponent } from './bottem-left-nav-side.component';

describe('BottemLeftNavSideComponent', () => {
  let component: BottemLeftNavSideComponent;
  let fixture: ComponentFixture<BottemLeftNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottemLeftNavSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottemLeftNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
