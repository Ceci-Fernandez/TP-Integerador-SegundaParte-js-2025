// 🎯 CATÁLOGO UNIFICADO DE PELÍCULAS Y SERIES
const allMovies = [
  // PELÍCULAS
  {
    id: 6,
    title: "Django Unchained",
    type: "pelicula",
    category: "western",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    bannerImage:
      "https://images.hdqwalls.com/download/django-unchained-4k-2018-5k-1920x1080.jpg",
  },
  {
    id: 11,
    title: "El Padrino",
    type: "pelicula",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    bannerImage:
      "https://images.hdqwalls.com/download/the-godfather-4k-1920x1080.jpg",
  },
  {
    id: 12,
    title: "Pulp Fiction",
    type: "pelicula",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    bannerImage:
      "https://images.hdqwalls.com/download/pulp-fiction-4k-1920x1080.jpg",
  },
  {
    id: 13,
    title: "El Señor de los Anillos",
    type: "pelicula",
    category: "aventura",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    bannerImage:
      "https://images.hdqwalls.com/download/lord-of-the-rings-4k-1920x1080.jpg",
  },
  {
    id: 14,
    title: "Forrest Gump",
    type: "pelicula",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    bannerImage:
      "https://images.hdqwalls.com/download/forrest-gump-4k-1920x1080.jpg",
  },
  {
    id: 15,
    title: "Matrix",
    type: "pelicula",
    category: "ciencia-ficcion",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19921.jpg",
  },
  {
    id: 16,
    title: "Gladiador",
    type: "pelicula",
    category: "accion",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/1098686.jpg",
  },
  {
    id: 17,
    title: "Titanic",
    type: "pelicula",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/1098687.jpg",
  },
  {
    id: 18,
    title: "El Caballero de la Noche",
    type: "pelicula",
    category: "accion",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19922.jpg",
  },
  {
    id: 19,
    title: "Interestelar",
    type: "pelicula",
    category: "ciencia-ficcion",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19923.jpg",
  },
  {
    id: 20,
    title: "Parásitos",
    type: "pelicula",
    category: "thriller",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19924.jpg",
  },

  // SERIES
  {
    id: 3,
    title: "Friends",
    type: "serie",
    category: "comedia",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19925.jpg",
  },
  {
    id: 9,
    title: "Rick y Morty",
    type: "serie",
    category: "comedia",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19926.jpg",
  },
  {
    id: 10,
    title: "You Temporada 5",
    type: "serie",
    category: "terror",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19927.jpg",
  },
  {
    id: 21,
    title: "Breaking Bad",
    type: "serie",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19928.jpg",
  },
  {
    id: 22,
    title: "Game of Thrones",
    type: "serie",
    category: "aventura",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19929.jpg",
  },
  {
    id: 23,
    title: "Stranger Things",
    type: "serie",
    category: "ciencia-ficcion",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19930.jpg",
  },
  {
    id: 24,
    title: "The Boys",
    type: "serie",
    category: "accion",
    image: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19931.jpg",
  },
  {
    id: 25,
    title: "The Office",
    type: "serie",
    category: "comedia",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19932.jpg",
  },
  {
    id: 26,
    title: "Wednesday",
    type: "serie",
    category: "terror",
    image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19933.jpg",
  },
  {
    id: 27,
    title: "Sherlock",
    type: "serie",
    category: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19934.jpg",
  },
  {
    id: 28,
    title: "The Witcher",
    type: "serie",
    category: "aventura",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19935.jpg",
  },
  {
    id: 29,
    title: "House of Cards",
    type: "serie",
    category: "drama",
    image: "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19936.jpg",
  },
  {
    id: 30,
    title: "Peaky Blinders",
    type: "serie",
    category: "drama",
    image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    bannerImage: "https://wallpaperaccess.com/full/19937.jpg",
  },
];

// 🎯 CATÁLOGO DETALLADO PARA PELÍCULAS
const catalogoPeliculas = {
  6: {
    titulo: "Django Unchained",
    duracion: "165 min",
    genero: "Western, Drama, Acción",
    actores: [
      {
        nombre: "Jamie Foxx",
        enlace: "https://es.wikipedia.org/wiki/Jamie_Foxx",
      },
      {
        nombre: "Christoph Waltz",
        enlace: "https://es.wikipedia.org/wiki/Christoph_Waltz",
      },
      {
        nombre: "Leonardo DiCaprio",
        enlace: "https://es.wikipedia.org/wiki/Leonardo_DiCaprio",
      },
    ],
    resumen:
      "Un esclavo liberado se une a un cazarrecompensas alemán para rescatar a su esposa.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    trailer: "_iH0UBYDI4g",
  },
  11: {
    titulo: "El Padrino",
    duracion: "175 min",
    genero: "Drama, Crimen",
    actores: [
      {
        nombre: "Marlon Brando",
        enlace: "https://es.wikipedia.org/wiki/Marlon_Brando",
      },
      {
        nombre: "Al Pacino",
        enlace: "https://es.wikipedia.org/wiki/Al_Pacino",
      },
      {
        nombre: "James Caan",
        enlace: "https://es.wikipedia.org/wiki/James_Caan",
      },
    ],
    resumen:
      "La historia épica de la familia Corleone, una poderosa dinastía mafiosa en Nueva York.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "sY1S34973zA",
  },
  12: {
    titulo: "Pulp Fiction",
    duracion: "154 min",
    genero: "Crimen, Drama",
    actores: [
      {
        nombre: "John Travolta",
        enlace: "https://es.wikipedia.org/wiki/John_Travolta",
      },
      {
        nombre: "Samuel L. Jackson",
        enlace: "https://es.wikipedia.org/wiki/Samuel_L._Jackson",
      },
      {
        nombre: "Uma Thurman",
        enlace: "https://es.wikipedia.org/wiki/Uma_Thurman",
      },
    ],
    resumen: "Historias entrelazadas de crimen y redención en Los Ángeles.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "s7EdQ4FqbhY",
  },
  13: {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    duracion: "178 min",
    genero: "Fantasía, Aventura",
    actores: [
      {
        nombre: "Elijah Wood",
        enlace: "https://es.wikipedia.org/wiki/Elijah_Wood",
      },
      {
        nombre: "Ian McKellen",
        enlace: "https://es.wikipedia.org/wiki/Ian_McKellen",
      },
      {
        nombre: "Orlando Bloom",
        enlace: "https://es.wikipedia.org/wiki/Orlando_Bloom",
      },
    ],
    resumen:
      "Un hobbit debe emprender un peligroso viaje para destruir el Anillo Único.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    trailer: "V75dMMIW2B4",
  },
  14: {
    titulo: "Forrest Gump",
    duracion: "142 min",
    genero: "Drama, Romance",
    actores: [
      {
        nombre: "Tom Hanks",
        enlace: "https://es.wikipedia.org/wiki/Tom_Hanks",
      },
      {
        nombre: "Robin Wright",
        enlace: "https://es.wikipedia.org/wiki/Robin_Wright",
      },
      {
        nombre: "Gary Sinise",
        enlace: "https://es.wikipedia.org/wiki/Gary_Sinise",
      },
    ],
    resumen:
      "La extraordinaria vida de Forrest Gump, un hombre que influye en varios eventos históricos.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    trailer: "bLvqoHBptjg",
  },
  15: {
    titulo: "Matrix",
    duracion: "136 min",
    genero: "Ciencia Ficción, Acción",
    actores: [
      {
        nombre: "Keanu Reeves",
        enlace: "https://es.wikipedia.org/wiki/Keanu_Reeves",
      },
      {
        nombre: "Laurence Fishburne",
        enlace: "https://es.wikipedia.org/wiki/Laurence_Fishburne",
      },
      {
        nombre: "Carrie-Anne Moss",
        enlace: "https://es.wikipedia.org/wiki/Carrie-Anne_Moss",
      },
    ],
    resumen:
      "Neo descubre que la realidad es una simulación controlada por máquinas.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailer: "vKQi3bBA1y8",
  },
  16: {
    titulo: "Gladiador",
    duracion: "155 min",
    genero: "Acción, Drama, Aventura",
    actores: [
      {
        nombre: "Russell Crowe",
        enlace: "https://es.wikipedia.org/wiki/Russell_Crowe",
      },
      {
        nombre: "Joaquin Phoenix",
        enlace: "https://es.wikipedia.org/wiki/Joaquin_Phoenix",
      },
      {
        nombre: "Connie Nielsen",
        enlace: "https://es.wikipedia.org/wiki/Connie_Nielsen",
      },
    ],
    resumen:
      "Un general romano busca venganza contra el emperador corrupto que asesinó a su familia.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailer: "owK1qxDselE",
  },
  17: {
    titulo: "Titanic",
    duracion: "194 min",
    genero: "Romance, Drama",
    actores: [
      {
        nombre: "Leonardo DiCaprio",
        enlace: "https://es.wikipedia.org/wiki/Leonardo_DiCaprio",
      },
      {
        nombre: "Kate Winslet",
        enlace: "https://es.wikipedia.org/wiki/Kate_Winslet",
      },
      {
        nombre: "Billy Zane",
        enlace: "https://es.wikipedia.org/wiki/Billy_Zane",
      },
    ],
    resumen:
      "Una historia de amor épica a bordo del famoso barco condenado al desastre.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    trailer: "2e-eXJ6HgkQ",
  },
  18: {
    titulo: "El Caballero de la Noche",
    duracion: "152 min",
    genero: "Acción, Crimen, Drama",
    actores: [
      {
        nombre: "Christian Bale",
        enlace: "https://es.wikipedia.org/wiki/Christian_Bale",
      },
      {
        nombre: "Heath Ledger",
        enlace: "https://es.wikipedia.org/wiki/Heath_Ledger",
      },
      {
        nombre: "Aaron Eckhart",
        enlace: "https://es.wikipedia.org/wiki/Aaron_Eckhart",
      },
    ],
    resumen:
      "Batman enfrenta al Joker en una batalla épica por el alma de Ciudad Gótica.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    trailer: "EXeTwQWrcwY",
  },
  19: {
    titulo: "Interestelar",
    duracion: "169 min",
    genero: "Ciencia Ficción, Drama",
    actores: [
      {
        nombre: "Matthew McConaughey",
        enlace: "https://es.wikipedia.org/wiki/Matthew_McConaughey",
      },
      {
        nombre: "Anne Hathaway",
        enlace: "https://es.wikipedia.org/wiki/Anne_Hathaway",
      },
      {
        nombre: "Jessica Chastain",
        enlace: "https://es.wikipedia.org/wiki/Jessica_Chastain",
      },
    ],
    resumen:
      "Un grupo de exploradores viaja a través de un agujero de gusano para salvar a la humanidad.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    trailer: "zSWdZVtXT7E",
  },
  20: {
    titulo: "Parásitos",
    duracion: "132 min",
    genero: "Thriller, Drama, Comedia negra",
    actores: [
      {
        nombre: "Song Kang-ho",
        enlace: "https://es.wikipedia.org/wiki/Song_Kang-ho",
      },
      {
        nombre: "Lee Sun-kyun",
        enlace: "https://es.wikipedia.org/wiki/Lee_Sun-kyun",
      },
      {
        nombre: "Cho Yeo-jeong",
        enlace: "https://es.wikipedia.org/wiki/Cho_Yeo-jeong",
      },
    ],
    resumen:
      "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    trailer: "5xH0HfJHsaY",
  },
};

// 🎯 CATÁLOGO DETALLADO PARA SERIES
const catalogoSeries = {
  3: {
    titulo: "Friends",
    duracion: "22min por episodio",
    genero: "Comedia, Romance",
    actores: [
      {
        nombre: "Jennifer Aniston",
        enlace: "https://es.wikipedia.org/wiki/Jennifer_Aniston",
      },
      {
        nombre: "Courteney Cox",
        enlace: "https://es.wikipedia.org/wiki/Courteney_Cox",
      },
      {
        nombre: "Lisa Kudrow",
        enlace: "https://es.wikipedia.org/wiki/Lisa_Kudrow",
      },
    ],
    resumen: "Seis amigos navegan por la vida y el amor en Nueva York.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    trailer: "hDNNmeeJs1Q",
  },
  9: {
    titulo: "Rick y Morty",
    duracion: "23min por episodio",
    genero: "Animación, Comedia, Ciencia Ficción",
    actores: [
      {
        nombre: "Justin Roiland",
        enlace: "https://es.wikipedia.org/wiki/Justin_Roiland",
      },
      {
        nombre: "Chris Parnell",
        enlace: "https://es.wikipedia.org/wiki/Chris_Parnell",
      },
      {
        nombre: "Spencer Grammer",
        enlace: "https://es.wikipedia.org/wiki/Spencer_Grammer",
      },
    ],
    resumen:
      "Las aventuras interdimensionales de un científico alcohólico y su nieto.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
    trailer: "WNhH00OIPP0",
  },
  10: {
    titulo: "You Temporada 5",
    duracion: "50min por episodio",
    genero: "Thriller, Drama, Suspenso",
    actores: [
      {
        nombre: "Penn Badgley",
        enlace: "https://es.wikipedia.org/wiki/Penn_Badgley",
      },
      {
        nombre: "Victoria Pedretti",
        enlace: "https://es.wikipedia.org/wiki/Victoria_Pedretti",
      },
      {
        nombre: "James Scully",
        enlace: "https://es.wikipedia.org/wiki/James_Scully",
      },
    ],
    resumen:
      "Joe Goldberg continúa su obsesivo patrón de comportamiento en una nueva ciudad.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    trailer: "you-season5-trailer",
  },
  21: {
    titulo: "Breaking Bad",
    duracion: "47 min por episodio",
    genero: "Drama, Crimen, Thriller",
    actores: [
      {
        nombre: "Bryan Cranston",
        enlace: "https://es.wikipedia.org/wiki/Bryan_Cranston",
      },
      {
        nombre: "Aaron Paul",
        enlace: "https://es.wikipedia.org/wiki/Aaron_Paul",
      },
      {
        nombre: "Anna Gunn",
        enlace: "https://es.wikipedia.org/wiki/Anna_Gunn",
      },
    ],
    resumen:
      "Walter White, un profesor con cáncer terminal, se asocia con un ex alumno para fabricar metanfetaminas.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    trailer: "HhesaQXLuRY",
  },
  22: {
    titulo: "Game of Thrones",
    duracion: "57 min por episodio",
    genero: "Fantasía, Drama, Aventura",
    actores: [
      {
        nombre: "Emilia Clarke",
        enlace: "https://es.wikipedia.org/wiki/Emilia_Clarke",
      },
      {
        nombre: "Kit Harington",
        enlace: "https://es.wikipedia.org/wiki/Kit_Harington",
      },
      {
        nombre: "Peter Dinklage",
        enlace: "https://es.wikipedia.org/wiki/Peter_Dinklage",
      },
    ],
    resumen:
      "Varias familias nobles luchan por el control del Trono de Hierro en Westeros.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    trailer: "rlR4PJn8b8I",
  },
  23: {
    titulo: "Stranger Things",
    duracion: "51 min por episodio",
    genero: "Ciencia Ficción, Horror, Drama",
    actores: [
      {
        nombre: "Millie Bobby Brown",
        enlace: "https://es.wikipedia.org/wiki/Millie_Bobby_Brown",
      },
      {
        nombre: "Finn Wolfhard",
        enlace: "https://es.wikipedia.org/wiki/Finn_Wolfhard",
      },
      {
        nombre: "David Harbour",
        enlace: "https://es.wikipedia.org/wiki/David_Harbour",
      },
    ],
    resumen:
      "Un grupo de niños descubre fuerzas sobrenaturales en Hawkins, Indiana.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg",
    trailer: "b9EkMc79ZSU",
  },
  24: {
    titulo: "The Boys",
    duracion: "60 min por episodio",
    genero: "Acción, Ciencia Ficción, Comedia negra",
    actores: [
      {
        nombre: "Karl Urban",
        enlace: "https://es.wikipedia.org/wiki/Karl_Urban",
      },
      {
        nombre: "Jack Quaid",
        enlace: "https://es.wikipedia.org/wiki/Jack_Quaid",
      },
      {
        nombre: "Antony Starr",
        enlace: "https://es.wikipedia.org/wiki/Antony_Starr",
      },
    ],
    resumen:
      "Un grupo de vigilantes lucha contra superhéroes corruptos que abusan de sus poderes.",
    imagen: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    trailer: "M1bhOaLV4FU",
  },
  25: {
    titulo: "The Office",
    duracion: "22min por episodio",
    genero: "Comedia",
    actores: [
      {
        nombre: "Steve Carell",
        enlace: "https://es.wikipedia.org/wiki/Steve_Carell",
      },
      {
        nombre: "Rainn Wilson",
        enlace: "https://es.wikipedia.org/wiki/Rainn_Wilson",
      },
      {
        nombre: "John Krasinski",
        enlace: "https://es.wikipedia.org/wiki/John_Krasinski",
      },
    ],
    resumen:
      "Un vistazo cómico a la vida cotidiana de los empleados de una oficina en Scranton, Pensilvania.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    trailer: "v94iZ_eW2OE",
  },
  26: {
    titulo: "Wednesday",
    duracion: "50 min por episodio",
    genero: "Comedia negra, Terror, Misterio",
    actores: [
      {
        nombre: "Jenna Ortega",
        enlace: "https://es.wikipedia.org/wiki/Jenna_Ortega",
      },
      {
        nombre: "Gwendoline Christie",
        enlace: "https://es.wikipedia.org/wiki/Gwendoline_Christie",
      },
      {
        nombre: "Christina Ricci",
        enlace: "https://es.wikipedia.org/wiki/Christina_Ricci",
      },
    ],
    resumen:
      "Wednesday Addams investiga una serie de crímenes sobrenaturales en su nueva escuela.",
    imagen: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    trailer: "Di310WS8zWA",
  },
  27: {
    titulo: "Sherlock",
    duracion: "90 min por episodio",
    genero: "Crimen, Drama, Misterio",
    actores: [
      {
        nombre: "Benedict Cumberbatch",
        enlace: "https://es.wikipedia.org/wiki/Benedict_Cumberbatch",
      },
      {
        nombre: "Martin Freeman",
        enlace: "https://es.wikipedia.org/wiki/Martin_Freeman",
      },
      {
        nombre: "Una Stubbs",
        enlace: "https://es.wikipedia.org/wiki/Una_Stubbs",
      },
    ],
    resumen:
      "Un detective consultor brillante resuelve crímenes en el Londres moderno.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg",
    trailer: "jJmOpn65-jc",
  },
  28: {
    titulo: "The Witcher",
    duracion: "60 min por episodio",
    genero: "Acción, Aventura, Fantasía",
    actores: [
      {
        nombre: "Henry Cavill",
        enlace: "https://es.wikipedia.org/wiki/Henry_Cavill",
      },
      {
        nombre: "Anya Chalotra",
        enlace: "https://es.wikipedia.org/wiki/Anya_Chalotra",
      },
      {
        nombre: "Freya Allan",
        enlace: "https://es.wikipedia.org/wiki/Freya_Allan",
      },
    ],
    resumen:
      "Un cazador de monstruos solitario lucha por encontrar su lugar en un mundo donde las personas a menudo demuestran ser más malvadas que las bestias.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    trailer: "cHlnLhcwSQQ",
  },
  29: {
    titulo: "House of Cards",
    duracion: "51 min por episodio",
    genero: "Drama político, Thriller",
    actores: [
      {
        nombre: "Kevin Spacey",
        enlace: "https://es.wikipedia.org/wiki/Kevin_Spacey",
      },
      {
        nombre: "Robin Wright",
        enlace: "https://es.wikipedia.org/wiki/Robin_Wright",
      },
      {
        nombre: "Michael Kelly",
        enlace: "https://es.wikipedia.org/wiki/Michael_Kelly_(actor)",
      },
    ],
    resumen:
      "Un político despiadado y su ambiciosa esposa conspiran para ganar poder en Washington.",
    imagen: "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
    trailer: "ULwUzF1q5w4",
  },
  30: {
    titulo: "Peaky Blinders",
    duracion: "60 min por episodio",
    genero: "Drama histórico, Crimen",
    actores: [
      {
        nombre: "Cillian Murphy",
        enlace: "https://es.wikipedia.org/wiki/Cillian_Murphy",
      },
      {
        nombre: "Paul Anderson",
        enlace: "https://es.wikipedia.org/wiki/Paul_Anderson_(actor)",
      },
      {
        nombre: "Helen McCrory",
        enlace: "https://es.wikipedia.org/wiki/Helen_McCrory",
      },
    ],
    resumen:
      "Una familia de gánsteres en el Birmingham de la posguerra expande su imperio criminal.",
    imagen: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    trailer: "oVzVdvGIC7U",
  },
};

// 🎯 TEMPORADAS Y EPISODIOS DETALLADOS
const temporadas = {
  3: {
    // Friends
    1: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    2: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    3: { episodios: 25, videoId: "hDNNmeeJs1Q" },
    4: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    5: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    6: { episodios: 25, videoId: "hDNNmeeJs1Q" },
    7: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    8: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    9: { episodios: 24, videoId: "hDNNmeeJs1Q" },
    10: { episodios: 18, videoId: "hDNNmeeJs1Q" },
  },
  9: {
    // Rick y Morty
    1: { episodios: 11, videoId: "WNhH00OIPP0" },
    2: { episodios: 10, videoId: "WNhH00OIPP0" },
    3: { episodios: 10, videoId: "WNhH00OIPP0" },
    4: { episodios: 10, videoId: "WNhH00OIPP0" },
    5: { episodios: 10, videoId: "WNhH00OIPP0" },
    6: { episodios: 10, videoId: "WNhH00OIPP0" },
    7: { episodios: 10, videoId: "WNhH00OIPP0" },
  },
  10: {
    // You Temporada 5
    1: { episodios: 10, videoId: "you-season5-trailer" },
    2: { episodios: 10, videoId: "you-season5-trailer" },
    3: { episodios: 10, videoId: "you-season5-trailer" },
    4: { episodios: 10, videoId: "you-season5-trailer" },
    5: { episodios: 10, videoId: "you-season5-trailer" },
  },
  21: {
    // Breaking Bad
    1: { episodios: 7, videoId: "HhesaQXLuRY" },
    2: { episodios: 13, videoId: "HhesaQXLuRY" },
    3: { episodios: 13, videoId: "HhesaQXLuRY" },
    4: { episodios: 13, videoId: "HhesaQXLuRY" },
    5: { episodios: 16, videoId: "HhesaQXLuRY" },
  },
  22: {
    // Game of Thrones
    1: { episodios: 10, videoId: "rlR4PJn8b8I" },
    2: { episodios: 10, videoId: "rlR4PJn8b8I" },
    3: { episodios: 10, videoId: "rlR4PJn8b8I" },
    4: { episodios: 10, videoId: "rlR4PJn8b8I" },
    5: { episodios: 10, videoId: "rlR4PJn8b8I" },
    6: { episodios: 10, videoId: "rlR4PJn8b8I" },
    7: { episodios: 7, videoId: "rlR4PJn8b8I" },
    8: { episodios: 6, videoId: "rlR4PJn8b8I" },
  },
  23: {
    // Stranger Things
    1: { episodios: 8, videoId: "b9EkMc79ZSU" },
    2: { episodios: 9, videoId: "b9EkMc79ZSU" },
    3: { episodios: 8, videoId: "b9EkMc79ZSU" },
    4: { episodios: 9, videoId: "b9EkMc79ZSU" },
  },
  24: {
    // The Boys
    1: { episodios: 8, videoId: "M1bhOaLV4FU" },
    2: { episodios: 8, videoId: "M1bhOaLV4FU" },
    3: { episodios: 8, videoId: "M1bhOaLV4FU" },
    4: { episodios: 8, videoId: "M1bhOaLV4FU" },
  },
  25: {
    // The Office
    1: { episodios: 6, videoId: "v94iZ_eW2OE" },
    2: { episodios: 22, videoId: "v94iZ_eW2OE" },
    3: { episodios: 25, videoId: "v94iZ_eW2OE" },
    4: { episodios: 19, videoId: "v94iZ_eW2OE" },
    5: { episodios: 28, videoId: "v94iZ_eW2OE" },
    6: { episodios: 26, videoId: "v94iZ_eW2OE" },
    7: { episodios: 26, videoId: "v94iZ_eW2OE" },
    8: { episodios: 24, videoId: "v94iZ_eW2OE" },
    9: { episodios: 25, videoId: "v94iZ_eW2OE" },
  },
  26: {
    // Wednesday
    1: { episodios: 8, videoId: "Di310WS8zWA" },
  },
  27: {
    // Sherlock
    1: { episodios: 3, videoId: "jJmOpn65-jc" },
    2: { episodios: 3, videoId: "jJmOpn65-jc" },
    3: { episodios: 3, videoId: "jJmOpn65-jc" },
    4: { episodios: 3, videoId: "jJmOpn65-jc" },
  },
  28: {
    // The Witcher
    1: { episodios: 8, videoId: "cHlnLhcwSQQ" },
    2: { episodios: 8, videoId: "cHlnLhcwSQQ" },
    3: { episodios: 8, videoId: "cHlnLhcwSQQ" },
  },
  29: {
    // House of Cards
    1: { episodios: 13, videoId: "ULwUzF1q5w4" },
    2: { episodios: 13, videoId: "ULwUzF1q5w4" },
    3: { episodios: 13, videoId: "ULwUzF1q5w4" },
    4: { episodios: 13, videoId: "ULwUzF1q5w4" },
    5: { episodios: 13, videoId: "ULwUzF1q5w4" },
    6: { episodios: 8, videoId: "ULwUzF1q5w4" },
  },
  30: {
    // Peaky Blinders
    1: { episodios: 6, videoId: "oVzVdvGIC7U" },
    2: { episodios: 6, videoId: "oVzVdvGIC7U" },
    3: { episodios: 6, videoId: "oVzVdvGIC7U" },
    4: { episodios: 6, videoId: "oVzVdvGIC7U" },
    5: { episodios: 6, videoId: "oVzVdvGIC7U" },
    6: { episodios: 6, videoId: "oVzVdvGIC7U" },
  },
};

// Hacer variables globales
window.allMovies = allMovies;
window.catalogoPeliculas = catalogoPeliculas;
window.catalogoSeries = catalogoSeries;
window.temporadas = temporadas;
