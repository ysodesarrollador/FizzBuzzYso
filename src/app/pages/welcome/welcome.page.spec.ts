import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;
  let router:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    router =  TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should go to fb page', () => {
    spyOn(router, 'navigate');
    component.goToFb();
    expect(router.navigate).toHaveBeenCalledWith(['fb']);
  });
});
