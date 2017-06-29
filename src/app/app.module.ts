import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import components
import { AppComponent } from './app.component';

// import modules
import { MyAppCallModule } from './my-app-call/my-app-call.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyAppCallModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
