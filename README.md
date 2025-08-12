# QR Editor - Advanced QR Code Generator and Editor

Una aplicación web moderna para generar, editar y personalizar códigos QR, similar a [qrfy.com](https://qrfy.com/).

## 🚀 Características

- **Generador de QR**: Crea códigos QR para URLs, texto, contactos, WiFi y más
- **Editor Avanzado**: Personaliza colores, estilos, logos y efectos
- **Múltiples Formatos**: Exporta en PNG, SVG, PDF y más
- **Templates**: Plantillas predefinidas para diferentes usos
- **Historial**: Guarda y gestiona tus códigos QR
- **API**: Endpoints para integración con otras aplicaciones
- **Responsive**: Funciona en desktop, tablet y móvil

## 🏗️ Estructura del Proyecto

```
qr-editor/
├── src/                    # Código fuente frontend
│   ├── components/         # Componentes reutilizables
│   ├── pages/             # Páginas de la aplicación
│   ├── styles/            # Estilos y CSS
│   ├── utils/             # Utilidades y helpers
│   ├── hooks/             # Custom React hooks
│   ├── context/           # Context API
│   ├── types/             # TypeScript types
│   ├── services/          # Servicios y API calls
│   ├── assets/            # Imágenes, iconos, fuentes
│   ├── layouts/           # Layouts de la aplicación
│   └── config/            # Configuración
├── backend/               # Servidor backend
│   ├── controllers/       # Controladores de la API
│   ├── middleware/        # Middleware personalizado
│   ├── models/            # Modelos de datos
│   ├── routes/            # Rutas de la API
│   ├── config/            # Configuración del servidor
│   ├── utils/             # Utilidades del backend
│   ├── services/          # Lógica de negocio
│   └── tests/             # Tests del backend
├── public/                # Archivos públicos
├── tests/                 # Tests del frontend
├── docs/                  # Documentación
├── scripts/               # Scripts de automatización
├── deployment/            # Configuración de despliegue
└── .github/               # GitHub Actions
```

## 🛠️ Tecnologías

### Frontend
- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **QR Code Styling** - Generación de QR

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **Redis** - Cache y sesiones
- **JWT** - Autenticación

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd qr-editor
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en desarrollo**
   ```bash
   # Frontend
   npm run dev
   
   # Backend (en otra terminal)
   npm run backend:dev
   ```

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el frontend en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run backend:dev` - Ejecuta el backend en modo desarrollo
- `npm run test` - Ejecuta los tests
- `npm run lint` - Ejecuta el linter

## 🌐 Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=QR Editor

# Backend
PORT=3001
MONGODB_URI=mongodb://localhost:27017/qr-editor
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
NODE_ENV=development
```

## 📱 Características Principales

### Generación de QR
- URLs y enlaces
- Texto plano
- Información de contacto (vCard)
- Configuración WiFi
- Números de teléfono
- Mensajes SMS
- Ubicaciones geográficas

### Personalización
- Colores personalizables
- Estilos y efectos
- Logos y marcas de agua
- Bordes y esquinas
- Gradientes y texturas
- Múltiples formatos de exportación

### Gestión
- Historial de códigos
- Organización por carpetas
- Búsqueda y filtros
- Compartir códigos
- Estadísticas de uso

## 🚀 Despliegue

### Docker
```bash
npm run docker:build
npm run docker:run
```

### Vercel (Frontend)
```bash
npm run build
vercel --prod
```

### Heroku (Backend)
```bash
git push heroku main
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Soporte

- **Email**: support@qreditor.com
- **Documentación**: [docs.qreditor.com](https://docs.qreditor.com)
- **Issues**: [GitHub Issues](https://github.com/username/qr-editor/issues)

## 🙏 Agradecimientos

- Inspirado en [qrfy.com](https://qrfy.com/)
- Comunidad de desarrolladores de código abierto
- Contribuidores y usuarios del proyecto

---

**Desarrollado con ❤️ para la comunidad de desarrolladores**
