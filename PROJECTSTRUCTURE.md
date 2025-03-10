Acassist/
│
├── client/                     # Front-end application
│   ├── assets/                 # Static assets
│   │   ├── css/                # CSS stylesheets
│   │   │   ├── main.css        # Main stylesheet
│   │   │   ├── responsive.css  # Responsive design rules
│   │   │   └── components/     # Component-specific styles
│   │   │       ├── navbar.css
│   │   │       ├── footer.css
│   │   │       ├── cards.css
│   │   │       └── search.css
│   │   │
│   │   ├── js/                 # JavaScript files
│   │   │   ├── main.js         # Main JavaScript file
│   │   │   ├── search.js       # Search functionality
│   │   │   ├── universities.js # University-specific logic
│   │   │   └── components/     # Component scripts
│   │   │       ├── navbar.js
│   │   │       └── carousel.js
│   │   │
│   │   └── images/             # Image assets
│   │       ├── logos/          # University logos
│   │       ├── icons/          # UI icons
│   │       └── backgrounds/    # Background images
│   │
│   ├── pages/                  # HTML pages
│   │   ├── index.html          # Home page
│   │   ├── about.html          # About page
│   │   ├── contact.html        # Contact page
│   │   ├── universities/       # University-specific pages
│   │   │   ├── arellano.html   # Arellano University page
│   │   │   ├── pup.html        # PUP page
│   │   │   └── ...             # Other universities
│   │   │
│   │   └── procedures/         # Procedure pages
│   │       ├── true-copy.html  # How to get a True Copy
│   │       ├── incident-report.html  # How to report an incident
│   │       └── ...             # Other procedures
│   │
│   └── components/             # Reusable HTML components
│       ├── header.html         # Header component
│       ├── footer.html         # Footer component
│       ├── search-bar.html     # Search bar component
│       └── university-card.html # University card component
│
├── server/                     # Back-end application
│   ├── config/                 # Configuration files
│   │   ├── database.php        # Database configuration
│   │   ├── app.php             # Application configuration
│   │   └── auth.php            # Authentication configuration
│   │
│   ├── controllers/            # Controller files
│   │   ├── UniversityController.php    # University data controller
│   │   ├── ProcedureController.php     # Procedure controller
│   │   ├── SearchController.php        # Search functionality
│   │   └── UserController.php          # User management
│   │
│   ├── models/                 # Data models
│   │   ├── University.php      # University model
│   │   ├── Procedure.php       # Procedure model
│   │   ├── Category.php        # Category model
│   │   └── User.php            # User model
│   │
│   ├── services/               # Service layer
│   │   ├── SearchService.php   # Search service
│   │   └── AuthService.php     # Authentication service
│   │
│   ├── database/               # Database scripts
│   │   ├── migrations/         # Database migrations
│   │   │   ├── create_universities_table.php
│   │   │   ├── create_procedures_table.php
│   │   │   └── create_categories_table.php
│   │   │
│   │   └── seeds/              # Database seeds
│   │       ├── UniversitiesSeeder.php
│   │       ├── ProceduresSeeder.php
│   │       └── CategoriesSeeder.php
│   │
│   └── api/                    # API endpoints
│       ├── universities.php    # University data endpoints
│       ├── procedures.php      # Procedure endpoints
│       ├── search.php          # Search endpoints
│       └── users.php           # User management endpoints
│
├── public/                     # Public directory (web root)
│   ├── index.php               # Entry point
│   ├── .htaccess               # Apache configuration
│   └── favicon.ico             # Favicon
│
├── admin/                      # Admin panel
│   ├── index.php               # Admin dashboard
│   ├── universities.php        # Manage universities
│   ├── procedures.php          # Manage procedures
│   └── users.php               # Manage users
│
├── vendor/                     # Dependencies (PHP)
│
├── node_modules/               # Dependencies (Node.js)
│
├── composer.json               # Composer configuration
├── package.json                # npm configuration
├── .gitignore                  # Git ignore file
└── README.md                   # Project documentation