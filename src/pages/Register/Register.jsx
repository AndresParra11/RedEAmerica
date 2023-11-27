import { Link, Navigate, useNavigate } from "react-router-dom";
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
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./Register.scss";
import {
  TextInput,
  ErrorMessageText,
} from "../../components/TextInput/TextInput";

const Register = () => {
  const isAuth = false;
  const navigate = useNavigate();

  const defaultTheme = createTheme();

  const RegisterSchema = Yup.object().shape({
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
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Celular",
      type: "text",
      required: true,
    },
    { name: "password", label: "Contraseña", type: "password", required: true },
  ];

  const countryOptions = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Perú",
    "Otros",
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
            Registro
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
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
              if (values.email === "redeamerica@admin.com") {
                await sleep(500);
                alert(JSON.stringify(values, null, 2));
                navigate("/list-redeamerica");
              } else {
                await sleep(500);
                alert(JSON.stringify(values, null, 2));
                navigate("/home_auth");
              }
            }}
          >
            {({ isSubmitting, values, handleBlur, handleChange }) => (
              <Form className="form">
                <Grid container spacing={2}>
                  {formFields.map((field, index) =>
                    field.name === "email" ||
                    field.name === "password" ||
                    field.name === "phone" ? (
                      <Grid item xs={12} key={index}>
                        <TextInput {...field} />
                        <ErrorMessageText name={field.name} />
                      </Grid>
                    ) : field.name === "country" ? (
                      <Grid item xs={12} key={index}>
                        <FormControl fullWidth>
                          <InputLabel id={field.name}>País</InputLabel>
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
                            {countryOptions.map((option) => (
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
                  disabled={isSubmitting}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">
                      ¿Ya tienes una cuenta? Inicia sesión
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
