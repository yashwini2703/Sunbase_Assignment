import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const bootstrap = () => bootstrapApplication(AppComponent, config);

// app.module.ts


@NgModule({
  imports: [
    // other imports
    FormsModule,
  ],
  // declarations, bootstrap, etc.
})
export class AppModule { }

export default bootstrap;
