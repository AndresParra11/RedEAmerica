import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Navigate, Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useCookies } from "react-cookie";

const defaultTheme = createTheme();

const Login = () => {
  const [, setCookie] = useCookies(["userType"]);
  const navigate = useNavigate();
  const isAuth = false;

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Agregar un email correcto")
      .required("Campo obligatorio")
      .trim(),
    password: Yup.string()
      .min(8, "Debe tener al menos 8 caracteres")
      .required("Campo obligatorio")
      .trim(),
  });

  return isAuth ? (
    <Navigate to="/" replace />
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LockOutlinedIcon />
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values) => {
                if (values.email === "andresparrab11@gmail.com") {
                  setCookie("userType", "admin", 3600);
                  alert(JSON.stringify(values, null, 2));
                  navigate("/");

                  return;
                }
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="form">
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electrónico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  {errors.email && touched.email ? (
                    <div className="form__loginErrors">{errors.email}</div>
                  ) : null}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  {errors.password && touched.password ? (
                    <div className="form__loginErrors">{errors.password}</div>
                  ) : null}
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuérdame"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Iniciar Sesión
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to="/recover-password">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/register">
                        ¿No tienes una cuenta? Regístrate
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
