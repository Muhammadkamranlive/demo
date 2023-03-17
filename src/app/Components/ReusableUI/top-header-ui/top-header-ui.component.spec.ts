import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderUIComponent } from './top-header-ui.component';

describe('TopHeaderUIComponent', () => {
  let component: TopHeaderUIComponent;
  let fixture: ComponentFixture<TopHeaderUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeaderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
