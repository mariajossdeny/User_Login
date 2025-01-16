const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },

  ] 

  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta más el café que el té",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];


   function login() {
    const usersName = document.getElementById("name").value;
    const usersPassword = document.getElementById("password").value

    console.log(`this is the user: ${usersName} this is the password: ${usersPassword}`)

    let welcome = usersDatabase.filter((e) => e.username === usersName && e.password === usersPassword);

    if(welcome.length >0){
      console.log('Welcome')

      let board = usersTimeline.map((e) => `${e.username}: ${e.timeline}`);
      console.log(board)
    } else {
      console.log('error')
    }

   };

   /* This is a project for platzi */




