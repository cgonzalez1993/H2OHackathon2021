import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InDepthInfoComponent } from './in-depth-info.component';

describe('InDepthInfoComponent', () => {
  let component: InDepthInfoComponent;
  let fixture: ComponentFixture<InDepthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InDepthInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InDepthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
