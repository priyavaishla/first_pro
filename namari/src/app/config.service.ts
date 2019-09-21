import { Injectable } from '@angular/core';
import {configuration} from '../app/consfiguration';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
configurationData = configuration;
  constructor() { }
  getConfigurationData(){
    return this.configurationData;
  }
}
