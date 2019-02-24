import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoTerminatorListComponent } from './page-video-terminator-list.component';

describe('PageVideoTerminatorListComponent', () => {
  let component: PageVideoTerminatorListComponent;
  let fixture: ComponentFixture<PageVideoTerminatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVideoTerminatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVideoTerminatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
