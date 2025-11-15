# 📄 README – Plantilla de Landing Dinámica (Next.js + Tailwind)

Esta es una plantilla lista para crear landings profesionales para cualquier negocio: pintores, fotógrafos, entrenadores, fontaneros, artistas…
Toda la personalización se hace desde **un único archivo** (`config.ts`).

Diseñada para:

* velocidad
* cero dependencias raras
* reutilización
* SEO básico
* despliegue sencillo (GitHub Pages o dominio propio)

---

# 🚀 Cómo crear una nueva landing

1. **Clona este repositorio**

   ```bash
   git clone https://github.com/Walrus92/landing-dinamica.git mi-nueva-landing
   ```

2. **Entra en la carpeta**

   ```bash
   cd mi-nueva-landing
   ```

3. **Instala dependencias**

   ```bash
   npm install
   ```

4. **Edita el archivo principal de configuración**

   ```
   config.ts
   ```

   Aquí cambias:

   * Nombre del negocio
   * Lema, descripción, email, teléfono
   * Colores principales
   * Hero (imagen, textos, CTA)
   * Secciones dinámicas (servicios, galería, contacto…)
   * WhatsApp (número + mensaje)
   * Endpoint de Formspree

5. **Coloca tus imágenes**

   * En la carpeta `public/`
   * Actualiza las rutas en `config.ts`

6. **Arranca en local**

   ```bash
   npm run dev
   ```

   Abre:
   **[http://localhost:3000](http://localhost:3000)**

---

# 📦 Estructura del proyecto (simple)

```
app/
components/
public/
config.ts          ← aquí cambias todo
next.config.ts
tailwind.config.ts
package.json
```

---

# 🌐 Deploy en GitHub Pages (gratis)

1. Ejecuta build estático:

   ```bash
   npm run build
   ```

   Esto crea la carpeta `out/`.

2. Sube la carpeta `out/` a GitHub Pages:

   * Opción A: subir manualmente a una branch `gh-pages`
   * Opción B: usar GitHub Actions (recomendado)

3. En GitHub → *Settings → Pages*

   * Selecciona la branch `gh-pages` o activa Actions
   * Espera unos segundos

4. Tu landing estará disponible en:

   ```
   https://tuusuario.github.io/mi-nueva-landing
   ```

*(Si usas Project Pages, actualiza `basePath` en `next.config.ts`.)*

---

# 🌍 Usar tu propio dominio (Namecheap, Ionos, etc.)

1. En GitHub → *Settings → Pages*

   * Añade tu dominio (`midominio.com`)
   * GitHub creará o actualizará archivo `CNAME`

2. En Namecheap/Ionos:

   * A records (apex):

     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   * CNAME para `www`:

     ```
     tuusuario.github.io
     ```

3. Activa *Enforce HTTPS*
   Listo.

---

# 🔧 Personalización avanzada

Todo se controla desde `config.ts`:

### Ejemplos:

* Cambiar el color principal:

  ```ts
  colors: { primary: "#0EA5E9" }
  ```

* Cambiar secciones:

  ```ts
  sections: [
    {
      id: "servicios",
      type: "list",
      items: [...]
    },
    {
      id: "galeria",
      type: "gallery",
      images: [...]
    }
  ]
  ```

* Cambiar el hero:

  ```ts
  hero: {
    image: "hero.jpg",
    title: "Título"
  }
  ```

---

# 💡 Consejos rápidos

* Usa imágenes comprimidas (TinyPNG).
* Asegúrate de cambiar `metadata` en `app/layout.tsx` para SEO.
* Si la página va a un dominio personalizado, deja `basePath` vacío.
* Si usas GitHub Pages bajo `/repo`, ajusta `next.config.ts`.

---
