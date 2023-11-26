import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useCookies } from "react-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Button, FormControl, InputLabel } from "@mui/material";
import "./MyAccount.scss";
import {
  TextInput,
  ErrorMessageText,
} from "../../components/TextInput/TextInput";
import { Select, MenuItem } from "@mui/material";

const MyAccount = () => {
  const isAuth = false;
  const user = { userType: "redEAmerica" };

  const [, setCookie] = useCookies(["userType"]);

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
    cellphone: Yup.string()
      .min(10, "Debe tener al menos 10 caracteres")
      .required("Campo obligatorio")
      .trim(),
    address: Yup.string().required("Campo obligatorio").trim(),
    typeID: Yup.string().required("Campo obligatorio").trim(),
    numberID: Yup.string().required("Campo obligatorio").trim(),
    documentScan: Yup.string().required("Campo obligatorio").trim(),
  });

  const formFieldsUsers = [
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
      name: "cellphone",
      label: "Celular",
      type: "text",
      required: true,
    },
    { name: "password", label: "Contraseña", type: "password", required: true },
  ];

  const formFieldsUsersRedEAmerica = [
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
      name: "cellphone",
      label: "Celular",
      type: "text",
      required: true,
    },
    { name: "password", label: "Contraseña", type: "password", required: true },
    { name: "address", label: "Dirección", type: "text", required: true },
    {
      name: "typeID",
      label: "Tipo de documento",
      type: "select",
      required: true,
    },
    {
      name: "numberID",
      label: "Número de documento",
      type: "text",
      required: true,
    },
    /*     {
      name: "documentScan",
      label: "Adjuntar documento",
      type: "file",
      required: true,
    }, */
  ];

  let formFields = [];
  if (user.userType === "client") {
    formFields = formFieldsUsers;
  } else if (user.userType === "redEAmerica") {
    formFields = formFieldsUsersRedEAmerica;
  }

  const countryOptions = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Perú",
    "Otros",
  ];

  const typeIDOptions = [
    "Cédula de ciudadanía",
    "Cédula de extranjería",
    "Pasaporte",
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
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Mi cuenta
          </Typography>
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              country: "",
              cellphone: "",
              userType: "",
              password: "",
              address: "",
              typeID: "",
              numberID: "",
              documentScan: "",
            }}
            validationSchema={MyAccountSchema}
            onSubmit={async (values) => {
              await sleep(500);
              const userData = {
                name: values.name,
                lastName: values.lastName,
                email: values.email,
                userType:
                  values.email === "andresparrab11@gmail.com"
                    ? "admin"
                    : "client",
                password: values.password,
                country: values.country,
                cellphone: values.cellphone,
                address: values.address,
                typeID: values.typeID,
                numberID: values.numberID,
                documentScan: values.documentScan,
              };
              // Convierte el objeto en una cadena JSON
              const userDataJSON = JSON.stringify(userData);

              setCookie("userData", userDataJSON, 3600);
              localStorage.setItem(
                `${userData.email}`,
                JSON.stringify(userData)
              );
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ isSubmitting, values, handleBlur, handleChange }) => (
              <Form className="form">
                <Grid container spacing={2}>
                  {formFields.map((field, index) =>
                    field.name === "email" ||
                    field.name === "password" ||
                    field.name === "address" ? (
                      <Grid item xs={12} key={index}>
                        <TextInput {...field} />
                        <ErrorMessageText name={field.name} />
                      </Grid>
                    ) : field.name === "country" || field.name === "typeID" ? (
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
                              : typeIDOptions.map((option) => (
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ mt: 3, mb: 2 }}
                >
                  ACTUALIZAR PERFIL
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
