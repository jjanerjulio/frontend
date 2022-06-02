import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEscribirComponent } from './list-escribir.component';

describe('ListEscribirComponent', () => {
  let component: ListEscribirComponent;
  let fixture: ComponentFixture<ListEscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEscribirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
