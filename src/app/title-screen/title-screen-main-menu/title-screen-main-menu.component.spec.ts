import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleScreenMainMenuComponent } from './title-screen-main-menu.component';

describe('TitleScreenMainMenuComponent', () => {
  let component: TitleScreenMainMenuComponent;
  let fixture: ComponentFixture<TitleScreenMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleScreenMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleScreenMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
