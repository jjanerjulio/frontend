import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEscribirComponent } from './create-escribir.component';

describe('CreateEscribirComponent', () => {
  let component: CreateEscribirComponent;
  let fixture: ComponentFixture<CreateEscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEscribirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
