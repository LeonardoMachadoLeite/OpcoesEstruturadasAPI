import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { SimuladorComponent } from './simulador/simulador.component';
import { TabelaOpcoesComponent } from './tabela-opcoes/tabela-opcoes.component';
import { HttpClientModule } from '@angular/common/http';
import { OpcoesService } from './services/opcoes.service';
import { OperacaoControllerComponent } from './operacao/operacao-controller/operacao-controller.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    SimuladorComponent,
    TabelaOpcoesComponent,
    OperacaoControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [OpcoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
