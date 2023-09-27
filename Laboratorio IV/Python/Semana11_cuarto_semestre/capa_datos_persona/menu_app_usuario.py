from capa_datos_persona.usuario_dao import UsuarioDAO
from logger_base import log
from capa_datos_persona.Usuario import Usuario

opcion = None
while opcion != 5:
    print('Opciones: ')
    print('1. Listar Usuarios')
    print('2. Agregar Usuario')
    print('3. Modificar Usuario')
    print('4. Eliminar Usuario')
    print('5. Salir del Programa')
    opcion = int(input('Digite la opción deseada'))
    if (opcion == 1):
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            log.info(usuario)
    elif opcion == 2:
        username_var = input('Ingrese el nombre de usuario: ')
        password_var = input('Ingrese su contraseña: ')
        usuario = Usuario(username=username_var, password=password_var)
        usuario_insertado = UsuarioDAO.insertar(usuario)
        log.info(f'Usuario insertado: {usuario_insertado}')
    elif opcion	== 3:
        id_usuario_var = int(input('Ingrese ID de usuario a modificar: '))
        username_var = input('Ingrese el nombre del usuario a modificar: ')
        password_var = input('Ingrese la contraseña del usuario a modificar: ')
        usuario = Usuario(id_usuario=id_usuario_var, username=username_var, password=password_var)
        usuario_actualizado = UsuarioDAO.actualizar(usuario)
        log.info(f'Usuario actualizado: {usuario_actualizado}')
    elif opcion == 4:
        id_usuario_var = int(input('Ingrese ID de usuario a eliminar: '))
        usuario = Usuario(id_usuario=id_usuario_var)
        usuario_eliminado = UsuarioDAO.eliminar(usuario)
        log.info(f'Usuario actualizado: {usuario_eliminado}')
else:
    log.info('Salimos de la aplicación')