# Lista de Tareas (tasks-tsx)

Este proyecto es una aplicación simple de gestión de tareas, construida con **React**, **TypeScript**, y **Tailwind CSS**. Permite a los usuarios agregar, marcar como completadas y eliminar tareas de una lista.

## Características

- Agregar nuevas tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Interfaz estilizada con **Tailwind CSS**.
- No utiliza almacenamiento persistente (solo en memoria durante la sesión).

## Instalación

1. Clona este repositorio:
  ```bash
  git clone https://github.com/tuusuario/tasks-tsx.git
  ```
2. Accede a la carpeta del proyecto:
  ```bash
  cd tasks-tsx
  ```

3. Instala las dependencias:
  ```bash
  npm install
  ```


## Scripts

npm run dev: Inicia el servidor de desarrollo (con Vite).
  ```bash
  npm run dev
  ```

npm run build: Compila el proyecto con TypeScript y Vite.
  ```bash
  npm run build
  ```

npm run lint: Ejecuta ESLint para revisar el código.
  ```bash
  npm run lint
  ```

npm run preview: Previsualiza el proyecto construido.
  ```bash
  npm run preview
  ```

## Estructura del Proyecto

* src/components: Componentes reutilizables, como el Header, Container, Button, etc.

* src/pages: Página principal de las tareas (TasksWhitoutStorage), que maneja la lógica de agregar, completar y eliminar tareas.

* src/App.tsx: Componente principal que incluye todos los componentes necesarios para la aplicación.

## Dependencias

* React: Biblioteca para la construcción de interfaces de usuario.

* Tailwind CSS: Framework de CSS para un diseño rápido y responsive.

* UUID: Para generar identificadores únicos para las tareas.

* ESLint: Herramienta de linting para mantener un código limpio y consistente.

## Contribución

Realiza un fork del repositorio.

Crea una rama nueva para tu funcionalidad (git checkout -b feature/nueva-tarea).

Realiza tus cambios y haz commit (git commit -m 'Agregada nueva tarea').

Haz push a tu rama (git push origin feature/nueva-tarea).

Crea un Pull Request.