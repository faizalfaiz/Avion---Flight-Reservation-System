import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Airlines } from 'src/app/airlines';
import { AirlinesService } from 'src/app/airlines.service';

@Component({
  selector: 'app-addairlines',
  templateUrl: './addairlines.component.html',
  styleUrls: ['./addairlines.component.css']
})
export class AddairlinesComponent {
  air = new Airlines()
  airlines: Airlines = new Airlines();
  constructor(private airlinesService: AirlinesService , private router: Router) { }


  saveAirlines() {
    console.log( JSON.stringify (this.airlines));
    this.airlinesService.addAirlines(this.airlines).subscribe((m) => this.router.navigate(["adminairlinespage"]));

  }


}

