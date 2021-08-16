import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayContactComponent } from './page-display-contact.component';

describe('PageDisplayContactComponent', () => {
  let component: PageDisplayContactComponent;
  let fixture: ComponentFixture<PageDisplayContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDisplayContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
