# Example Express

Este es un proyecto de ejemplo usando Express.js para Hackatec 2025.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd example-express
```

2. Instala las dependencias:
```bash
npm install
```

## Configuración

El proyecto ya viene configurado con las dependencias necesarias en el `package.json`:
- express
- cors
- nodemon (para desarrollo)

## Uso

### Desarrollo
Para iniciar el servidor en modo desarrollo (con recarga automática):
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Endpoints Disponibles

- `GET /`: Retorna "Hola mundo"

## Estructura del Proyecto

```
example-express/
├── index.js          # Archivo principal del servidor
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Este archivo
```

## Tecnologías Utilizadas

- Express.js
- CORS
- Nodemon (para desarrollo)
