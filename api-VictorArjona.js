// Función para obtener un usuario de una API
function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener el usuario");
        return response.json();
      });
  }
    function getUserData(user) {
        const userId = user.id;
        const userName = user.name;
        const userEmail = user.email;
        console.log("Usuario:", userName);
        console.log("Email:", userEmail);
        console.log("Id:", userId);
        return user;
    }
  
  // Función para obtener los posts de un usuario
  function getPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener los posts");
        //console.log("Posts del usuario:", response.json());
        return response.json();
      });
  }
  
  // Función para obtener los comentarios del post
  function getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener comentarios del post");
        return response.json();
      });
  }
  function getAllComments(posts){

    const AllComents = posts.map(post => getComments(post.id));       
    return Promise.all(AllComents);
  }
  
  // Encadenando Promesas
  console.log("Inicio");   
  
  getUser(2)            // he entendido que el user que hay en el then de debajo es simplemente lo que recibo de la funcion getUser, y que si le llamase pepito en vez de user funcionaria igual, simplemente es un nombre que le doy A LO QUE RECIBO DE LA FUNCION
    .then((user)=> getUserData(user)) //aqui simplemente para entender como funcion JS, he hecho una funcion donde cojo el e-mail, el nombre y el id del usuario, una vez se ha cargado la respuesta de la api de get User obviamente.
    .then((user) =>  getPosts(user.id))
    //.then((posts) => getComments(posts[0].id))
    .then((posts) => getAllComments(posts))   
    .then(Allcomments => {
      Allcomments.forEach(commentArray => {
        commentArray
        .filter(comment => comment.length < 120) //mete en un nuevo array, los comentarios que cumplan la condicion, en este caso la de los carcateres
          .sort((a, b) => a.length - b.length); //ordena los comentarios de menor a mayor
  
          commentArray.forEach(comment => {
          comment.randomNumber = Math.floor(Math.random() * 10); //añade una propiedad a cada comentario con un numero aleatorio, ahora mismo lo añade fuera aun nose porque, tengo que mirar que lo meta dentro de cada objeto
        });


      });
      console.log("Comentarios del primer post: en variableDondeGuardarCambios", Allcomments);
      console.log("Fin");
    })
    .catch(error => console.error("Error:", error));
  
//const AllComents = posts.map(post => getComments(post.id));       
//return Promise.all(AllComents);


/* .then(Allcomments => {
      let variableDondeGuardarCambios = Allcomments
        
        .filter(comment => comment.length < 120) //mete en un nuevo array, los comentarios que cumplan la condicion, en este caso la de los carcateres
          .sort((a, b) => a.length - b.length); //ordena los comentarios de menor a mayor
  
        variableDondeGuardarCambios.forEach(comment => {
          comment.randomNumber = Math.floor(Math.random() * 10); //añade una propiedad a cada comentario con un numero aleatorio, ahora mismo lo añade fuera aun nose porque, tengo que mirar que lo meta dentro de cada objeto
        });
      console.log("Comentarios del primer post: en variableDondeGuardarCambios", variableDondeGuardarCambios);
      console.log("Fin");
    }) */