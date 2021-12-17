import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';

// Service
import { ApiService, LanguageService, ShareService } from '@service';

// Pipe && Component
// import { xxx } from '@comModule';
import { PipeModule } from '@pipeModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, LanguageService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
