import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutpageComponent } from './prodcutpage.component';

describe('ProdcutpageComponent', () => {
  let component: ProdcutpageComponent;
  let fixture: ComponentFixture<ProdcutpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdcutpageComponent]
    });
    fixture = TestBed.createComponent(ProdcutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
