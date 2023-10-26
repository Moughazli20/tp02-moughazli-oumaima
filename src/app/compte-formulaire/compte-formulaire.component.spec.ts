import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteFormulaireComponent } from './compte-formulaire.component';

describe('CompteFormulaireComponent', () => {
  let component: CompteFormulaireComponent;
  let fixture: ComponentFixture<CompteFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteFormulaireComponent]
    });
    fixture = TestBed.createComponent(CompteFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
