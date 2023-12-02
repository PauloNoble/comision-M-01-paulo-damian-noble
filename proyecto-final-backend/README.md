# Servidor Backend para proyecto final

## Tecnologias utilizadas:

- NodeJs
- Express
- MongoDB
- Mongoose

### Dependencias

- Bcrypt
- Cors
- Dotenv
- Express
- Express-validator
- Helmet
- Jsonwebtoken
- Mongoose
- Morgan
- Nodemon

---

## Descripción:

-El servidor en la carpeta src tiene las siguientes carpetas: - Controllers: - Con tres archivos de controladores comment.controllers.js, post.controllers.js y user.controllers.js - Middlewares: - Con dos archivos de middlewares apply-validations.js y validate-token.js - Models: - Con tres modelos moongose: User.js, Post.js y Comment.js. - En la misma carpeta esta ubicada la carpeta validations: - Con cuatro arhchivgos validaciones auth-validation, user-validations, post-validations y comment-validations - Routes: - Con treas archivos de ruta: auth.routes.js, comment.routes.js y post.routes - Settings: - Con dos archivos config.js y database.js - Utils: - jwt.js

- En la carpeta raiz estan los archivos .env.example, .gitignore, index.js, package.lock.json, package.json y este README.md

### Modo de uso

- Para instalar las dependencias y la carpeta node_modules:
  En una terminal ejecutar npm install o npm i

- Para conectar la base de datos y levantar el servidor primero hay que crear un archivo .env y en el copiar el modelo de variables de entorno que esta en el archivo env.example y configurar esas variables de entorno. Por último en la tarminal ejecutar npm run dev
