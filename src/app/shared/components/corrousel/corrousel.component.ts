import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '../../antd-module/ng-zorro-components.module';
import { FormsModule } from "@angular/forms";
import { Image } from './interface/Image.interface';

@Component({
  selector: 'app-corrousel',
  standalone: true,
  imports: [CommonModule, NgZorroComponentsModule, FormsModule],
  templateUrl: './corrousel.component.html',
  styleUrls: ['./corrousel.component.sass']
})
export class CorrouselComponent implements OnInit {

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef = new ElementRef("videoPlayer");

  // Array de URLs de imágenes
  @Input({ required: true })
  images: Image[] = [];
  // Parámetros iniciales del carrusel
  visibleImagesLs: Image[] = [];
  activeImage: Image = new Image('', ''); // URL de la imagen activa
  currentIndex = 0; // Índice de la imagen activa
  maxVisibleImages = 3; // Máximo número de imágenes visibles en el carrusel
  disablePrevNav = true; // Desactivar navegación previa al principio
  disableNextNav = false; // Navegación siguiente activa al inicio
  currentGroupIndex = 0; // Índice actual del grupo de imágenes inferior del carrusel
  endImage = false;

  ngOnInit(): void {
    // Agregar imágenes de muestra
    this.images = [
      { source: 'https://via.placeholder.com/300x200?text=Image+1', mimeType: "png" },
      { source: 'https://via.placeholder.com/300x200?text=Image+2', mimeType: "png" },
      { source: 'https://via.placeholder.com/300x200?text=Image+3', mimeType: "png" },
    ];
    this.getVisibleImages();
    if (this.images.length > 0) {
      this.activeImage = this.images[0];
    }
  }

  toggleVideo(event?: any) {
    this.videoplayer.nativeElement.play();
  }

  trackByFn(index: number, item: any) {
    return item.id; // o cualquier propiedad única de tus objetos
  }

  setActiveImage(image: Image, index: number): void {
    this.activeImage = image;
    this.currentIndex = index;
  }

  obtenerMimeType(extension: string): string {
    const formatosImagen = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Formatos de imagen
    const formatosVideo = ['mp4', 'avi', 'mov', 'mkv', 'wmv']; // Formatos de video
    const formatosPDF = ['pdf']; // Formato PDF
  
    const formato = extension.toLowerCase().substring(1); // Quitar el punto y convertir a minúsculas
  
    if (formatosImagen.includes(formato)) {
      return 'image/' + formato;
    } else if (formatosVideo.includes(formato)) {
      return 'video/' + formato;
    } else if (formatosPDF.includes(formato)) {
      return 'application/pdf';
    } else {
      return 'application/octet-stream'; // Tipo MIME predeterminado si la extensión no está reconocida
    }
  }

  prevSlide(): void {
    if (this.disablePrevNav) {
      return;
    }
    if (this.currentIndex === 0) {
      this.setActiveImageInGroup(this.currentGroupIndex - 1);
    } else if (this.currentIndex > 0) {
      this.currentIndex--;
      this.activeImage = this.visibleImagesLs[this.currentIndex];
    }
  }

  nextSlide(): void {
    if (this.disableNextNav) {
      return;
    }
    if (this.currentIndex === 2) {
      this.setActiveImageInGroup(this.currentGroupIndex + 1);
    } else if (this.currentIndex < this.visibleImagesLs.length - 1) {
      this.currentIndex++;
      this.activeImage = this.visibleImagesLs[this.currentIndex];
      this.disableNextNav = this.currentIndex === this.images.length - 1;
      this.disablePrevNav = false;
    }
  }

  getVisibleImages(): void {
    const startIndex = this.currentIndex;
    const endIndex = Math.min(startIndex + this.maxVisibleImages, this.images.length);
    this.visibleImagesLs = [...this.images];
    this.visibleImagesLs = this.visibleImagesLs.slice(startIndex, endIndex);
    this.currentIndex = 0;
  }

  getDotGroups(): number[] {
    const totalGroups = Math.ceil(this.images.length / this.maxVisibleImages);
    return Array(totalGroups).fill(0).map((x, i) => i);
  }

  setActiveImageInGroup(groupIndex: number): void {
    this.currentGroupIndex = groupIndex;
    this.currentIndex = groupIndex * this.maxVisibleImages;
    this.getVisibleImages();
    this.activeImage = this.visibleImagesLs[0];
    this.disablePrevNav = groupIndex === 0;
    this.disableNextNav = false;
  }

  calculatePage(): number {
    const image = this.visibleImagesLs[this.currentIndex];
    const indexImage = this.images.indexOf(image);
    if (indexImage === this.images.length - 1) {
      this.disableNextNav = true;
    }
    if (indexImage === 0) {
      this.disablePrevNav = true;
    }
    return Math.floor(indexImage / this.maxVisibleImages);
  }
}
