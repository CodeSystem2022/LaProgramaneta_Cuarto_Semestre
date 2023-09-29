# Dar formato a un string

nombre = "Ariel"
edad = 28
mensaje_con_formato = "Mi nombre es %s y tengo %d años" % (nombre, edad)
#print(mensaje_con_formato)

# Creamos uan tupla
persona = ("Carla", "Gomes", 5000.00)
mensaje_con_formato = "Hola %s %s. Tu sueldo es %.2f" # % persona # Aqui le pasamos el objeto que es tupla
# print(mensaje_con_formato % persona)

# Trabajando con un formato estructurado
nombre = "Juan"
edad = 19
sueldo = 3000
#mensaje_con_formato = "Nombre {} Edad {} Sueldo {:.2f}" .format(nombre, edad, sueldo)

mensaje = "Nombre {0} Edad {1} Sueldo {2:.2f}".format(nombre, edad, sueldo)
print(mensaje)

#se puede cambiar el orden y los indices
mensaje2 = "Sueldo {2} Edad {1} Nombre {0} ".format(nombre, edad, sueldo)
print(mensaje2)
