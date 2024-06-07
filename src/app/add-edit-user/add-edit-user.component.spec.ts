import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserComponent } from './AddEditUserComponent';

describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUserComponent],
    });
    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
