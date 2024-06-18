# Proyecto FALP

El objetivo de este desafío es crear una API que permita gestionar usuarios con datos demográficos. La API debe permitir la creación de usuarios y la búsqueda de usuarios por cualquiera de los datos demográficos proporcionados. Además, deberás configurar un entorno Docker para levantar tanto la aplicación como la base de datos y escribir pruebas unitarias y de integración utilizando Jest y Supertest.

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el comando ```npm install```
4. Levantar las bases de datos con el comando
   ```
   docker compose up -d
   ```
5. Ejecutar ```npm run dev```