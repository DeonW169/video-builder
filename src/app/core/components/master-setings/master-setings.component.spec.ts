import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSetingsComponent } from './master-setings.component';

describe('MasterSetingsComponent', () => {
  let component: MasterSetingsComponent;
  let fixture: ComponentFixture<MasterSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
