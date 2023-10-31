package Semana11.SistemaEstudiantes.SistemaEstudiantes.src;
import Semana11.SistemaEstudiantes.SistemaEstudiantes.src.conexion.Conexion;
public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConnection();
        if(conexion != null)
            System.out.println("Conexion Exitosa: "+conexion);
        else
            System.out.println("Error al conectarse");
    }// Fin main
}// Fin Clase