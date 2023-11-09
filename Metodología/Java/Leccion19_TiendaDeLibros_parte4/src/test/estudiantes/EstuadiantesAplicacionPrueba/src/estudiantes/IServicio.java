import utn.estudiantes.modelo.Estudiante;

import java.util.List;
package estudiantes;

public class IServicio {
    public interface iEstudianteServicio {
    // va a tener los métodos básicos para trabajar con la entidad Estudiante
    // usando la interface repositorio
    public List<Estudiante> listarEstudiantes();
    public Estudiante buscarEstudianteporId(Integer idEstudiante);
    public void guardarEstudiante(Estudiante estudiante);
    public void eliminarEstudiante(Estudiante estudiante);

}
}
