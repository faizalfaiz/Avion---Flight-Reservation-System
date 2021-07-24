import { RouteDialogBoxComponent } from './../routedialogbox/routedialogbox.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { FlightRouteService } from '../../flight-route.service';
import { FlightRoute } from '../../FlightRoute';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/schedule';
import { ScheduleService } from 'src/app/schedule.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import 'jspdf-autotable';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-adminroutepage',
  templateUrl: './adminroutepage.component.html',
  styleUrls: ['./adminroutepage.component.css']
})

export class AdminroutepageComponent implements OnInit {

  displayedColumns: string[] = ['routeId', 'source', 'destination', 'scheduleId', 'action'];

  flightRoute = new FlightRoute();
  flightRoutes: FlightRoute[];
  schedule: Schedule[];
    scheduleId:String;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  matColumnDef: any;
  data: any;


  constructor(public dialog: MatDialog,
              private flightRouteService: FlightRouteService, private scheduleService:ScheduleService, private router: Router
  ) { }

  ngOnInit() {
   this.flightRouteService.getFlightRoutes().subscribe((r) => (this.flightRoutes = r));
   this.table.renderRows();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(RouteDialogBoxComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addFlightRoute(result.data);
      } else if (result.event === 'Update') {
        this.updateFlightRoute(result.data);
      } else if (result.event === 'Delete') {
        this.deleteFlightRoute(result.data);
      }
    });

  }

  addFlightRoute(dataToAdd) {

    console.log(JSON.stringify(dataToAdd));
    this.flightRouteService.addFlightRoute(dataToAdd).subscribe();

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['adminroute']));
  }

  updateFlightRoute(updatedData) {
    this.flightRouteService.updateFlightRoute(updatedData).subscribe();

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['adminroute']));
  }

  deleteFlightRoute(dataToDelete) {
   this.flightRouteService.deleteFlightRoute(dataToDelete.routeId).subscribe();
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['adminroute']));
  }

  // createPdf() {
  //   var doc = new jsPDF();

  //   doc.setFontSize(18);
  //   doc.text('My PDF Table', 11, 8);
  //   doc.setFontSize(11);
  //   doc.setTextColor(100);


  //   (doc as any).autoTable({

  //     body: this.flightRouteService.getFlightRoutes().subscribe((r) => (this.flightRoutes = r)),
  //     theme: 'plain',
  //     didDrawCell: data => {
  //       console.log(data.column.index)
  //     }
  //   })

  //   // Open PDF document in new tab
  //   doc.output('dataurlnewwindow')

  //   // Download PDF document
  //   doc.save('table.pdf');
  // }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {

      case 'download':
      pdfMake.createPdf(documentDefinition).download();
      break;
      default: pdfMake.createPdf(documentDefinition).open();
      break;
    }
 }
 getDocumentDefinition() {
    return {
      content: [
      {
        text: 'flightRoute',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
      columns: [
        [{
          text: 'RouteId : ' + this.flightRoute.routeId
        },
        {
          text: 'Source : ' + this.flightRoute.source
        },
        {
          text: 'Destination : ' + this.flightRoute.destination
        },
        {
          text: 'ScheduleId : ' + this.flightRoute.scheduleId
        }]
       ]
      }],
      styles: {
        name: {
          fontSize: 16,
          bold: true
      }
    }
  };
 }
 onSubmit() {

  this.flightRouteService.getFlightRoutes().subscribe((r) => (this.flightRoutes = r))
      this.flightRoute = {
        routeId: this.flightRoute.routeId,
        source: this.flightRoute.source,
        destination: this.flightRoute.destination,
        scheduleId: this.flightRoute.scheduleId
      };
      this.generatePdf("download");
    }
 }





