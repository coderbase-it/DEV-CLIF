import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditContactComponent } from './page-edit-contact.component';

describe('PageEditContactComponent', () => {
  let component: PageEditContactComponent;
  let fixture: ComponentFixture<PageEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
