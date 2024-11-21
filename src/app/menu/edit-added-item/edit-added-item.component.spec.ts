import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddedItemComponent } from './edit-added-item.component';

describe('EditAddedItemComponent', () => {
  let component: EditAddedItemComponent;
  let fixture: ComponentFixture<EditAddedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddedItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
