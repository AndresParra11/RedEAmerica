import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Button, FormControl, InputLabel, TextField } from "@mui/material";
import "./FormRedEAmerica.scss";
import {
  TextInput,
  ErrorMessageText,
} from "../../components/TextInput/TextInput";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Field, ErrorMessage } from "formik";

const MyAccount = () => {
  const isAuth = false;
  const [documents, setDocuments] = useState({
    urlIdentificationScan: [],
  });
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});

  const uploadDocuments = async (type, e) => {
    const files = e.target.files;
    let allUploadsSuccessful = true;
    let allBasicDocuments = Array.isArray(documents?.urlIdentificationScan)
      ? [...documents.urlIdentificationScan]
      : [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Anunciantes");
      formData.append("public_id", `${type}_${i + 1}`);

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlkvt6uph/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        );

        if (response.data && response.data.secure_url) {
          const fileURL = response.data.secure_url;

          // Agregar la imagen a un arreglo u otro dependiendo del tipo
          if (
            type === "urlIdentificationScan" ||
            type === "urlEducationCertificate"
          ) {
            allBasicDocuments.push(fileURL);
          }
        } else {
          allUploadsSuccessful = false;
          console.error("Hubo un error al cargar el archivo:", response);
        }
      } catch (error) {
        console.error("Hubo un error al cargar el archivo:", error);
      }
    }

    setDocuments({
      urlIdentificationScan: allBasicDocuments,
    });

    setFormValues({
      ...formValues,
      documents: {
        urlIdentificationScan: allBasicDocuments,
      },
    });

    const updatedFormValues = {
      ...formValues,
      documents: {
        urlIdentificationScan: allBasicDocuments,
      },
    };
    sessionStorage.setItem("formData", JSON.stringify(updatedFormValues));

    if (allUploadsSuccessful) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Archivos cargados de forma correcta.",
        showConfirmButton: true,
        customClass: {
          container: "custom-swal-container", // Clase personalizada para la alerta
        },
      });
    }
  };

  const defaultTheme = createTheme();

  const MyAccountSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio").trim(),
    lastName: Yup.string().required("Campo obligatorio").trim(),
    email: Yup.string()
      .email("Agregar un email correcto")
      .required("Campo obligatorio")
      .trim(), //Remueve espacios en blanco al inicio y al final
    password: Yup.string()
      .min(8, "Debe tener al menos 8 caracteres")
      .required("Campo obligatorio")
      .trim(),
    country: Yup.string().required("Campo obligatorio").trim(),
    phone: Yup.string()
      .min(10, "Debe tener al menos 10 caracteres")
      .required("Campo obligatorio")
      .trim(),
    address: Yup.string().required("Campo obligatorio").trim(),
    identificationType: Yup.string().required("Campo obligatorio").trim(),
    identificationNumber: Yup.string().required("Campo obligatorio").trim(),
    urlIdentificationScan: Yup.string().required("Campo obligatorio").trim(),
    educationLevel: Yup.string().required("Campo obligatorio").trim(),
    urlEducationCertificate: Yup.string().required("Campo obligatorio").trim(),
  });

  const formFields = [
    {
      name: "name",
      label: "Nombres",
      type: "text",
      autoFocus: true,
      required: true,
    },
    { name: "lastName", label: "Apellidos", type: "text", required: true },
    {
      name: "email",
      label: "Correo electrónico",
      type: "text",
      required: true,
    },
    {
      name: "country",
      label: "País",
      type: "select",
      required: true,
    },
    {
      name: "phone",
      label: "Celular",
      type: "text",
      required: true,
    },
    { name: "password", label: "Contraseña", type: "password", required: true },
    { name: "address", label: "Dirección", type: "text", required: true },
    {
      name: "identificationType",
      label: "Tipo de documento",
      type: "select",
      required: true,
    },
    {
      name: "identificationNumber",
      label: "Número de documento",
      type: "text",
      required: true,
    },
  ];

  const countryOptions = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Perú",
    "Otros",
  ];

  const identificationTypeOptions = [
    "Cédula de ciudadanía",
    "Cédula de extranjería",
    "Pasaporte",
  ];

  const educationLevel = [
    "Primaria",
    "Secundaria",
    "Técnico",
    "Tecnólogo",
    "Profesional",
    "Especialización",
    "Maestría",
    "Doctorado",
  ];

  const typeMembreship = [
    {
      value: "Básica",
      label:
        "Membresía Básica - Tienes la oportunidad de publicar 10 anuncio por mes.",
    },
    {
      value: "Premium",
      label:
        "Membresía Premium - Tienes la oportunidad de publicar 100 anuncios por mes.",
    },
  ];

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Comunidad RedEAmerica
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Inicio
          </Button>
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              country: "",
              phone: "",
              password: "",
              address: "",
              identificationType: "",
              identificationNumber: "",
              urlIdentificationScan: "",
              educationLevel: "",
              urlEducationCertificate: "",
              typeMembreship: "",
            }}
            validationSchema={MyAccountSchema}
            onSubmit={async (values) => {
              await sleep(500);
              // Crear una copia de las propiedades desde address hacia abajo
              const {
                address,
                identificationType,
                identificationNumber,
                urlIdentificationScan,
                educationLevel,
                urlEducationCertificate,
                typeMembreship,
              } = values;
              const updatedValues = {
                address,
                identificationType,
                identificationNumber,
                urlIdentificationScan,
                educationLevel,
                urlEducationCertificate,
                typeMembreship,
              };
              updatedValues.urlIdentificationScan =
                documents.urlIdentificationScan[0];
              updatedValues.urlEducationCertificate =
                documents.urlIdentificationScan[1];

              alert(JSON.stringify(updatedValues, null, 2));
              console.log(updatedValues);
            }}
          >
            {({ isSubmitting, values, handleBlur, handleChange }) => (
              <Form className="form">
                <Grid container spacing={2}>
                  {formFields.map((field, index) =>
                    field.name === "email" ||
                    field.name === "password" ||
                    field.name === "address" ||
                    field.name === "urlIdentificationScan" ? (
                      <Grid item xs={12} key={index}>
                        <TextInput {...field} />
                        <ErrorMessageText name={field.name} />
                      </Grid>
                    ) : field.name === "country" ||
                      field.name === "identificationType" ? (
                      <Grid item xs={12} sm={6} key={index}>
                        <FormControl fullWidth>
                          <InputLabel id={field.name}>{field.label}</InputLabel>
                          <Select
                            label={field.label}
                            fullWidth
                            required
                            id={field.name}
                            name={field.name}
                            value={values[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {field.name === "country"
                              ? countryOptions.map((option) => (
                                  <MenuItem key={option} value={option}>
                                    {option}
                                  </MenuItem>
                                ))
                              : identificationTypeOptions.map((option) => (
                                  <MenuItem key={option} value={option}>
                                    {option}
                                  </MenuItem>
                                ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={6} key={index}>
                        <TextInput {...field} />
                        <ErrorMessageText name={field.name} />
                      </Grid>
                    )
                  )}
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Documento de identidad escaneado
                    </Typography>
                    <Field name="urlIdentificationScan">
                      {({ field }) => (
                        <TextField
                          {...field}
                          id="urlIdentificationScan"
                          type="file"
                          fullWidth
                          required
                          onChange={(e) => {
                            field.onChange(e);
                            uploadDocuments("urlIdentificationScan", e);
                          }}
                          multiple
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">Estudios académicos</Typography>
                    <FormControl fullWidth>
                      <InputLabel id="educationLevel">
                        Tipo de educación
                      </InputLabel>
                      <Select
                        name="educationLevel"
                        fullWidth
                        required
                        id="educationLevel"
                        label="Tipo de educación"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.educationLevel}
                      >
                        {educationLevel.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      <ErrorMessage name="educationLevel">
                        {(msg) => <div className="errors">{msg}</div>}
                      </ErrorMessage>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Certificado de estudios o acta de grado
                    </Typography>
                    <Field name="urlEducationCertificate">
                      {({ field }) => (
                        <TextField
                          {...field}
                          id="urlEducationCertificate"
                          type="file"
                          fullWidth
                          required
                          onChange={(e) => {
                            field.onChange(e);
                            uploadDocuments("urlEducationCertificate", e);
                          }}
                          multiple
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">Membresía</Typography>
                    <FormControl fullWidth>
                      <InputLabel id="typeMembreship">
                        Tipo de membresía
                      </InputLabel>
                      <Select
                        name="typeMembreship"
                        fullWidth
                        required
                        id="typeMembreship"
                        label="Tipo de membresía"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.typeMembreship}
                      >
                        {typeMembreship.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      <ErrorMessage name="typeMembreship">
                        {(msg) => <div className="errors">{msg}</div>}
                      </ErrorMessage>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ mt: 3, mb: 2 }}
                >
                  ENVIAR
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MyAccount;
