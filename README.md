# N8N Chat Agent Interface

Interfaz de chat web moderna para agentes de IA creados con n8n y Claude.

## 🚀 Características

- 💬 Interfaz de chat moderna y responsiva
- 🔄 Gestión automática de sesiones para mantener contexto
- ⚡ Integración directa con webhooks de n8n
- 🎨 Diseño elegante con Tailwind CSS
- 📱 Totalmente responsivo (móvil y desktop)
- 🛡️ Manejo robusto de errores
- ⏱️ Indicadores visuales de carga y estado

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos modernos
- **n8n** - Backend de automatización
- **Claude** - Modelo de IA

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://tu-n8n-instance.com/webhook/tu-webhook-id
```

### Instalación Local

```bash
npm install
npm run dev
```

### Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frescales/n8n-chat-agent)

1. Haz clic en "Deploy with Vercel"
2. Configura la variable de entorno `NEXT_PUBLIC_N8N_WEBHOOK_URL`
3. ¡Deploy automático!

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js 14
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página home
│   └── globals.css      # Estilos globales
├── components/          # Componentes React
│   └── ChatInterface.tsx # Interfaz principal del chat
└── types/               # Definiciones de TypeScript
    └── index.ts         # Tipos de datos
```

## 🎯 Funcionalidades

### Gestión de Sesiones
Cada usuario obtiene un ID de sesión único para mantener el contexto de la conversación.

### Manejo de Errores
- Validación de configuración
- Manejo de errores de red
- Feedback visual al usuario

### Indicadores Visuales
- Estados de carga
- Timestamps de mensajes
- Iconos diferenciados para usuario e IA

## 🎨 Personalización

### Cambiar el Nombre del Asistente
Edita `src/components/ChatInterface.tsx` líneas 87-89:

```tsx
<h1 className="text-xl font-bold text-gray-800">Tu Nombre Aquí</h1>
<p className="text-sm text-gray-600">Tu descripción aquí</p>
```

## 🔧 Solución de Problemas

Si encuentras algún problema, verifica:

- ✅ La URL del webhook de n8n es correcta
- ✅ El agente de n8n está activo
- ✅ Las variables de entorno están configuradas
- ✅ No hay bloqueos de CORS

## 📝 Licencia

MIT License - Libre para uso personal y comercial

---

**Desarrollado con ❤️ para la comunidad de n8n**