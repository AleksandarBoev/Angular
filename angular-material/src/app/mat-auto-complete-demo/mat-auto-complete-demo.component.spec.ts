import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutoCompleteDemoComponent } from './mat-auto-complete-demo.component';

describe('MatAutoCompleteDemoComponent', () => {
  let component: MatAutoCompleteDemoComponent;
  let fixture: ComponentFixture<MatAutoCompleteDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatAutoCompleteDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatAutoCompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
