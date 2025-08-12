const sideBarElements = [
    {
      id: 1,
      link: "/dashboard",
      label: "Dashboard",
      searchString: "default dashboard home",
      iconName: "bx bx-home-circle",
      linkClass: "",
      anchorClass: "",
      spanClass: "",
      liTagClass: "",
      ulTagClass: "",
      groupedModules: ["demography", "livePlayerDetail"],
    },
    // {
    //   id: 2,
    //   link: "/players",
    //   label: "Players",
    //   searchString: "all players",
    //   iconName: "bx bx-group",
    //   linkClass: "",
    //   anchorClass: "",
    //   spanClass: "",
    //   liTagClass: "",
    //   ulTagClass: "",
    //   module: "player",
    // },
    // {
    //   id: 3,
    //   link: "/organization-tree",
    //   label: "Organization Tree",
    //   searchString: "organization structure hierarchy",
    //   iconName: "bx bx-tree",
    //   linkClass: "",
    //   anchorClass: "",
    //   spanClass: "",
    //   liTagClass: "",
    //   ulTagClass: "",
    //   module: "organizationTree",
    // },
  ];

const topPerformers = [
    { name: "John Doe", position: "Software Engineer", imageUrl: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Jane Smith", position: "Product Manager", imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Alice Johnson", position: "UI/UX Designer", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Bob Brown", position: "DevOps Engineer", imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
];
const bestTeam = {
    name: "Alpha Squad",
    description: "Crushed all goals this month with outstanding teamwork!",
    members: [
      { name: "Mark Lee", imageUrl: "https://randomuser.me/api/portraits/men/10.jpg" },
      { name: "Sara Connor", imageUrl: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: "Tom Hardy", imageUrl: "https://randomuser.me/api/portraits/men/15.jpg" },
    ],
  };
  
const upcomingEvents = [
    { name: "Laura Palmer", date: "13 Aug", type: "birthday" },
    { name: "Peter Parker", date: "14 Aug", type: "anniversary" },
    { name: "Bruce Wayne", date: "15 Aug", type: "birthday" },
  ];
const employees = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "photo": "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "photo": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "photo": "https://randomuser.me/api/portraits/men/27.jpg"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "photo": "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "photo": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "photo": "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "photo": "https://randomuser.me/api/portraits/men/63.jpg"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "photo": "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "photo": "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "photo": "https://randomuser.me/api/portraits/women/70.jpg"
    }
  ];  
  
export { sideBarElements, topPerformers, bestTeam, upcomingEvents, employees };