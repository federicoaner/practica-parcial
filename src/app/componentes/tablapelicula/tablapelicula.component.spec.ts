import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapeliculaComponent } from './tablapelicula.component';

describe('TablapeliculaComponent', () => {
  let component: TablapeliculaComponent;
  let fixture: ComponentFixture<TablapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
