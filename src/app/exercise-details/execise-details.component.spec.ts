import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeciseDetailsComponent } from './execise-details.component';

describe('ExeciseDetailsComponent', () => {
  let component: ExeciseDetailsComponent;
  let fixture: ComponentFixture<ExeciseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExeciseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExeciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
