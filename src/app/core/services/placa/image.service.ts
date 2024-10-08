import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImageData(): { url: string, cropCoords: { x: number, y: number, width: number, height: number } } {
    return {
      url: 'https://via.placeholder.com/300x200?text=Image+4', 
      cropCoords: { x: 50, y: 50, width: 200, height: 100 } 
    };
  }
}

