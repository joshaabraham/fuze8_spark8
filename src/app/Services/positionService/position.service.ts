import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() { }
/*
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
   success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
   error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  

  generateExpandoInstructionBlock(): {
   return navigator.geolocation.getCurrentPosition(success, error, options);
  }
  
*/
}
