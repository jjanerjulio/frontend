import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestarComponent } from './list-prestar.component';

describe('ListPrestarComponent', () => {
  let component: ListPrestarComponent;
  let fixture: ComponentFixture<ListPrestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
