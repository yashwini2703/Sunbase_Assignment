import { mergeApplicationConfig, ApplicationConfig, NgModule } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { FormsModule } from '@angular/forms';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
    
  ]
  
};


export const config = mergeApplicationConfig(appConfig, serverConfig);
