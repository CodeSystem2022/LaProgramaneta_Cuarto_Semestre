import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.servicio.EstudianteServicio;

public class estudiantesAplicacion {
    @SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner { //para ejecutar por consola
	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = 
			LoggerFactory.getLogger(EstudiantesApplication.class);
	
	String nl = System.lineSeparator();

	public static void main(String[] args) {
		logger.info("iniciando la aplicacion ...");
		//Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicacion Finalizada!");
	}
	@Override //único método de la interface para implementar
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecutando el metodo run de Spring..."+nl);
	}
}
}
