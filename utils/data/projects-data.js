import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Web App: Cash Compass Expense Tracker',
        description: "I developed my first ever simple web application, using the native HTML, CSS, and JavaScript. Cash Compass is a personal expense management web application designed to help you keep track of your expenses and balance. With features like add income, add expense, and edit balance, Cash Compass makes it simple and convenient to manage your finances. I used the local storage to store the data and the app is fully responsive and mobile-friendly.",
        tools: ['HTML, CSS, JavaScript, Json'],
        role: 'Front End Developer',
        code: '',
        demo: 'https://cash-compass-expense-tracker-application.vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Android-Based Sari-Sari Store Inventory and Sales Management System',
        description: 'Quick Stock is an offline mobile application that aims to help sari-sari store owners manage their inventory and sales. The application is designed to be user-friendly and easy to use. It allows users to add, edit, and delete products from their inventory. Users can also view their sales history and generate reports from the dashboard. Quick Stock is designed to be simple and intuitive, making it easy for sari-sari store owners to manage their business. This was developed using Flutter and SQLite. Was made during the Software Engineering subject. ',
        tools: ['Flutter', 'Dart', 'SQLite'],
        role: 'Project Manager and Developer.',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Secret Shop: E-Commerce Website',
        description: 'Made a simple web application from Platform Based Development subject using HTML, CSS, and JavaScript. It utilizes Firebase for the database and hosting. The website is an e-commerce platform that allows users to buy and sell items. ',
        tools: ['Firebase', 'HTML', 'CSS', 'JavaScript'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },