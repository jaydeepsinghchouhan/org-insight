const sideBarElements = [
    {
      id: 1,
      link: "/dashboard",
      label: "Dashboard",
    },
    {
      id: 2,
      link: "/employees",
      label: "Employees",
    },
    {
      id: 3,
      link: "/organization-tree",
      label: "Organization Tree",
    },
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
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
      role: "Software Engineer",
      department: "Engineering",
      level: "0",
      managerId: null,
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      photo: "https://randomuser.me/api/portraits/women/14.jpg",
      role: "Product Manager",
      department: "Engineering",
      level: "1",
      managerId: 1,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      photo: "https://randomuser.me/api/portraits/men/27.jpg",
      role: "UX Designer",
      department: "Engineering",
      level: "2",
      managerId: 2,
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      photo: "https://randomuser.me/api/portraits/women/28.jpg",
      role: "QA Engineer",
      department: "Quality Assurance",
      level: "1",
      managerId: 1,
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      role: "Data Analyst",
      department: "Engineering",
      level: "1",
      managerId: 1,
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      photo: "https://randomuser.me/api/portraits/women/42.jpg",
      role: "HR Manager",
      department: "Human Resources",
      level: "1",
      managerId: 1,
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      photo: "https://randomuser.me/api/portraits/men/63.jpg",
      role: "DevOps Engineer",
      department: "DevOps",
      level: "2",
      managerId: 2,
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      photo: "https://randomuser.me/api/portraits/women/56.jpg",
      role: "Marketing Specialist",
      department: "Sales",
      level: "2",
      managerId: 1,
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      photo: "https://randomuser.me/api/portraits/men/81.jpg",
      role: "Business Analyst",
      department: "Engineering",
      level: "2",
      managerId: 5,
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      photo: "https://randomuser.me/api/portraits/women/70.jpg",
      role: "Customer Success Manager",
      department: "Sales",
      level: "3",
      managerId: 8,
    },
  ];
  
   
  
export { sideBarElements, topPerformers, bestTeam, upcomingEvents, employees };