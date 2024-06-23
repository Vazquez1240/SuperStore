'use client'
import { useState } from "react";
import { CampoTexto } from "@/components/CampoTexto/CampoTexto";
import {Card, CardContent, CardActions, Button, Grid, CardHeader} from "@mui/material";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const cambioUSer = (event) => {
    const nuevoUSer = event.target.value;
    setUser(nuevoUSer);// Usar nuevoUSer aquí en lugar de user para ver el valor actualizado
  };

  const cambioPass = (event) => {
      const nuevoPass = event.target.value;
      setPassword(nuevoPass);
  }

  return (
    <Card className='bg-white'>
        <CardHeader title='Bienvenido/a inicie sesión'/>
        <CardContent className='flex justify-center'>
            <Grid className='flex-column space-y-5'>
                <div>
                    <CampoTexto actualizarValor={cambioUSer} texto='Ingrese su usuario.' tipo='user'/>
                </div>
                <div className="contraseña">
                    <CampoTexto actualizarValor={cambioPass} texto='Ingrese su contraseña' tipo='password'/>
                </div>
            </Grid>
        </CardContent>
        <CardActions className=' flex justify-center'>
            <Button variant='contained'>Inicar sesion</Button>
        </CardActions>
    </Card>
  );
};
