import { Link, Navigate } from "react-router-dom";
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
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import "./Register.scss";
import {
  TextInput,
  ErrorMessageText,
} from "../../components/TextInput/TextInput";

const Register = () => {
  const isAuth = false;

  const [, setCookie] = useCookies(["userType"]);

  const defaultTheme = createTheme();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio").trim(),
    lastname: Yup.string().required("Campo obligatorio").trim(),
    email: Yup.string()
      .email("Agregar un email correcto")
      .required("Campo obligatorio")
      .trim(), //Remueve espacios en blanco al inicio y al final
    password: Yup.string()
      .min(8, "Debe tener al menos 8 caracteres")
      .required("Campo obligatorio")
      .trim(),
  });

  const formFields = [
    {
      name: "name",
      label: "Nombres",
      type: "text",
      autoFocus: true,
      required: true,
    },
    { name: "lastname", label: "Apellidos", type: "text", required: true },
    {
      name: "email",
      label: "Correo electrónico",
      type: "text",
      required: true,
    },
    { name: "password", label: "Contraseña", type: "password", required: true },
  ];

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
            Registro
          </Typography>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
              userType: "",
              password: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              const userData = {
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                userType:
                  values.email === "andresparrab11@gmail.com"
                    ? "admin"
                    : "client",
                password: values.password,
              };
              // Convierte el objeto en una cadena JSON
              const userDataJSON = JSON.stringify(userData);

              setCookie("userData", userDataJSON, 3600);
              localStorage.setItem(
                `${userData.email}`,
                JSON.stringify(userData)
              );
            }}
          >
            <Form className="form">
              <Grid container spacing={2}>
                {formFields.map((field, index) =>
                  field.name === "email" || field.name === "password" ? (
                    <Grid item xs={12} key={index}>
                      <TextInput {...field} />
                      <ErrorMessageText name={field.name} />
                    </Grid>
                  ) : (
                    <Grid item xs={12} sm={6} key={index}>
                      <TextInput {...field} />
                      <ErrorMessageText name={field.name} />
                    </Grid>
                  )
                )}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="¿Deseas recibir promociones y noticias de nosotros?"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
