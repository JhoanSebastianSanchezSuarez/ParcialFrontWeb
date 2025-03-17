# ParcialFrontWeb
* Nombre: Jhoan Sebastian Sánchez Suarez
* Código: 202215911
# Ejecución del parcial
* Descargar el proyecto y abrir una terminal dentro del directorio del proyecto, una vez dentro, ejecutar `npm install` para instalar todas las dependencias listadas en el package.json.
* Una vez instaladas las dependencias, ejecute el comando `npm start` para empezar el servidor local del proyecto. Se abrirá una pestaña del navegador en localhost con el proyecto.
* Una vez ahí se debe colocar `en` para ver la pagina en ingles o `/es` para verla en español, y alli estara el login, despues de ingresar credenciales válidas mandara al home y alli se puede acceder al detalle (Ej: `http://localhost:3000/en`)
# Desarrollo del parcial
Primero para realizar el login se realizo un formulario siguiendo la guia que se encuentra en la sección unificada, se agrego la verificacion de la contraseña. Luego, se realizo el home haciendo uso de cards e importando iconos dentro de la carpeta descargados de internet, luego para los detalles estos extraen informacion del Moockaro en forma de API a excepcion de los titulos e iconos, despues se uso un enrutamiento normal y se hizo uso de navigator para redirigir. Por ultimo se realizo unos cambios al enrutamiento para la internacionalizacion, usando un wrapper y la url para definir el lenguaje que se iba a usar para renderizar los componentes. 
