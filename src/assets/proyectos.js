export const proyectos = [
  {
    id: 1,
    title: "Casino Game",
    description:
      "Web con un juego de casino que tiene la logica para jugar con una Slot Machine de 3x3",
    imageUrl: "./casino.png",
    skills: [{ name: "React" }, { name: "Python" }],
    link: "/casino",
    details:
      "Este proyecto es una aplicación web desarrollada con React en el frontend y Python en el backend. La aplicación presenta un juego de casino que simula una máquina tragamonedas (Slot Machine) de 3x3. Los usuarios pueden interactuar con la interfaz para jugar, y la lógica del juego está implementada en el backend utilizando Python. El diseño de la interfaz es atractivo y fácil de usar, proporcionando una experiencia de usuario envolvente.",
    github: "https://github.com/Duvarax/python_casino_/tree/api_casino",
    images: ["./casino1.webp", "./casino2.webp"],
  },
  {
    id: 2,
    title: "Motonic",
    description: "Gestor de talleres mecanicos de motocicletas.",
    imageUrl: "./motonic/motonic.png",
    skills: [{ name: "Python" }, { name: "React" }, {name: "MySQL"},{name: "Javascript"}, {name: "HTML"}, {name: "CSS"}],
    link: "/motonic",
    details: "Motonic es un sistema de gestión diseñado para talleres mecánicos de motocicletas. Desarrollado con Python en el backend y React en el frontend, este proyecto ofrece una solución integral para administrar las operaciones diarias de un taller. Con una base de datos MySQL, Motonic permite a los usuarios gestionar clientes, vehículos, órdenes de trabajo y stock de manera eficiente. La interfaz de usuario es intuitiva y fácil de navegar, lo que facilita la adopción del sistema por parte del personal del taller.",
    github: "https://github.com/Duvarax/motonic",
    images: ["./motonic/login.png", "./motonic/register.png",  "./motonic/clientes.png", "./motonic/motos.png", "./motonic/stock.png"],
  },
  {
    id: 3,
    title: "Proyecto Tres",
    description: "Descripción del proyecto tres.",
    imageUrl: "./imagen1.jpg",
    skills: [{ name: "HTML5" }, { name: "CSS" }],
  },
  {
    id: 4,
    title: "Proyecto Cuatro",
    description: "Descripción del proyecto cuatro.",
    imageUrl: "./imagen1.jpg",
    skills: [{ name: "React" }, { name: "JavaScript" }],
  },
];
