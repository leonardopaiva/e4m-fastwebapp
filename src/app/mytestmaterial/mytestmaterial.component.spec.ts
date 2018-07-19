
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytestmaterialComponent } from './mytestmaterial.component';

describe('MytestmaterialComponent', () => {
  let component: MytestmaterialComponent;
  let fixture: ComponentFixture<MytestmaterialComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MytestmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytestmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
