#!/bin/bash

echo "🚀 Iniciando despliegue rápido a Vercel..."
echo ""

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado."
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
    echo ""
fi

# Verificar si el usuario está logueado
if ! vercel whoami &> /dev/null; then
    echo "🔐 Iniciando sesión en Vercel..."
    vercel login
    echo ""
fi

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso!"
    echo ""
    
    # Desplegar a Vercel
    echo "🚀 Desplegando a Vercel..."
    vercel --prod
    
    echo ""
    echo "🎉 ¡Despliegue completado!"
    echo "🌐 Tu aplicación estará disponible en unos minutos."
    echo "📱 Revisa tu dashboard de Vercel para más detalles."
else
    echo "❌ Error en el build. Revisa los errores arriba."
    exit 1
fi
