import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardTilesComponent } from './dashboard/dashboard-tiles/dashboard-tiles.component';
import { UserRegistrationComponent } from './dashboard/user-registration/user-registration.component';
import { RecentOrdersComponent } from './dashboard/recent-orders/recent-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DonutChartComponent } from './dashboard/chart/donut-chart/donut-chart.component';
import { ColumnChartComponent } from './dashboard/chart/column-chart/column-chart.component';
import { LineChartComponent } from './dashboard/chart/line-chart/line-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardTilesComponent,
    UserRegistrationComponent,
    RecentOrdersComponent,
    ProgressBarComponent,
    DonutChartComponent,
    ColumnChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
