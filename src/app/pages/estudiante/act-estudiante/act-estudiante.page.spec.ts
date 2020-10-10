import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActEstudiantePage } from './act-estudiante.page';

describe('ActEstudiantePage', () => {
  let component: ActEstudiantePage;
  let fixture: ComponentFixture<ActEstudiantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActEstudiantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
