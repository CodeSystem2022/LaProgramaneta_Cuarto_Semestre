import logging as log

# Llamamos una configuracion basica
log.basicConfig(level=log.INFO,
                format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",
                datefmt="%I:%M:%S %p",
                handlers=[
                    log.FileHandler('capa_datos.log', encoding='utf8'),
                    log.StreamHandler()
                ])

# Creamos un Formatter con el formato deseado
formatter = log.Formatter("%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s")

# Creamos el FileHandler y le asignamos el Formatter
file_handler = log.FileHandler("capa_datos.log")
file_handler.setFormatter(formatter)

# Creamos el StreamHandler para la terminal
stream_handler = log.StreamHandler()
stream_handler.setFormatter(formatter)

# Añadimos los handlers al logger
log.getLogger().handlers = [
    file_handler,
    stream_handler
]

if __name__ == "__main__":
    log.debug("Mensaje a nivel debug")
    log.info("Mensaje a nivel info")
    log.warning("Mensaje a nivel warning")
    log.error("Mensaje a nivel error")
    log.critical("Mensaje a nivel critical")