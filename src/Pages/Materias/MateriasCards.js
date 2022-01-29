import {useState} from 'react';

//importaciones para la card

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

//Icons button
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Swal from 'sweetalert2';

import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });


const MateriasCard = ({index, utim, onDelete}) => {
    const [datos, setDatos] = useState(utim)
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    }


    const saveMaterias = () => {
        ///logica para guardad la informacion.
       setEdit(!edit);
       Swal.fire(
        'Guardar',
        'La información fue guardada',
        'success'
      )
    }

    const handleEliminar = () => {
        //invocar a la accion eliminar desde el padre 
        onDelete(index);
    }

    return(
        <Grid item xs={1} sm={4} md={4} key={datos.id}  >
            <Card sx={{ maxWidth: 345}} elevation={3}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={datos.imagen}
                />
                <CardContent>
                {!edit && (
                    <Typography gutterBottom variant="h6" component="div">
                        {datos.materia}
                    </Typography>
                )}
                    {edit && (
                    <TextField id="outlined-basic" 
                    name="materia"
                    label="Materia" variant="outlined" value={datos.materia} fullWidth
                    onChange={handleChange}
                    />
                    )}



                {!edit && (
                    <Typography variant="body2" color="text.secondary">
                            Docente: {datos.profesor}.
                         </Typography> 
      
                )}
                    {edit && (
                    <TextField id="outlined-basic" label="Profesor" variant="outlined" 
                  
                    sx={{marginTop:2}}
                    value={datos.profesor} fullWidth
                    name="profesor"
                    onChange={handleChange}/>
                    )}

                 {!edit && (
                    <Typography sx={{marginTop:1}} gutterBottom component="div">
                       Horarios: {datos.horario}.
                    </Typography>
                )}
                    {edit && (
                    <TextField id="outlined-basic"
                    sx={{marginTop:3}}
                    name="horario"
                    label="Horarios" variant="outlined" value={datos.horario} fullWidth
                    onChange={handleChange}
                    />
                    )}

                    

                </CardContent>
                <CardActions  >
                        <Button   onClick={handleEliminar} variant="outlined" color="error" endIcon={<DeleteRoundedIcon />}>
                            Eliminar
                        </Button>
                        {!edit && (
                        <Button   onClick={handleEdit} variant="outlined" endIcon={<EditRoundedIcon />}>
                            Editar
                        </Button>
                        )}
                        {edit && (
                            <Button onClick={saveMaterias} variant="outlined" endIcon={<SaveRoundedIcon />}> Guardar</Button>
                            
                        )}
                
                </CardActions>
            </Card>
    </Grid>
    );
}

export default MateriasCard;