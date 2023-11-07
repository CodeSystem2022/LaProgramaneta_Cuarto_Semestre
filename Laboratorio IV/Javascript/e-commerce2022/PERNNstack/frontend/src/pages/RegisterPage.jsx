
export {Button, Card, Input} from '../components/ui';
import {useFrom} from "react-hook-form"

function RegisterPage() {

  const {register, handleSubmit, formState: {errors} } = useFrom();

  const onSumit = handleSubmit((data) => {
    console.log(data);
  });


  return (
  <div className="h-[calc(100vh-64px)] flex items-center justify-center">
    <Card>
    <h3 className="text-2x1 font-bold">Registro</h3>
      <form onSumit = {onSumit}>
        <Input placeholder= "Ingrese su nombre"
        {...RegisterPage("name", {required:true})}></Input>

      {
        errors.name && <p className='text-red-500'>Este campo es requerido</p>
      }

        <Input type = "email" placeholder= "Ingrese su email"
        {...RegisterPage("email", {required:true})}></Input>

      {
        errors.email && <p className='text-red-500'>Este campo es requerido</p>
      }

        <Input type= "password" placeholder= "Ingrese su contraseña"
        {...RegisterPage("password", {required:true})}></Input>
        
      {
        errors.password && <p className='text-red-500'>Este campo es requerido</p>
      }

        <Button>Registrarse</Button>
      </form> 
    </Card>  
  </div>
  );
}

export default RegisterPage;