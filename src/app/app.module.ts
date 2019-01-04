import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { AlertsModule } from "angular-alert-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AlertsModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
