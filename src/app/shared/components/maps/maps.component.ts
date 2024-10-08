import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Icon } from 'ol/style';
import { CameraService } from '../../../core/services/maps/camera.service';
import { Extent, boundingExtent } from 'ol/extent';

@Component({
  selector: 'app-maps',
  standalone: true,
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass'],
  providers: [CameraService]
})
export class MapsComponent implements OnInit, AfterViewInit {
  @Input() height: string = '500px';
  @Input() width: string = '100%';

  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef;

  private map!: Map;

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => this.initMap(), 0); 
  }

  private initMap(): void {
    if (this.mapElement) {
      const nativeElement = this.mapElement.nativeElement;
      nativeElement.style.height = this.height;
      nativeElement.style.width = this.width;

      const cameraLocations = this.cameraService.getCameraLocations();

      const cameraCoordinates = cameraLocations.map(location => {
        return new Feature({
          geometry: new Point(fromLonLat([location.longitude, location.latitude])),
          imageUrl: location.imageUrl
        });
      });

      cameraCoordinates.forEach(camera => {
        const cameraStyle = new Style({
          image: new Icon({
            src: camera.get('imageUrl'),
            scale: 0.1
          })
        });
        camera.setStyle(cameraStyle);
      });

      const extent: Extent = boundingExtent(cameraCoordinates.map(camera => camera.getGeometry()!.getCoordinates()));

      const cameraLayer = new VectorLayer({
        source: new VectorSource({
          features: cameraCoordinates
        })
      });

      this.map = new Map({
        target: nativeElement,
        layers: [
          new TileLayer({
            source: new OSM({
              attributions: []
            })
          }),
          cameraLayer
        ],
        view: new View({
          center: [0, 0], 
          zoom: 2 
        })
      });

      this.map.getView().fit(extent, { size: this.map.getSize(), maxZoom: 18 });

      this.map.updateSize(); 
    } 
  }
}
