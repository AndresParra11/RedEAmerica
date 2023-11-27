import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalData from "./PersonalData";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const advertisers = [
  {
    name: "Andrés Felipe",
    lastName: "Parra",
    email: "pipe.parrab@gmail.com",
    country: "Colombia",
    phone: "3178551051",
    address: "Calle 41 # 8-57",
    typeID: "Cédula de ciudadanía",
    numberID: "1110570244",
    documentScan:
      "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043576/Anunciantes/documentScan_1.jpg",
    typeEducation: "Pregrado",
    studyDocument:
      "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043604/Anunciantes/studyDocument_1.jpg",
  },
  {
    name: "Daniel",
    lastName: "Rojas",
    email: "daniel.rojas@gmail.com",
    country: "Colombia",
    phone: "3178551051",
    address: "Calle 41 # 8-57",
    typeID: "Cédula de ciudadanía",
    numberID: "1110570244",
    documentScan:
      "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043576/Anunciantes/documentScan_1.jpg",
    typeEducation: "Pregrado",
    studyDocument:
      "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043604/Anunciantes/studyDocument_1.jpg",
  },
];

const VerificationAdvertiser = () => {
  const user = { userType: "admin" };
  const { name } = useParams();
  const navigate = useNavigate();
  const [advertiser, setAdvertiser] = useState({});

  useEffect(() => {
    if (advertisers.length > 0 && name) {
      const advertiserFilteredByName = advertisers.find(
        (advertiser) =>
          advertiser.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase() === name
      );
      if (advertiserFilteredByName) {
        setAdvertiser(advertiserFilteredByName);
      }
    }
  }, [name]);

  const handleAcceptAdvertiser = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Anunciante aprobado.",
      showConfirmButton: true,
      customClass: {
        container: "custom-swal-container",
      },
    }).then(() => {
      navigate("/list-redeamerica");
      window.scrollTo({ top: 0 });
    });
  };

  const handleDenyAdvertiser = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Anunciante rechazada.",
      text: "Informar al usuario por medio de correo electrónico.",
      showConfirmButton: true,
      customClass: {
        container: "custom-swal-container",
      },
    }).then(() => {
      navigate("/list-redeamerica");
      window.scrollTo({ top: 0 });
    });
  };

  return (
    user &&
    user.userType === "admin" && (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        ></AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center" mb={2}>
              Verificación Anunciante
            </Typography>
            <React.Fragment>
              <PersonalData advertiser={advertiser} />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={handleDenyAdvertiser}
                  sx={{ mt: 3, ml: 1 }}
                  variant="contained"
                >
                  Rechazar
                </Button>
                <Button
                  variant="contained"
                  onClick={handleAcceptAdvertiser}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Aprobar
                </Button>
              </Box>
            </React.Fragment>
          </Paper>
        </Container>
      </React.Fragment>
    )
  );
};

export default VerificationAdvertiser;
