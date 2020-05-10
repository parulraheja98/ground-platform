import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceOptionComponent } from './multiple-choice-option.component';

describe('MultipleChoiceOptionComponent', () => {
  let component: MultipleChoiceOptionComponent;
  let fixture: ComponentFixture<MultipleChoiceOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
