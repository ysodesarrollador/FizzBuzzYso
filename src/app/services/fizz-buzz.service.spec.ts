import { TestBed } from '@angular/core/testing';
import { FizzBuzzService } from './fizz-buzz.service';


describe('FizzBuzzService', () => {

  let fbService;

  beforeEach(() => TestBed.configureTestingModule({}));
  fbService = new FizzBuzzService();
  it('should be created Fizz Buzz Service', () => {
    let fbList = fbService._fbList;
    expect(Array.isArray(fbList)).toBeFalsy();
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });
  
});
