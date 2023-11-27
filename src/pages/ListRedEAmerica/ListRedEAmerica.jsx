import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import Nav from "../../components/Nav/Nav";

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
    profileStatus: "pendiente",
    avatar: "https://i.pravatar.cc/85",
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
    profileStatus: "aprobada",
    avatar: "https://i.pravatar.cc/100",
  },
];

const ListAdvertisers = () => {
  const user = { roles: "ADMIN" };
  const [filteredAdvertisers, setFilteredAdvertisers] = useState([]);
  const [filterStatus, setFilterStatus] = useState("todas");
  const navigate = useNavigate();

  const handleViewData = (name) => {
    name = name
      .normalize("NFD") // Normaliza las letras con diacríticos a letras sin diacríticos
      .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos que hayan quedado después de la normalización
      .replace(/\s+/g, "-") // Reemplaza espacios en blanco con guiones
      .toLowerCase(); // Convierte a minúsculas
    navigate(`/detail-advertiser/${name}`);
  };

  useEffect(() => {
    setFilteredAdvertisers(advertisers);
  }, []);

  const handleFilterChange = (event) => {
    const status = event.target.value;
    setFilterStatus(status);

    if (status === "todas") {
      setFilteredAdvertisers(advertisers);
    } else {
      const filtered = advertisers.filter(
        (advertiser) => advertiser.profileStatus === status
      );
      setFilteredAdvertisers(filtered);
    }
  };

  return user && user?.roles === "ADMIN" ? (
    <Container
      maxWidth="md"
      style={{
        marginTop: "120px",
        marginBottom: "50px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        padding: "10px",
      }}
    >
      <Nav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "20px 0",
          width: "200px",
        }}
      >
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="status-filter"
            id="status-filter-select"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <MenuItem value="todas">Todas</MenuItem>
            <MenuItem value="pendiente">Pendientes</MenuItem>
            <MenuItem value="aprobada">Aprobadas</MenuItem>
            <MenuItem value="rechazada">Rechazadas</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {filteredAdvertisers.map((advertiser, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 50, height: 50, objectFit: "cover" }}
                  src={advertiser?.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={advertiser?.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {advertiser?.name} {advertiser?.lastName}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button
                sx={{ display: { xs: "none", md: "flex" } }}
                variant="contained"
                style={{ marginTop: "10px" }}
                onClick={() => handleViewData(advertiser?.name)}
              >
                Ver Datos
              </Button>
              <Button
                sx={{ display: { xs: "none", md: "flex" } }}
                variant="contained"
                style={{ marginTop: "10px", marginLeft: "15px" }}
                disabled
              >
                {advertiser?.profileStatus}
              </Button>
              {advertiser?.profileStatus === "aprobada" ? (
                <CheckIcon
                  sx={{ display: { xs: "flex", md: "none" } }}
                  style={{
                    marginTop: "15px",
                    marginLeft: "15px",
                    fontSize: "30px",
                    color: "#2196f3",
                  }}
                />
              ) : null}
              <VisibilityIcon
                sx={{ display: { xs: "flex", md: "none" } }}
                variant="contained"
                style={{
                  marginTop: "15px",
                  marginLeft: "15px",
                  fontSize: "30px",
                  color: "#2196f3",
                }}
                onClick={() => handleViewData(advertiser?.name)}
              ></VisibilityIcon>
            </ListItem>
            {index === advertisers.length - 1 ? null : (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Container>
  ) : (
    <></>
  );
};

export default ListAdvertisers;
