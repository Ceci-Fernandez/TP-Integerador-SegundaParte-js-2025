const catalogoCompleto = {
  peliculas: [
    {
      id: "pelicula-1",
      titulo: "El Padrino",
      duracion: "175 min",
      genero: ["Drama", "Crimen"],
      año: 1972,
      director: "Francis Ford Coppola",
      actores: [
        {
          nombre: "Marlon Brando",
          wikipedia: "https://es.wikipedia.org/wiki/Marlon_Brando",
        },
        {
          nombre: "Al Pacino",
          wikipedia: "https://es.wikipedia.org/wiki/Al_Pacino",
        },
        {
          nombre: "James Caan",
          wikipedia: "https://es.wikipedia.org/wiki/James_Caan",
        },
        {
          nombre: "Robert Duvall",
          wikipedia: "https://es.wikipedia.org/wiki/Robert_Duvall",
        },
      ],
      resumen:
        "La historia épica de la familia Corleone, una poderosa dinastía mafiosa en Nueva York. Cuando el patriarca Vito Corleone es atacado, su hijo menor Michael se ve obligado a entrar en el negocio familiar y transformarse en el nuevo don.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      calificacion: 9.2,
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    },
    {
      id: "pelicula-2",
      titulo: "Pulp Fiction",
      duracion: "154 min",
      genero: ["Crimen", "Drama"],
      año: 1994,
      director: "Quentin Tarantino",
      actores: [
        {
          nombre: "John Travolta",
          wikipedia: "https://es.wikipedia.org/wiki/John_Travolta",
        },
        {
          nombre: "Samuel L. Jackson",
          wikipedia: "https://es.wikipedia.org/wiki/Samuel_L._Jackson",
        },
        {
          nombre: "Uma Thurman",
          wikipedia: "https://es.wikipedia.org/wiki/Uma_Thurman",
        },
        {
          nombre: "Bruce Willis",
          wikipedia: "https://es.wikipedia.org/wiki/Bruce_Willis",
        },
      ],
      resumen:
        "Historias entrelazadas de crimen y redención en Los Ángeles. Dos sicarios, un boxeador y la esposa de un gánster se cruzan en una narrativa no lineal llena de diálogos memorables y violencia estilizada.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      calificacion: 8.9,
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    },
    {
      id: "pelicula-3",
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      duracion: "178 min",
      genero: ["Fantasía", "Aventura"],
      año: 2001,
      director: "Peter Jackson",
      actores: [
        {
          nombre: "Elijah Wood",
          wikipedia: "https://es.wikipedia.org/wiki/Elijah_Wood",
        },
        {
          nombre: "Ian McKellen",
          wikipedia: "https://es.wikipedia.org/wiki/Ian_McKellen",
        },
        {
          nombre: "Orlando Bloom",
          wikipedia: "https://es.wikipedia.org/wiki/Orlando_Bloom",
        },
        {
          nombre: "Viggo Mortensen",
          wikipedia: "https://es.wikipedia.org/wiki/Viggo_Mortensen",
        },
      ],
      resumen:
        "Un hobbit llamado Frodo hereda un anillo mágico de su tío Bilbo, sin saber que es el Anillo Único forjado por el Señor Oscuro Sauron. Debe emprender un peligroso viaje para destruirlo y salvar la Tierra Media.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      calificacion: 8.8,
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    },
    {
      id: "pelicula-4",
      titulo: "Forrest Gump",
      duracion: "142 min",
      genero: ["Drama", "Romance"],
      año: 1994,
      director: "Robert Zemeckis",
      actores: [
        {
          nombre: "Tom Hanks",
          wikipedia: "https://es.wikipedia.org/wiki/Tom_Hanks",
        },
        {
          nombre: "Robin Wright",
          wikipedia: "https://es.wikipedia.org/wiki/Robin_Wright",
        },
        {
          nombre: "Gary Sinise",
          wikipedia: "https://es.wikipedia.org/wiki/Gary_Sinise",
        },
        {
          nombre: "Sally Field",
          wikipedia: "https://es.wikipedia.org/wiki/Sally_Field",
        },
      ],
      resumen:
        "La extraordinaria vida de Forrest Gump, un hombre con discapacidad intelectual que, sin darse cuenta, influye en varios eventos históricos de Estados Unidos mientras persigue su amor de la infancia, Jenny.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      calificacion: 8.8,
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    },
    {
      id: "pelicula-5",
      titulo: "Matrix",
      duracion: "136 min",
      genero: ["Ciencia Ficción", "Acción"],
      año: 1999,
      director: "Lana Wachowski, Lilly Wachowski",
      actores: [
        {
          nombre: "Keanu Reeves",
          wikipedia: "https://es.wikipedia.org/wiki/Keanu_Reeves",
        },
        {
          nombre: "Laurence Fishburne",
          wikipedia: "https://es.wikipedia.org/wiki/Laurence_Fishburne",
        },
        {
          nombre: "Carrie-Anne Moss",
          wikipedia: "https://es.wikipedia.org/wiki/Carrie-Anne_Moss",
        },
        {
          nombre: "Hugo Weaving",
          wikipedia: "https://es.wikipedia.org/wiki/Hugo_Weaving",
        },
      ],
      resumen:
        "Neo, un programador y hacker, descubre que la realidad que conoce es una simulación controlada por máquinas. Debe elegir entre la cómoda ilusión y la dura verdad, uniéndose a la resistencia liderada por Morfeo.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      calificacion: 8.7,
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    },
    {
      id: "pelicula-6",
      titulo: "Gladiador",
      duracion: "155 min",
      genero: ["Acción", "Drama", "Historia"],
      año: 2000,
      director: "Ridley Scott",
      actores: [
        {
          nombre: "Russell Crowe",
          wikipedia: "https://es.wikipedia.org/wiki/Russell_Crowe",
        },
        {
          nombre: "Joaquin Phoenix",
          wikipedia: "https://es.wikipedia.org/wiki/Joaquin_Phoenix",
        },
        {
          nombre: "Connie Nielsen",
          wikipedia: "https://es.wikipedia.org/wiki/Connie_Nielsen",
        },
        {
          nombre: "Oliver Reed",
          wikipedia: "https://es.wikipedia.org/wiki/Oliver_Reed",
        },
      ],
      resumen:
        "Máximo Décimo Meridio, un general romano, es traicionado por el corrupto príncipe Cómodo. Reducido a la esclavitud, se convierte en gladiador y busca venganza contra el hombre que asesinó a su familia y emperador.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      calificacion: 8.5,
      trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
    },
    {
      id: "pelicula-7",
      titulo: "Titanic",
      duracion: "194 min",
      genero: ["Romance", "Drama"],
      año: 1997,
      director: "James Cameron",
      actores: [
        {
          nombre: "Leonardo DiCaprio",
          wikipedia: "https://es.wikipedia.org/wiki/Leonardo_DiCaprio",
        },
        {
          nombre: "Kate Winslet",
          wikipedia: "https://es.wikipedia.org/wiki/Kate_Winslet",
        },
        {
          nombre: "Billy Zane",
          wikipedia: "https://es.wikipedia.org/wiki/Billy_Zane",
        },
        {
          nombre: "Gloria Stuart",
          wikipedia: "https://es.wikipedia.org/wiki/Gloria_Stuart",
        },
      ],
      resumen:
        "La épica historia de amor entre Jack, un artista pobre, y Rose, una joven de clase alta, a bordo del 'insumergible' Titanic. Su romance florece mientras el barco se dirige hacia su trágico destino en el Atlántico Norte.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      calificacion: 7.8,
      trailer: "https://www.youtube.com/watch?v=2e-eXJ6HgkQ",
    },
    {
      id: "pelicula-8",
      titulo: "El Caballero de la Noche",
      duracion: "152 min",
      genero: ["Acción", "Crimen", "Drama"],
      año: 2008,
      director: "Christopher Nolan",
      actores: [
        {
          nombre: "Christian Bale",
          wikipedia: "https://es.wikipedia.org/wiki/Christian_Bale",
        },
        {
          nombre: "Heath Ledger",
          wikipedia: "https://es.wikipedia.org/wiki/Heath_Ledger",
        },
        {
          nombre: "Aaron Eckhart",
          wikipedia: "https://es.wikipedia.org/wiki/Aaron_Eckhart",
        },
        {
          nombre: "Michael Caine",
          wikipedia: "https://es.wikipedia.org/wiki/Michael_Caine",
        },
      ],
      resumen:
        "Batman enfrenta su mayor desafío cuando el Joker siembra el caos en Gotham City. Con la ayuda del Comisionado Gordon y el fiscal Harvey Dent, Batman debe detener al payaso del crimen antes de que destruya la ciudad.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      calificacion: 9.0,
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
    {
      id: "pelicula-9",
      titulo: "Interestelar",
      duracion: "169 min",
      genero: ["Ciencia Ficción", "Drama"],
      año: 2014,
      director: "Christopher Nolan",
      actores: [
        {
          nombre: "Matthew McConaughey",
          wikipedia: "https://es.wikipedia.org/wiki/Matthew_McConaughey",
        },
        {
          nombre: "Anne Hathaway",
          wikipedia: "https://es.wikipedia.org/wiki/Anne_Hathaway",
        },
        {
          nombre: "Jessica Chastain",
          wikipedia: "https://es.wikipedia.org/wiki/Jessica_Chastain",
        },
        {
          nombre: "Michael Caine",
          wikipedia: "https://es.wikipedia.org/wiki/Michael_Caine",
        },
      ],
      resumen:
        "En un futuro donde la Tierra está muriendo, un grupo de astronautas viaja a través de un agujero de gusano cerca de Saturno para encontrar un nuevo hogar para la humanidad. Una épica aventura sobre el amor, el sacrificio y la supervivencia.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      calificacion: 8.6,
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },
    {
      id: "pelicula-10",
      titulo: "Parásitos",
      duracion: "132 min",
      genero: ["Thriller", "Drama", "Comedia"],
      año: 2019,
      director: "Bong Joon-ho",
      actores: [
        {
          nombre: "Song Kang-ho",
          wikipedia: "https://es.wikipedia.org/wiki/Song_Kang-ho",
        },
        {
          nombre: "Lee Sun-kyun",
          wikipedia: "https://es.wikipedia.org/wiki/Lee_Sun-kyun",
        },
        {
          nombre: "Cho Yeo-jeong",
          wikipedia: "https://es.wikipedia.org/wiki/Cho_Yeo-jeong",
        },
        {
          nombre: "Choi Woo-shik",
          wikipedia: "https://es.wikipedia.org/wiki/Choi_Woo-shik",
        },
      ],
      resumen:
        "Una familia pobre se infiltra en la vida de una familia rica haciéndose pasar por trabajadores calificados. Lo que comienza como una estafa ingeniosa se convierte en una escalofriante exploración de la desigualdad de clases.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      calificacion: 8.6,
      trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    },
  ],

  series: [
    {
      id: "serie-1",
      titulo: "Breaking Bad",
      duracion: "47 min por episodio",
      temporadas: 5,
      episodios: 62,
      genero: ["Drama", "Crimen", "Thriller"],
      año: "2008-2013",
      creador: "Vince Gilligan",
      actores: [
        {
          nombre: "Bryan Cranston",
          wikipedia: "https://es.wikipedia.org/wiki/Bryan_Cranston",
        },
        {
          nombre: "Aaron Paul",
          wikipedia: "https://es.wikipedia.org/wiki/Aaron_Paul",
        },
        {
          nombre: "Anna Gunn",
          wikipedia: "https://es.wikipedia.org/wiki/Anna_Gunn",
        },
        {
          nombre: "Dean Norris",
          wikipedia: "https://es.wikipedia.org/wiki/Dean_Norris",
        },
      ],
      resumen:
        "Walter White, un profesor de química de secundaria con cáncer terminal, se asocia con un ex alumno para fabricar y vender metanfetaminas con el fin de asegurar el futuro financiero de su familia.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      calificacion: 9.5,
      trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
      capitulos: [
        {
          numero: 1,
          titulo: "Pilot",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTcwNDM5MTMzOQ@@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "Cat's in the Bag...",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTcwMjM5MTMzOQ@@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "...And the Bag's in the River",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTMzODMxOTU1M15BMl5BanBnXkFtZTcwMzM5MTMzOQ@@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "Cancer Man",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTQwMTQ3MjUtMzY4ZC00YjkwLWJkNTYtNzM4MDI1ZjMwNzZmXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "Gray Matter",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTkwODQxMDgzOV5BMl5BanBnXkFtZTcwNjM5MTMzOQ@@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-2",
      titulo: "Game of Thrones",
      duracion: "57 min por episodio",
      temporadas: 8,
      episodios: 73,
      genero: ["Fantasía", "Drama", "Aventura"],
      año: "2011-2019",
      creador: "David Benioff, D.B. Weiss",
      actores: [
        {
          nombre: "Emilia Clarke",
          wikipedia: "https://es.wikipedia.org/wiki/Emilia_Clarke",
        },
        {
          nombre: "Kit Harington",
          wikipedia: "https://es.wikipedia.org/wiki/Kit_Harington",
        },
        {
          nombre: "Peter Dinklage",
          wikipedia: "https://es.wikipedia.org/wiki/Peter_Dinklage",
        },
        {
          nombre: "Lena Headey",
          wikipedia: "https://es.wikipedia.org/wiki/Lena_Headey",
        },
      ],
      resumen:
        "En los continentes de Westeros y Essos, varias familias nobles luchan por el control del Trono de Hierro, mientras una antigua amenaza regresa para poner en peligro tanto a los vivos como a los muertos.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      calificacion: 9.3,
      trailer: "https://www.youtube.com/watch?v=rlR4PJn8b8I",
      capitulos: [
        {
          numero: 1,
          titulo: "Winter Is Coming",
          imagen: "/placeholder.svg?height=200&width=300",
        },
        {
          numero: 2,
          titulo: "The Kingsroad",
          imagen: "/placeholder.svg?height=200&width=300",
        },
        {
          numero: 3,
          titulo: "Lord Snow",
          imagen: "/placeholder.svg?height=200&width=300",
        },
        {
          numero: 4,
          titulo: "Cripples, Bastards, and Broken Things",
          imagen: "/placeholder.svg?height=200&width=300",
        },
        {
          numero: 5,
          titulo: "The Wolf and the Lion",
          imagen: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "serie-3",
      titulo: "Stranger Things",
      duracion: "51 min por episodio",
      temporadas: 4,
      episodios: 42,
      genero: ["Ciencia Ficción", "Horror", "Drama"],
      año: "2016-presente",
      creador: "The Duffer Brothers",
      actores: [
        {
          nombre: "Millie Bobby Brown",
          wikipedia: "https://es.wikipedia.org/wiki/Millie_Bobby_Brown",
        },
        {
          nombre: "Finn Wolfhard",
          wikipedia: "https://es.wikipedia.org/wiki/Finn_Wolfhard",
        },
        {
          nombre: "David Harbour",
          wikipedia: "https://es.wikipedia.org/wiki/David_Harbour",
        },
        {
          nombre: "Winona Ryder",
          wikipedia: "https://es.wikipedia.org/wiki/Winona_Ryder",
        },
      ],
      resumen:
        "En la década de 1980, en el pueblo ficticio de Hawkins, Indiana, un grupo de niños descubre fuerzas sobrenaturales y experimentos gubernamentales secretos que amenazan su mundo.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg",
      calificacion: 8.7,
      trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
      capitulos: [
        {
          numero: 1,
          titulo: "The Vanishing of Will Byers",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "The Weirdo on Maple Street",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTQxOTYzNTMxM15BMl5BanBnXkFtZTgwODAxMzYzOTE@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "Holly, Jolly",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTYxMTg3MTMxNl5BMl5BanBnXkFtZTgwOTAxMzYzOTE@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "The Body",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTcxMTg3MTMxNl5BMl5BanBnXkFtZTgwOTExMzYzOTE@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "Chapter Five: Dig Dug",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTgxMTg3MTMxNl5BMl5BanBnXkFtZTgwOTIxMzYzOTE@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-4",
      titulo: "The Crown",
      duracion: "58 min por episodio",
      temporadas: 6,
      episodios: 60,
      genero: ["Drama", "Historia", "Biografía"],
      año: "2016-2023",
      creador: "Peter Morgan",
      actores: [
        {
          nombre: "Claire Foy",
          wikipedia: "https://es.wikipedia.org/wiki/Claire_Foy",
        },
        {
          nombre: "Olivia Colman",
          wikipedia: "https://es.wikipedia.org/wiki/Olivia_Colman",
        },
        {
          nombre: "Imelda Staunton",
          wikipedia: "https://es.wikipedia.org/wiki/Imelda_Staunton",
        },
        {
          nombre: "Matt Smith",
          wikipedia: "https://es.wikipedia.org/wiki/Matt_Smith",
        },
      ],
      resumen:
        "La serie sigue la vida de la Reina Isabel II desde la década de 1940 hasta los tiempos modernos, explorando los desafíos políticos y personales que enfrentó durante su reinado.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctYjc4Ny00ODBmLTg4NWEtNjY2ZmZhYzEyN2RmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
      calificacion: 8.6,
      trailer: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
      capitulos: [
        {
          numero: 1,
          titulo: "Wolferton Splash",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTYxNzc2NDQyNV5BMl5BanBnXkFtZTgwNzE1MzE2OTE@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "Hyde Park Corner",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTc0NzY2NDQyNV5BMl5BanBnXkFtZTgwODE1MzE2OTE@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "Windsor",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTg0NzY2NDQyNV5BMl5BanBnXkFtZTgwOTE1MzE2OTE@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "Act of God",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTk0NzY2NDQyNV5BMl5BanBnXkFtZTgwOTI1MzE2OTE@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "Smoke and Mirrors",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTl0NzY2NDQyNV5BMl5BanBnXkFtZTgwOTM1MzE2OTE@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-5",
      titulo: "The Office",
      duracion: "22 min por episodio",
      temporadas: 9,
      episodios: 201,
      genero: ["Comedia", "Mockumentary"],
      año: "2005-2013",
      creador: "Greg Daniels",
      actores: [
        {
          nombre: "Steve Carell",
          wikipedia: "https://es.wikipedia.org/wiki/Steve_Carell",
        },
        {
          nombre: "John Krasinski",
          wikipedia: "https://es.wikipedia.org/wiki/John_Krasinski",
        },
        {
          nombre: "Jenna Fischer",
          wikipedia: "https://es.wikipedia.org/wiki/Jenna_Fischer",
        },
        {
          nombre: "Rainn Wilson",
          wikipedia: "https://es.wikipedia.org/wiki/Rainn_Wilson",
        },
      ],
      resumen:
        "Un mockumentary que sigue la vida diaria de los empleados de la oficina de Scranton de la empresa de papel Dunder Mifflin, liderados por el incompetente pero bien intencionado Michael Scott.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
      calificacion: 8.9,
      trailer: "https://www.youtube.com/watch?v=LHOtME2DL4g",
      capitulos: [
        {
          numero: 1,
          titulo: "Pilot",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTgxMzk0MjkxNl5BMl5BanBnXkFtZTcwOTE5MzUyMw@@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "Diversity Day",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTk4MzQ0MjkxNl5BMl5BanBnXkFtZTcwOTI5MzUyMw@@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "Health Care",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTl4MzQ0MjkxNl5BMl5BanBnXkFtZTcwOTM5MzUyMw@@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "The Alliance",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTm4MzQ0MjkxNl5BMl5BanBnXkFtZTcwOTQ5MzUyMw@@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "Basketball",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMTn4MzQ0MjkxNl5BMl5BanBnXkFtZTcwOTU5MzUyMw@@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-6",
      titulo: "Friends",
      duracion: "22 min por episodio",
      temporadas: 10,
      episodios: 236,
      genero: ["Comedia", "Romance"],
      año: "1994-2004",
      creador: "David Crane, Marta Kauffman",
      actores: [
        {
          nombre: "Jennifer Aniston",
          wikipedia: "https://es.wikipedia.org/wiki/Jennifer_Aniston",
        },
        {
          nombre: "Courteney Cox",
          wikipedia: "https://es.wikipedia.org/wiki/Courteney_Cox",
        },
        {
          nombre: "Lisa Kudrow",
          wikipedia: "https://es.wikipedia.org/wiki/Lisa_Kudrow",
        },
        {
          nombre: "Matt LeBlanc",
          wikipedia: "https://es.wikipedia.org/wiki/Matt_LeBlanc",
        },
        {
          nombre: "Matthew Perry",
          wikipedia: "https://es.wikipedia.org/wiki/Matthew_Perry",
        },
        {
          nombre: "David Schwimmer",
          wikipedia: "https://es.wikipedia.org/wiki/David_Schwimmer",
        },
      ],
      resumen:
        "Sigue las aventuras personales y profesionales de seis amigos veinteañeros que viven en Manhattan, Nueva York, navegando por las complejidades de la vida adulta, el amor y la amistad.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      calificacion: 8.9,
      trailer: "https://www.youtube.com/watch?v=hDNNmeeJs1Q",
      capitulos: [
        {
          numero: 1,
          titulo: "The One Where Monica Gets a Roommate",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNTg0NjEwNjMtYzVlMS00YzQ0LWIzYWEtZWZmYjE2OTBhMjdkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "The One with the Sonogram at the End",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNjE0NjEwNjMtYzVlMS00YzQ0LWIzYWEtZWZmYjE2OTBhMjdkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "The One with the Thumb",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNzE0NjEwNjMtYzVlMS00YzQ0LWIzYWEtZWZmYjE2OTBhMjdkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "The One with George Stephanopoulos",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BODE0NjEwNjMtYzVlMS00YzQ0LWIzYWEtZWZmYjE2OTBhMjdkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "The One with the East German Laundry Detergent",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BOTE0NjEwNjMtYzVlMS00YzQ0LWIzYWEtZWZmYjE2OTBhMjdkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-7",
      titulo: "The Mandalorian",
      duracion: "40 min por episodio",
      temporadas: 3,
      episodios: 24,
      genero: ["Ciencia Ficción", "Aventura", "Western"],
      año: "2019-presente",
      creador: "Jon Favreau",
      actores: [
        {
          nombre: "Pedro Pascal",
          wikipedia: "https://es.wikipedia.org/wiki/Pedro_Pascal",
        },
        {
          nombre: "Gina Carano",
          wikipedia: "https://es.wikipedia.org/wiki/Gina_Carano",
        },
        {
          nombre: "Carl Weathers",
          wikipedia: "https://es.wikipedia.org/wiki/Carl_Weathers",
        },
        {
          nombre: "Giancarlo Esposito",
          wikipedia: "https://es.wikipedia.org/wiki/Giancarlo_Esposito",
        },
      ],
      resumen:
        "Ambientada en el universo de Star Wars, sigue las aventuras de Din Djarin, un cazarrecompensas mandaloriano, mientras protege a un misterioso niño conocido como 'El Niño' o Baby Yoda.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      calificacion: 8.8,
      trailer: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
      capitulos: [
        {
          numero: 1,
          titulo: "The Mandalorian",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BN2ZkMDJjMjUtM2M2Ni00YzI4LWJmNWUtYmJkNDQyNzUwMzQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "The Child",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNzZkMDJjMjUtM2M2Ni00YzI4LWJmNWUtYmJkNDQyNzUwMzQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "The Sin",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BODZkMDJjMjUtM2M2Ni00YzI4LWJmNWUtYmJkNDQyNzUwMzQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "Sanctuary",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BOTZkMDJjMjUtM2M2Ni00YzI4LWJmNWUtYmJkNDQyNzUwMzQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "The Gunslinger",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMDZkMDJjMjUtM2M2Ni00YzI4LWJmNWUtYmJkNDQyNzUwMzQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-8",
      titulo: "Sherlock",
      duracion: "88 min por episodio",
      temporadas: 4,
      episodios: 13,
      genero: ["Crimen", "Drama", "Misterio"],
      año: "2010-2017",
      creador: "Mark Gatiss, Steven Moffat",
      actores: [
        {
          nombre: "Benedict Cumberbatch",
          wikipedia: "https://es.wikipedia.org/wiki/Benedict_Cumberbatch",
        },
        {
          nombre: "Martin Freeman",
          wikipedia: "https://es.wikipedia.org/wiki/Martin_Freeman",
        },
        {
          nombre: "Rupert Graves",
          wikipedia: "https://es.wikipedia.org/wiki/Rupert_Graves",
        },
        {
          nombre: "Una Stubbs",
          wikipedia: "https://es.wikipedia.org/wiki/Una_Stubbs",
        },
      ],
      resumen:
        "Una adaptación moderna de las historias de Sherlock Holmes de Arthur Conan Doyle, ambientada en el Londres del siglo XXI, donde Holmes usa tecnología moderna para resolver crímenes complejos.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg",
      calificacion: 9.1,
      trailer: "https://www.youtube.com/watch?v=xK7S9mrFWL4",
      capitulos: [
        {
          numero: 1,
          titulo: "A Study in Pink",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjQwMTg4MjI0N15BMl5BanBnXkFtZTcwNjc3NjM5Mw@@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "The Blind Banker",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjUwMTg4MjI0N15BMl5BanBnXkFtZTcwNzc3NjM5Mw@@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "The Great Game",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjYwMTg4MjI0N15BMl5BanBnXkFtZTcwODc3NjM5Mw@@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "A Scandal in Belgravia",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjcwMTg4MjI0N15BMl5BanBnXkFtZTcwOTc3NjM5Mw@@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "The Hounds of Baskerville",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjgwMTg4MjI0N15BMl5BanBnXkFtZTcwMDQ3NjM5Mw@@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-9",
      titulo: "The Witcher",
      duracion: "60 min por episodio",
      temporadas: 3,
      episodios: 24,
      genero: ["Fantasía", "Drama", "Aventura"],
      año: "2019-presente",
      creador: "Lauren Schmidt Hissrich",
      actores: [
        {
          nombre: "Henry Cavill",
          wikipedia: "https://es.wikipedia.org/wiki/Henry_Cavill",
        },
        {
          nombre: "Anya Chalotra",
          wikipedia: "https://es.wikipedia.org/wiki/Anya_Chalotra",
        },
        {
          nombre: "Freya Allan",
          wikipedia: "https://es.wikipedia.org/wiki/Freya_Allan",
        },
        {
          nombre: "Joey Batey",
          wikipedia: "https://es.wikipedia.org/wiki/Joey_Batey",
        },
      ],
      resumen:
        "Basada en la saga de libros de Andrzej Sapkowski, sigue a Geralt de Rivia, un cazador de monstruos solitario, mientras busca su lugar en un mundo donde las personas a menudo resultan más malvadas que las bestias.",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      calificacion: 8.2,
      trailer: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
      capitulos: [
        {
          numero: 1,
          titulo: "The End's Beginning",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNjE1NDI2NjI2NF5BMl5BanBnXkFtZTgwNjcyODg5NzM@._V1_.jpg",
        },
        {
          numero: 2,
          titulo: "Four Marks",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BNzE1NDI2NjI2NF5BMl5BanBnXkFtZTgwNzc5ODg5NzM@._V1_.jpg",
        },
        {
          numero: 3,
          titulo: "Betrayer Moon",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BODE1NDI2NjI2NF5BMl5BanBnXkFtZTgwODc5ODg5NzM@._V1_.jpg",
        },
        {
          numero: 4,
          titulo: "Of Banquets, Bastards and Burials",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BOTE1NDI2NjI2NF5BMl5BanBnXkFtZTgwOTc5ODg5NzM@._V1_.jpg",
        },
        {
          numero: 5,
          titulo: "Bottled Appetites",
          imagen:
            "https://m.media-amazon.com/images/M/MV5BMjA1NDI2NjI2NF5BMl5BanBnXkFtZTgwMDQ5ODg5NzM@._V1_.jpg",
        },
      ],
    },
    {
      id: "serie-10",
      titulo: "El Eternauta",
      duracion: "45 min por episodio",
      temporadas: 1,
      episodios: 8,
      genero: ["Ciencia Ficción", "Drama", "Thriller"],
      año: "2024",
      creador: "Bruno Stagnaro",
      actores: [
        {
          nombre: "Ricardo Darín",
          wikipedia: "https://es.wikipedia.org/wiki/Ricardo_Dar%C3%ADn",
        },
        {
          nombre: "Carla Peterson",
          wikipedia: "https://es.wikipedia.org/wiki/Carla_Peterson",
        },
        {
          nombre: "César Troncoso",
          wikipedia: "https://es.wikipedia.org/wiki/C%C3%A9sar_Troncoso",
        },
        {
          nombre: "Ariel Staltari",
          wikipedia: "https://es.wikipedia.org/wiki/Ariel_Staltari",
        },
      ],
      resumen:
        "Adaptación de la icónica historieta argentina de Héctor Germán Oesterheld. Juan Salvo y sus amigos enfrentan una invasión alienígena que comienza con una misteriosa nevada mortal en Buenos Aires.",
      imagen: "/img/peliculas/eleternauta1280x720.jpg",
      calificacion: 8.4,
      trailer: "https://www.youtube.com/watch?v=sfAc2U20uyg",
      capitulos: [
        {
          numero: 1,
          titulo: "La Nevada",
          imagen:
            "https://pics.filmaffinity.com/El_eternauta_Serie_de_TV-180653043-large.jpg",
        },
        {
          numero: 2,
          titulo: "Los Invasores",
          imagen:
            "https://www.cinemascomics.com/wp-content/uploads/2024/09/el-eternauta-netflix-1.jpg",
        },
        {
          numero: 3,
          titulo: "La Resistencia",
          imagen:
            "https://media.tycsports.com/files/2024/09/11/735181/el-eternauta_1440x810_wmk.webp",
        },
        {
          numero: 4,
          titulo: "Los Gurbos",
          imagen:
            "https://www.infobae.com/new-resizer/v2/HQXPJLVHPJGQHKWQZQZQZQZQZQ.jpg",
        },
        {
          numero: 5,
          titulo: "El Contraataque",
          imagen:
            "https://www.cronista.com/files/image/449/449623/6243c8b8c8b8c.jpg",
        },
      ],
    },
  ],
};

function crearEnlaceActor(actor) {
  return `<a href="${actor.wikipedia}" target="_blank" rel="noopener noreferrer" class="actor-link">${actor.nombre}</a>`;
}

function mostrarPelicula(id) {
  const pelicula = catalogoCompleto.peliculas.find((p) => p.id === id);
  if (!pelicula) return null;

  return {
    ...pelicula,
    actoresHTML: pelicula.actores.map(crearEnlaceActor).join(", "),
    generosTexto: pelicula.genero.join(", "),
  };
}

function mostrarSerie(id) {
  const serie = catalogoCompleto.series.find((s) => s.id === id);
  if (!serie) return null;

  return {
    ...serie,
    actoresHTML: serie.actores.map(crearEnlaceActor).join(", "),
    generosTexto: serie.genero.join(", "),
  };
}

function buscarPorGenero(genero) {
  const peliculasGenero = catalogoCompleto.peliculas.filter((p) =>
    p.genero.some((g) => g.toLowerCase().includes(genero.toLowerCase()))
  );
  const seriesGenero = catalogoCompleto.series.filter((s) =>
    s.genero.some((g) => g.toLowerCase().includes(genero.toLowerCase()))
  );

  return {
    peliculas: peliculasGenero,
    series: seriesGenero,
  };
}

function obtenerContenidoAleatorio(tipo = "ambos", cantidad = 5) {
  let contenido = [];

  if (tipo === "peliculas" || tipo === "ambos") {
    contenido = [...contenido, ...catalogoCompleto.peliculas];
  }

  if (tipo === "series" || tipo === "ambos") {
    contenido = [...contenido, ...catalogoCompleto.series];
  }

  return contenido.sort(() => 0.5 - Math.random()).slice(0, cantidad);
}

function renderizarTarjeta(item) {
  const esSerie = item.temporadas !== undefined;
  const duracionTexto = esSerie
    ? `${item.temporadas} temporadas • ${item.episodios} episodios`
    : item.duracion;

  return `
    <div class="contenido-tarjeta" data-id="${item.id}">
      <div class="contenido-imagen">
        <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
        <div class="contenido-overlay">
          <button class="btn-reproducir" onclick="reproducir('${item.id}', '${
    esSerie ? "serie" : "pelicula"
  }')">
            ▶ Reproducir
          </button>
        </div>
      </div>
      <div class="contenido-info">
        <h3 class="contenido-titulo">${item.titulo}</h3>
        <p class="contenido-año">${item.año}</p>
        <p class="contenido-duracion">${duracionTexto}</p>
        <p class="contenido-generos">${item.genero.join(", ")}</p>
        <div class="contenido-calificacion">
          <span class="estrella">⭐</span>
          <span>${item.calificacion}</span>
        </div>
      </div>
    </div>
  `;
}

function mostrarDetalles(id, tipo) {
  const item =
    tipo === "serie"
      ? catalogoCompleto.series.find((s) => s.id === id)
      : catalogoCompleto.peliculas.find((p) => p.id === id);

  if (!item) return;

  const actoresHTML = item.actores.map(crearEnlaceActor).join(", ");
  const esSerie = tipo === "serie";

  return `
    <div class="detalle-contenido">
      <div class="detalle-header">
        <img src="${item.imagen}" alt="${item.titulo}" class="detalle-poster">
        <div class="detalle-info">
          <h1>${item.titulo}</h1>
          <p class="detalle-año">${item.año}</p>
          <p class="detalle-duracion">
            ${
              esSerie
                ? `${item.temporadas} temporadas • ${item.episodios} episodios`
                : item.duracion
            }
          </p>
          <p class="detalle-generos">${item.genero.join(", ")}</p>
          <div class="detalle-calificacion">
            <span class="estrella">⭐</span>
            <span>${item.calificacion}/10</span>
          </div>
          <p class="detalle-director">
            ${esSerie ? "Creador" : "Director"}: ${
    esSerie ? item.creador : item.director
  }
          </p>
        </div>
      </div>
      
      <div class="detalle-cuerpo">
        <div class="detalle-resumen">
          <h3>Sinopsis</h3>
          <p>${item.resumen}</p>
        </div>
        
        <div class="detalle-actores">
          <h3>Reparto</h3>
          <p>${actoresHTML}</p>
        </div>
        
        <div class="detalle-acciones">
          <button class="btn btn-primary" onclick="reproducir('${
            item.id
          }', '${tipo}')">
            ▶ Reproducir
          </button>
          <button class="btn btn-secondary" onclick="agregarFavoritos('${
            item.id
          }', '${tipo}')">
            ❤ Agregar a Favoritos
          </button>
          <button class="btn btn-secondary" onclick="verTrailer('${
            item.trailer
          }')">
            🎬 Ver Trailer
          </button>
        </div>
      </div>
    </div>
  `;
}

function reproducir(id, tipo) {
  console.log(`Reproduciendo ${tipo}: ${id}`);
  alert(`Reproduciendo ${tipo}: ${id}`);
}

function agregarFavoritos(id, tipo) {
  console.log(`Agregando a favoritos ${tipo}: ${id}`);
  alert(`Agregado a favoritos: ${id}`);
}

function verTrailer(url) {
  window.open(url, "_blank");
}

// Exportar para uso global
window.catalogoCompleto = catalogoCompleto;
window.mostrarPelicula = mostrarPelicula;
window.mostrarSerie = mostrarSerie;
window.buscarPorGenero = buscarPorGenero;
window.obtenerContenidoAleatorio = obtenerContenidoAleatorio;
window.renderizarTarjeta = renderizarTarjeta;
window.mostrarDetalles = mostrarDetalles;
window.reproducir = reproducir;
window.agregarFavoritos = agregarFavoritos;
window.verTrailer = verTrailer;
