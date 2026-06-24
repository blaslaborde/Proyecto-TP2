# Proyecto-TP2

Proyecto sobre una aplicacion de gestion de viajes de la materia Taller De Programacion 2

Rutas de la API:
- /usuarios
- /destinos
- /reservas

Instrucciones para inicializar la aplicacion:
- Paso 1: Crear la base datos llamada "odyssey" desde el Admin de MySQL con la apliacion XAMP/MAMP en los puertos Apache 80,443 y MySQL 3036
- Paso 2: Levantar el servidor con el comando npm run dev
- Paso 3: Abrir ThunderClient y hacer un post en la ruta /usuarios para crear un usuario admin que va a ser el encargado de crear los destinos para que los usuarios puedan verlos. (Cualquier usuario puede crearlos, pero para que quede centrada la funcionalidad en un usuario)
- Paso 4: Hacer un post en /usuarios/login para iniciar sesion con los parametros de email y password
- Paso 5: Hacer un post en la ruta /destinos para crear un destino
- Paso 6: Crear otro usuario con un post en /usuarios que seria el cliente que va a realizar las reservas
- Paso 7: Volver a hacer un post en /usuarios/login para iniciar sesion con los parametros de email y password
- Paso 8: Crear un reserva con el metodo post en /reservas con la cantidad de personas y el id de destino que en este caso seria 1
- Paso 9: Desde el usuario 2, hacer un get en la ruta /reservas/1 para ver la reserva que acabamos de hacer
- Paso 10: Volver a crear una reserva con los mismos parametros que la pasamos antes pero con otra cant de personas
- Paso 11: Iniciar sesion con el primer usuario que creamos y tratar de hacer un get de las reservas de otro usuario /reservas/1
- Paso 12: Loguearte otra vez con el usuario que creo la reserva, y realizar un delete de la reserva 2 /reservas/2
