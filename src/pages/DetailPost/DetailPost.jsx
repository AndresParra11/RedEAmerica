import { useParams } from "react-router-dom";
import Sidebar from "../layout/Sidebar/Sidebar";
import "./DetailPost.scss";
import { useEffect, useState, useContext } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { User } from "../../Router/AppRouter";

const posts = [
  {
    id: 0,
    title: "La importancia de la inteligencia emocional en la educación",
    description:
      "Descubre cómo la inteligencia emocional (IE) impacta en el aprendizaje y desarrollo integral de los estudiantes y cómo puede ser integrada de manera efectiva en el sistema educativo. Exploraremos investigaciones recientes que respaldan la conexión entre la IE y el rendimiento académico, así como su influencia en la resolución de problemas y las habilidades sociales de los estudiantes. Además, proporcionaremos recursos prácticos y estrategias para la implementación exitosa de la inteligencia emocional en el aula.",
    url: "https://www.educationhub.com/importancia-inteligencia-emocional",
    image: "https://picsum.photos/800/400",
    date: "2023-03-15",
    author: "Dr. Ana Rodríguez",
  },
];

const advertiser = {
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
  roles: "REDEAMERICA",
  description:
    "Soy un profesional en el área de la salud de la universidad de Antioquia y me enfoco en la nutrición y el deporte.",
};

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(advertiser);
  }, [user]);

  useEffect(() => {
    // Encontrar el post específico por ID
    setPost(posts.find((post) => post.id === parseInt(id)));
    // Puedes cargar los comentarios de tu API o cualquier otra fuente aquí
    // Ejemplo de comentarios (simulados):
    setComments([
      { id: 1, userName: "Andrés Parra", text: "¡Excelente artículo!" },
      {
        id: 2,
        userName: "Daniela Rojas",
        text: "Muy interesante, gracias por compartir.",
      },
    ]);
  }, [id]);

  const handleCommentSubmit = () => {
    // Aquí podrías enviar el comentario a tu API y luego actualizar la lista de comentarios
    const newComment = {
      id: comments.length + 1,
      userName: user.name, // Puedes obtener el usuario actual de tu sistema de autenticación
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment(""); // Limpiar el campo de comentario después de enviarlo
  };

  return (
    <>
      <Sidebar />
      <div className="homeAuth">
        <div className="homeAuth__container">
          <div className="homeAuth__container__content container__post">
            <div className="post-detail">
              <h1 className="post-detail__title">{post.title}</h1>
              <p className="post-detail__description">{post.description}</p>
              <img src={post.image} alt={post.title} />
              <p>Fecha: {post.date}</p>
              <p>Autor: {post.author}</p>

              <div className="comments-section">
                <h2>Comentarios</h2>
                {comments.map((c) => (
                  <div key={c.id} className="comment">
                    <strong>{c.userName}:</strong> {c.text}
                  </div>
                ))}

                {/* Formulario para agregar un nuevo comentario */}
                <TextField
                  label="Añadir comentario"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <IconButton onClick={handleCommentSubmit}>
                  <SendIcon />
                </IconButton>
              </div>

              <Button
                onClick={() => {
                  navigate("/home_auth");
                }}
              >
                Atrás
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPost;
