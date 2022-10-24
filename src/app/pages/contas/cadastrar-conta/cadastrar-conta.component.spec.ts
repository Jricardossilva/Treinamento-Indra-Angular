import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarContaComponent } from './cadastrar-conta.component';

describe('CadastrarContaComponent', () => {
  let component: CadastrarEditarContaComponent;
  let fixture: ComponentFixture<CadastrarEditarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEditarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
