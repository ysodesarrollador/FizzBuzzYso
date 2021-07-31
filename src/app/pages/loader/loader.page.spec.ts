import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
 
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(), 
        AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  }));

  it('should go to welcome page', fakeAsync(() => {
     spyOn(router,'navigate' )
     component.ngOnInit();
     tick(3500);
     expect(router.navigate).toHaveBeenCalledWith(['welcome']);
  }));
});
