# Proyecto TP API

Este proyecto es una API construida con Node.js, Express y Sequelize, diseñada para gestionar usuarios y datos asociados en una base de datos MySQL. El entorno se ejecuta dentro de contenedores Docker para facilitar la configuración y despliegue.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- Git (para clonar el repositorio)

## Configuración e Instalación con Docker

1. Clona el repositorio:
   ```bash
   git clone https://github.com/alarconat/tp_dispositivos_API.git
   cd tp_dispositivos_API
   ```

2. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3000
   DB_HOST=mysql
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=db_tp
   JWT_SECRET="5f8718cf57845965b65d57087c5348edd532f71f08cdfa013c5f19ee858bd5eac4b6a5e333ca98746cdf98c3a6793c5626b54ff8d79afbbbcfe06e20967bbf6a"
   ```

3. Construye y levanta los contenedores Docker:
   ```bash
   docker compose build
   ```
   ```bash
   docker compose up -d
   ```

## Uso

La API estará disponible en `http://localhost:3000`.

### Apagar los Contenedores
```bash
docker-compose down
```

## Problemas Comunes

1. **Error de conexión con la base de datos:**
   - Asegúrate de que el contenedor de MySQL está ejecutándose y que las credenciales en `.env` son correctas.

2. **Dependencias incompatibles:**
   - Reinstala las dependencias dentro del contenedor con `docker exec -it tp_api_app npm install`.

3. **Puertos en uso:**
   - Cambia los puertos en el archivo `docker-compose.yml` o asegúrate de que los puertos 3000 (para la API) y 3309 (MySQL en tu máquina) estén libres.

## Contribuciones
Si deseas contribuir al proyecto, realiza un fork del repositorio y crea un Pull Request con tus cambios.

## Licencia
Este proyecto está licenciado bajo los términos de la [MIT License](LICENSE).

