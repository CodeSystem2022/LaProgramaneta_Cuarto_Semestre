# Dar formato a un string

nombre = "Ariel"
edad = 28
mensaje_con_formato = "Mi nombre es %s y tengo %d años" % (nombre, edad)
print(mensaje_con_formato)

# Creamos uan tupla
persona = ("Carla", "Gomes", 5000.00)
mensaje_con_formato = "Hola %s %s. Tu sueldo es %.2f" # % persona # Aqui le pasamos el objeto que es tupla
print(mensaje_con_formato % persona)