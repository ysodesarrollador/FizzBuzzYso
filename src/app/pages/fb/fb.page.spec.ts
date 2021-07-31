import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FbPage } from './fb.page';

describe('FbPage', () => {
  let component: FbPage;
  let fixture: ComponentFixture<FbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),
        AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create with fizzBuzz to be', () => {
    expect(component).toBeTruthy();

    expect(Array.isArray(component.fbList)).toBeTruthy();
    expect(component.fbList.length).toEqual(100);
    expect(component.fbList[0]).toBe(1)
    expect(component.fbList[1]).toBe(2)
    expect(component.fbList[2]).toBe('Fizz')
    expect(component.fbList[4]).toBe('Buzz')
    expect(component.fbList[14]).toBe('FizzBuzz')
  });

  it('should create with fizzBuzz contain', () => {
    expect(component).toBeTruthy();
    expect(component.fbList).toContain("Fizz");
    expect(component.fbList).toContain("Buzz");
    expect(component.fbList).toContain("FizzBuzz");
  });

});
