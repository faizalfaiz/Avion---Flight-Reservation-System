import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airlines } from 'src/app/airlines';
import { AirlinesService } from 'src/app/airlines.service';

@Component({
  selector: 'app-adminairlinespage',
  templateUrl: './adminairlinespage.component.html',
  styleUrls: ['./adminairlinespage.component.css']
})
export class AdminairlinespageComponent implements OnInit {

  airlines: Airlines[];

  constructor(private airlinesService: AirlinesService, private router: Router) {


   }

  ngOnInit() {
    this.airlinesService.getAirlinesList().subscribe((air) => (this.airlines = air));;
  }
  getAirlines(): void{
    this.airlines= [

     ];
   }

   trackByAirlinesid (index: number, airlines: Airlines){
     return airlines.airlineId;}

  deleteAirlines(airlineId) {
    this.airlinesService.delete(airlineId) .subscribe((m) => this.router.navigate(["adminairlinespage"]));;
  }
//    getTotalFlightCount(): number {
//     return this.airlines.length;d
// }

addAirlines() {
  console.log( JSON.stringify (this.airlines));
  this.router.navigate(['addairlines']);

}
 editAirlines(updatedData) {
   
  // this.router.navigate(['addairlines']);
  // this.airlines = this.airlines.filter((value, key) => {
  //   if (value.airlineId === updatedData.airlineId) {
  //     value.airlineName = updatedData.airlineName;

  //   }
  //   return true;
  // });

}}
