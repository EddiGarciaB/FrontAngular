import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  getCameraLocations(): { longitude: number, latitude: number, imageUrl: string }[] {
    return [
      { longitude: -80.191790, latitude: 25.761680, imageUrl: 'assets/images/camera-icon.png' },
      { longitude: -80.140560, latitude: 25.790654, imageUrl: 'assets/images/camera-icon.png' },
      { longitude: -80.210490, latitude: 25.775163, imageUrl: 'assets/images/camera-icon.png' },
      { longitude: -80.192650, latitude: 25.773379, imageUrl: 'assets/images/camera-icon.png' },
      { longitude: -80.200000, latitude: 25.770000, imageUrl: 'assets/images/camera-icon.png' },
      { longitude: -80.180000, latitude: 25.780000, imageUrl: 'assets/images/camera-icon.png' }
    ];
  }
}
