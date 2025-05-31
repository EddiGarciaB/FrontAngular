# Portafolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

# 🧰 Instalación
Para instalar este componente front de nuevo dei, encontraras el instructivo a continuación.

## Requisitos Previos
Asegúrate de tener instalado el siguiente software en tu sistema:

- git
- node 20.13.1^
- npm 10.5.2^
- Angular CLI 17.0.9^

### Paso 1: clonar el repositorio.
- Descargamos este repositorio: [procesamiento_deteccion_front](https://git.quipux.com/procesamientodetecciones/nuevo-dei/procesamiento_deteccion_front)

### Paso 2: Instalamos las dependencias del proyecto.
Luego de descar el proyecto y posicionarnos dentro del mismo, ejecutamos los siguientes comandos en una consola:  
```bash
npm install
```
Con el paso anterior ya tendremos instaladas las dependencias.

### Paso 3: Iniciar el servidor de desarrollo.
Para desplegar podemos encontrar los comandos en el archivo **package.json** en la sección de **scripts**, para desarrollo solemos usar:

```bash
npm run start:dev
```
El proyecto se levanta en la url: `http://localhost:4200/`


## Estructura del proyecto

Dentro de src se encontrará la estructura del proyecto, la cual costa de:

```
src/
│
├── core/
│   ├── services/
│   └── guards/
│
├── feature/
│   ├── login/
│   ├── dashboard/
│   │   ├── aprobacion-firma/
│   │   ├── gestionar-deteccion/
│   │   ├── dashboard-routing.module.ts
│   │   └── dashboard.component.ts
│
├── shared/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── subheader/
│   │   ├── carrousel/
│   │   └── sidebar/
│   └──antd-module/
|        └── ng-zorro-components.module.ts        
│
├── app.module.ts
└── app-routing.module.ts
```
### Core
La carpeta core contiene los servicios y los guardas (guards) que se utilizan en todo el proyecto.

* Servicios (services): Aquí se definen los servicios que encapsulan la lógica de negocio y pueden ser inyectados en cualquier componente o módulo del proyecto.
* Guards (guards): Los guards se utilizan para proteger rutas y controlar el acceso a ciertas partes de la aplicación basado en condiciones específicas.

### Feature
La carpeta feature contiene módulos específicos de características, en este caso login y dashboard.

* Dashboard Module
El módulo dashboard contiene varios componentes y define las rutas específicas para el módulo.

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AprobacionFirmaComponent } from './aprobacion-firma/aprobacion-firma.component';
import { GestionarDeteccionComponent } from './gestionar-deteccion/gestionar-deteccion.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'revision-deteccion', component: GestionarDeteccionComponent },
      { path: 'aprobacion-deteccion', component: AprobacionFirmaComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

```

En este módulo, las rutas están configuradas para cargar diferentes componentes como GestionarDeteccionComponent y AprobacionFirmaComponent bajo el componente principal DashboardComponent.

#### Cómo generar un componente dentro de este módulo
Para generar un nuevo componente dentro del módulo dashboard, usa el siguiente comando:

```bash
ng generate component feature/dashboard/nombre-del-componente
```

### Shared
La carpeta shared contiene componentes reutilizables y módulos compartidos.

Components
* Header (header): Componente para el encabezado de la aplicación.
* Footer (footer): Componente para el pie de página de la aplicación.
* Subheader (subheader): Componente para el subencabezado.
* Carrousel (carrousel): Componente para mostrar un carrusel de elementos.
* Sidebar (sidebar): Componente para la barra lateral de la aplicación.



#### NgZorroComponentsModule
Este módulo importa y exporta varios componentes de la librería ng-zorro-antd, los cuales se pueden utilizar en diferentes partes de la aplicación, es importante importarlo si se requiere usar en un determinado componente.


#### Consideraciones para Angular 17
Angular 17 trae varias mejoras y cambios que se deben tener en cuenta:

Standalone Components: Angular 17 introduce componentes autónomos que no requieren estar declarados en un módulo. Esto simplifica la creación y uso de componentes.
Mejoras en el rendimiento: Se han realizado optimizaciones significativas para mejorar el rendimiento de las aplicaciones.
Actualización de dependencias: Asegúrate de actualizar todas las dependencias y módulos a versiones compatibles con Angular 17.
Compatibilidad con TypeScript: Angular 17 requiere TypeScript 4.9 o superior. Verifica que tu proyecto esté utilizando la versión correcta de TypeScript.
Deprecaciones: Revisa las funcionalidades deprecadas en Angular 17 y actualiza tu código según sea necesario para evitar problemas futuros.


### Cómo generar la carpeta dist
Para generar la carpeta dist, que contiene los archivos de construcción listos para producción, sigue estos pasos:


```bash
ng build --prod
```
Esto generará una carpeta dist en la raíz del proyecto que contiene los archivos listos para ser desplegados en un servidor web.
