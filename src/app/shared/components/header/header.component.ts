import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
//import { Session } from 'inspector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() { }
  signout() {
    alert('logout successfully');
    this.router.navigate(["/"]).then(result=>{window.location.href = 'http://localhost:4200/login'});
    
  }

  }


