import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceOptionsComponent } from './multiple-choice-options.component';

describe('MultipleChoiceOptionsComponent', () => {
  let component: MultipleChoiceOptionsComponent;
  let fixture: ComponentFixture<MultipleChoiceOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
