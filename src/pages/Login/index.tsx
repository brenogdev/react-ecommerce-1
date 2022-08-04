import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/login";
import { IFormData } from "../../@types/login";
import { useAuth } from "../../hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { authenticate } = useAuth();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  async function handlerFormSubmit(data: { email: string; password: string }) {
    try {
      setLoading(true);
      await authenticate(data.email, data.password);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
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
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entre com suas Credenciais
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handlerFormSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              autoComplete="email"
              autoFocus
              {...register("email")}
              error={errors.email !== undefined}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              error={errors.password !== undefined}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, textTransform: "capitalize" }}
              size="large"
            >
              {loading ? <CircularProgress color="secondary" /> : 'Entrar'}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Você não tem conta? Cadastrar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
