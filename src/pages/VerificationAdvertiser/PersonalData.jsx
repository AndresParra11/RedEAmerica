import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import PropTypes from "prop-types";

const PersonalData = ({ advertiser }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombres"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.name ? advertiser.name : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellidos"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.lastName ? advertiser.lastName : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tipo de indentificación"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.typeID ? advertiser.typeID : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="N° de identificación"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.numberID ? advertiser.numberID : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Correo electronico"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.email ? advertiser.email : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Celular"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.phone ? advertiser.phone : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="País"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.country ? advertiser.country : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección de residencia"
            fullWidth
            variant="standard"
            disabled
            value={advertiser && advertiser.address ? advertiser.address : ""}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link
            href={advertiser.documentScan}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documento de identidad
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link
            href={advertiser.studyDocument}
            target="_blank"
            rel="noopener noreferrer"
          >
            Certificado o acta de estudio
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PersonalData.propTypes = {
  advertiser: PropTypes.object.isRequired,
};

export default PersonalData;
