import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemNoticiasComponentComponent } from './listagem-noticias.component';

describe('ListagemNoticiasComponentComponent', () => {
  let component: ListagemNoticiasComponentComponent;
  let fixture: ComponentFixture<ListagemNoticiasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemNoticiasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemNoticiasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
