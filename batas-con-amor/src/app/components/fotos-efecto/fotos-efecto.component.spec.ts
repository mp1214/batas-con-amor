import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosEfectoComponent } from './fotos-efecto.component';

describe('FotosEfectoComponent', () => {
  let component: FotosEfectoComponent;
  let fixture: ComponentFixture<FotosEfectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosEfectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosEfectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
