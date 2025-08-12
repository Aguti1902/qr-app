# 🚀 Guía de Despliegue en Vercel

## 📋 Prerrequisitos

1. **Cuenta en Vercel**: [vercel.com](https://vercel.com)
2. **Cuenta en GitHub**: [github.com](https://github.com)
3. **Node.js**: Versión 18 o superior
4. **Git**: Configurado en tu máquina

## 🔧 Pasos para el Despliegue

### **Opción 1: Despliegue Automático (Recomendado)**

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: QR Editor project"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/qr-editor.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio `qr-editor`
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configuración automática:**
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)
   - **Install Command**: `npm install` (por defecto)

4. **Variables de entorno (opcional):**
   ```
   NEXT_PUBLIC_APP_NAME=QR Editor
   NEXT_PUBLIC_APP_VERSION=1.0.0
   ```

5. **Haz clic en "Deploy"**

### **Opción 2: Despliegue Manual con Vercel CLI**

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

## 🌐 Configuración del Dominio

### **Dominio Personalizado:**
1. Ve a tu proyecto en Vercel
2. **Settings** → **Domains**
3. Agrega tu dominio personalizado
4. Configura los registros DNS según las instrucciones

### **Subdominio de Vercel:**
- Tu proyecto estará disponible en: `https://qr-editor.vercel.app`
- Puedes personalizarlo en **Settings** → **Domains**

## 🔄 Despliegue Automático

### **Configurar GitHub Actions:**

1. **Secrets necesarios en GitHub:**
   - `VERCEL_TOKEN`: Token de Vercel
   - `ORG_ID`: ID de tu organización en Vercel
   - `PROJECT_ID`: ID de tu proyecto en Vercel

2. **Obtener estos valores:**
   ```bash
   # Vercel Token
   vercel whoami
   
   # Project ID
   vercel project ls
   ```

3. **Configurar en GitHub:**
   - Ve a tu repositorio en GitHub
   - **Settings** → **Secrets and variables** → **Actions**
   - Agrega los secrets mencionados arriba

## 📱 Funcionalidades del Despliegue

### **✅ Lo que funciona automáticamente:**
- **Build automático** en cada push a main
- **Preview deployments** en pull requests
- **Rollback** a versiones anteriores
- **Analytics** de rendimiento
- **Edge Functions** para API routes
- **CDN global** para archivos estáticos

### **🚀 Optimizaciones automáticas:**
- **Image optimization** con Next.js
- **Code splitting** automático
- **Lazy loading** de componentes
- **Service Worker** para PWA
- **HTTP/2** y **HTTP/3**

## 🔍 Monitoreo y Debugging

### **Vercel Dashboard:**
- **Analytics**: Rendimiento y métricas
- **Functions**: Logs de API routes
- **Deployments**: Historial de despliegues
- **Settings**: Configuración del proyecto

### **Logs en tiempo real:**
```bash
vercel logs
vercel logs --follow
```

## 🛠️ Comandos Útiles

```bash
# Ver estado del proyecto
vercel ls

# Ver logs
vercel logs

# Rollback a versión anterior
vercel rollback

# Configurar variables de entorno
vercel env add

# Ver variables de entorno
vercel env ls

# Eliminar proyecto
vercel remove
```

## 🚨 Solución de Problemas

### **Error de Build:**
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel Dashboard
3. Verifica las dependencias en `package.json`

### **Error de Dependencias:**
1. Limpia `node_modules` y `package-lock.json`
2. Ejecuta `npm install` nuevamente
3. Verifica que las versiones sean compatibles

### **Error de Variables de Entorno:**
1. Verifica que estén configuradas en Vercel
2. Asegúrate de que empiecen con `NEXT_PUBLIC_` si son del frontend
3. Reinicia el despliegue después de cambios

## 📞 Soporte

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Issues**: Para problemas del código
- **Discord**: Comunidad de Vercel

---

**¡Tu QR Editor estará disponible en Vercel en minutos! 🎉**
