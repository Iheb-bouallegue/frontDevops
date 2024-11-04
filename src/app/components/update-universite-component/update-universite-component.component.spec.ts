import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversiteComponentComponent } from './update-universite-component.component';

describe('UpdateUniversiteComponentComponent', () => {
  let component: UpdateUniversiteComponentComponent;
  let fixture: ComponentFixture<UpdateUniversiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUniversiteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUniversiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
