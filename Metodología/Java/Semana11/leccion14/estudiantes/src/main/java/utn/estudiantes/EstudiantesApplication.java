package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner{
	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator();

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicación finalizada");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecutando método run de Spring..."+nl);
        var salir = false;
        var consola = new Scanner(System.in);
        while(!salir){
            mostrarMenu();
            salir = ejecutarOpciones(consola);
            logger.info(nl);
        }

	}
    private void mostrarMenu(){
        logger.info(nl);
        logger.info("""
               ------ SISTEMA DE ESTUDIANTES ------
               1- Listar Estudiantes
               2- Buscar Estudiantes
               3- Agregar Estudiantes
               4- Modificar Estudiantes
               5- Eliminar Estudiante
               6- Salir
               Elegir una opcion:""");
    }
}
