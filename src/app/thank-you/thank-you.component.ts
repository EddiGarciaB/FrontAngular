import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [
    CommonModule,   
    NzCardModule,   
    NzButtonModule
  ],
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.sass']
})
export class ThankYouComponent implements OnInit, AfterViewInit {
  participationCode: string = '';
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Recuperar el código de participación de localStorage
    this.participationCode = localStorage.getItem('participationCode') || 'Código no disponible';

    // Generar el código QR
    this.generateQRCode();
  }

  ngAfterViewInit(): void {
    this.scrollToTop();
  }

  // Genera el código QR manualmente usando Canvas
  generateQRCode(): void {
    const size = 150;
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const code = this.participationCode;
    
    // Tamaño del canvas
    canvas.width = size;
    canvas.height = size;

    // Estilo básico para generar un QR "simulado"
    const blockSize = size / 10;
    ctx.fillStyle = '#000';

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        // Crear un patrón aleatorio (solo como demostración)
        if (Math.random() > 0.5) {
          ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
        }
      }
    }

    // Mostrar el código de participación en texto bajo el código QR
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(code, 10, size - 10);
  }

  // Desplazar a la parte superior cuando se carga el componente
  scrollToTop(): void {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
