import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatBadgeModule, MatFormFieldModule, MatDialogModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AreaComponent,


  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    AreaComponent,


  ]
})
export class SharedModule { }
