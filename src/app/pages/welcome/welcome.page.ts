import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  btnLabel = "Welcome to Fizz Buzz";
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToFb() {
   this.router.navigate(['fb'])
  }
}
