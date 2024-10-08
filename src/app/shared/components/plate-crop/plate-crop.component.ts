import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from '../../../core/services/placa/image.service';

@Component({
  selector: 'app-plate-crop',
  standalone: true,
  imports: [],
  templateUrl: './plate-crop.component.html',
  styleUrls: ['./plate-crop.component.sass']
})
export class PlateCropComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  imageData: { url: string, cropCoords: { x: number, y: number, width: number, height: number } } | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageData = this.imageService.getImageData();
    this.loadImage();
  }

  loadImage(): void {
    if (this.imageData) {
      const img = new Image();
      img.src = this.imageData.url;
      img.onload = () => {
        this.drawImage(img);
      };
    }
  }

  drawImage(img: HTMLImageElement): void {
    if (this.imageData) {
      const canvasEl = this.canvas.nativeElement;
      const ctx = canvasEl.getContext('2d');
      if (ctx) {
        canvasEl.width = this.imageData.cropCoords.width;
        canvasEl.height = this.imageData.cropCoords.height;
        ctx.drawImage(
          img,
          this.imageData.cropCoords.x,
          this.imageData.cropCoords.y,
          this.imageData.cropCoords.width,
          this.imageData.cropCoords.height,
          0,
          0,
          this.imageData.cropCoords.width,
          this.imageData.cropCoords.height
        );
      }
    }
  }
}
