import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerCatalogoComponent } from './explorer-catalogo.component';

describe('ExplorerCatalogoComponent', () => {
  let component: ExplorerCatalogoComponent;
  let fixture: ComponentFixture<ExplorerCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorerCatalogoComponent]
    });
    fixture = TestBed.createComponent(ExplorerCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
