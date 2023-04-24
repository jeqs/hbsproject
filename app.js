// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Motor de plantilla
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Aquí detallar rutas
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Inicio",
  });
});

app.get("/servicio", (req, res) => {
  res.render("servicio", {
    titulo: "Servicio",
    estado: false,
    servicio: "Curso",
  });
});

app.get("/equipo", (req, res) => {
  res.render("equipo", {
    titulo: "Equipo",
    //equipo: ['Diego', 'Pedro', 'Players']
    equipo: [
      { id: 1, nombre: "Diego" },
      { id: 2, nombre: "Pedro" },
      { id: 3, nombre: "Players" }
    ],
  });
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Página no encontrada"
    });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
