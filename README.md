# 🌐 FrontEnd - Legajos Dashboard (Angular + TailwindCSS)

Este proyecto corresponde al **FrontEnd** de la aplicación FullStack de gestión documental, desarrollada con **Angular** y orientada a una experiencia **mobile-first**.

El sistema permite la navegación entre pantallas de autenticación (simulada) y pantallas internas del sistema, conectando con el flujo principal de gestión de **Casilleros** y **Legajos**.

---

# 🚀 Tecnologías Utilizadas

- Angular (Standalone Components)
- TypeScript
- TailwindCSS (Diseño responsive mobile-first)
- HTML + CSS
- Router Angular (SPA Navigation)

---

# 🎯 Objetivo del Proyecto

El objetivo del FrontEnd es entregar una aplicación web moderna que permita:

- Autenticación simulada (Login/Register/Recovery/Profile)
- Navegación interna del sistema
- Gestión visual de Casilleros y Legajos
- Interfaz optimizada para dispositivos móviles (mobile-first)

---

# 📌 Funcionalidades Implementadas

## 🔐 Módulo de Autenticación (Simulado)
Pantallas obligatorias implementadas:

- Login
- Registro
- Recuperar contraseña
- Perfil de usuario

Características:
- Validaciones básicas en formularios
- Navegación completa entre pantallas
- Diseño centrado tipo app (mobile-first)
- Simulación de usuario autenticado mediante `router state`

Credenciales de prueba:

- Usuario: `admin`
- Password: `1234`

---

## 🧱 Sistema Interno (Pantallas Principales)
Pantalla principal del sistema:

- Gestión de Legajos (Dashboard / LegajoPage)

Características:
- Visualización de casilleros
- Búsqueda de legajos por número
- Selección de legajo y documentos
- UI basada en tarjetas (cards), evitando grids
- Diseño pensado para uso en móvil

---

# 📱 Diseño Responsive (Mobile-First)

El sistema fue construido con TailwindCSS aplicando enfoque mobile-first:

✔ Mobile  
✔ Tablet  
✔ Desktop  

Se prioriza una experiencia tipo aplicación móvil, con componentes simples y limpios.

---

# 📁 Estructura del Proyecto

```text
src/
  app/
    components/
      sidebar/
      legajo-search/
      legajo-card/
      documentos-list/
      anexos-list/
      documento-search/
    core/
      facade.service.ts
      casillero.service.ts
      legajo.service.ts
    layouts/
      main-layout/
      auth-layout/
    models/
      casillero.model.ts
      legajo.model.ts
      documento.model.ts
      anexo.model.ts
    pages/
      auth/
        login/
        register/
        recovery-password/
        profile/
      dashboard/
      about/
      legajo-detail/
    app.routes.ts
    app.component.ts