import {IconButton, TextField} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {Person2Rounded, Key} from "@mui/icons-material";

export const CampoTexto = ({ actualizarValor, texto, tipo }) => {
  return (
    <div>
      <TextField
      label={texto}
      variant="outlined"
      onChange={actualizarValor}// Llama a la función actualizarValor cuando cambia el valor
      InputProps={{
          endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                    {tipo === 'user' ? <Person2Rounded /> : <Key />}
                </IconButton>
            </InputAdornment>
          )
      }}
    />
    </div>
  );
};
