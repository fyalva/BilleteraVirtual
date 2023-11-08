import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* public PacienteId: string,
        public Nombre: string,
        public Apellido: string,
        public Email: string,
        public Telefono: string,
        public TipoTelefonoid,
        public HistClinica: string,
        public ProvinciaId: number,
        public LocalidadId: number,
        public FechaDeNacimiento: string,
        public SexoId: number,
        public OrganizationId,*/