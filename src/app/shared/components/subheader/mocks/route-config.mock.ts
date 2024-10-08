import { RouteConfig } from "../interfaces/route-config.interface";

export const MOCK_ROUTE_CONFIG: RouteConfig[] = [
  {
    path: '/dashboard/revision-deteccion',
    title: 'SUBHEADER.REVISION_DETECCIONES.TITLE',
    descriptions: 'SUBHEADER.REVISION_DETECCIONES.DESCRIPTIONS',
    showSubheader: true
  },
  {
    path: '/dashboard/aprobacion-deteccion',
    title: 'SUBHEADER.APROBACION_DETECCIONES.TITLE',
    descriptions: 'SUBHEADER.APROBACION_DETECCIONES.DESCRIPTIONS',
    showSubheader: true
  },
  {
    path: '/dashboard/admon-camaras',
    title: 'SUBHEADER.ADMON_CAMARAS.TITLE',
    descriptions: 'SUBHEADER.ADMON_CAMARAS.DESCRIPTIONS',
    showSubheader: true
  },
  {
    path: '/dashboard',
    showSubheader: false
  }
];
