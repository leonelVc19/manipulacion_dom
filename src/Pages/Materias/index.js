import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import MateriasCard from './MateriasCards';
import {useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


//importar .js donde estan las imagenes.
import imagenes from './imagenes';
import Swal from 'sweetalert2';


const Materias = () => {
    
    const [materias, setMaterias] = useState ([
        {id:1, materia: "Seguridad en el Desarrollo de Software", profesor: "Mtro. Iván Antonio", horario: ' martes 16-18, jueves 14 -16', imagen: imagenes.img2 },
        {id:2, materia: "Matemáticas para Ingeniería", profesor: "Mtro. David García", horario: ' miércoles 15-18, viernes 16-18',imagen: imagenes.img},
        {id:3, materia: "Desarrollo Web Profesional", profesor: "Mtro. Alfonso Felipe", horario: ' miércoles 13-15, viernes 13-15',imagen: imagenes.img3},
        {id:4, materia: "Planeación y Organización del trabajo", profesor: "Mtra. Alejandra Morán", horario: ' martes 14-16, jueves 13-14', imagen: imagenes.img1 },
        
    ]);
    


    //funcion para eliminar
    const handleDelete = (index) => {
        Swal.fire(
            'Eliminado',
            'La información fue eliminada',
            'success'
          )
        const copiaMaterias = [...materias];
        copiaMaterias.splice(index, 1);
        setMaterias([ ...copiaMaterias]);
    };


    const addMateria = () => {
        setMaterias([
            ...materias,
            {id:5, materia:'', profesor:'', horario:'', imagen: imagenes.img4},
        ]);
    };


    const renderMaterias = () => (
        //hacer un map del arreeglo de materias a tarjetas.
        materias.map((item, index) => (
           <MateriasCard key={item.id} index={index} utim={item} onDelete={handleDelete}/>
        ))
   );

   const breadcrumbs = [
        <Link style={{textDecoration:'none', color:'black'}} underline="hover" key="1" color="inherit" to="/">
         Incio
        </Link>,
            <Typography key="3" color="text.primary">
               Breadcrumb
            </Typography>,
  ];

    return(
        <Paper elevation={3} style={{ padding:10}}>
            <Grid container >
                <Grid item xs={12} sx={{margin:1, textAlign: 'left', bgcolor: 'info.main',  borderRadius:2 }}>
                    <Typography sx={{padding:1}} variant="h4" gutterBottom component="div" color="white">
                        Materias
                    </Typography>
                </Grid>
                <Grid container  sx={{marginLeft:1.4, marginTop:1}}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>
                   
                <Grid item xs={12} sx={{margin:1, textAlign: 'right'}}  >
                    <Button onClick={addMateria} variant="contained" endIcon={<AddIcon />}>
                        Agregar
                    </Button>
                </Grid>

                <Grid container spacing={1} >
                    {renderMaterias()}
                </Grid>
            </Grid>            
        </Paper>
    );
}

export default Materias;