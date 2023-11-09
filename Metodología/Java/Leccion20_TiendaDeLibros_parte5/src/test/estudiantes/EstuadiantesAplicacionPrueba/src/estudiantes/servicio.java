import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiante;
import utn.estudiantes.repositorio.EstudianteRepositorio;
import java.util.List;

package estudiantes;

/**
 *
 * @author belli
 */
public class servicio {
   @Service
public class EstudianteServicio implements iEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio; //es el objeto que traemos

    @Override
    public List<Estudiante> listarEstudiantes() { //Método listarEstudiantes - video 1
        List<Estudiante> estudiantes = estudianteRepositorio.findAll(); //nos trae toda la lista de estudiantes
        return estudiantes;
    }

    @Override
    public Estudiante buscarEstudianteporId(Integer idEstudiante) {
        Estudiante estudiante = estudianteRepositorio.findById(idEstudiante).orElse(null); // findById es opcional si norecibe el id o regresa en este caso un null
        return  estudiante;
    }

    @Override
    public void guardarEstudiante(Estudiante estudiante) {
        estudianteRepositorio.save(estudiante);
    }

    @Override
    public void eliminarEstudiante(Estudiante estudiante) {
        estudianteRepositorio.delete(estudiante);
    } //esta clase implementa la interface
} 
}
