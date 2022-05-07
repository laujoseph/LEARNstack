# MusterClass
This app was developed for my General Assembly Software Engineering Immersive Project 4. Built using MERN stack with React + Typescript and Material UI for styling, MusterClass is a web-based subscription based app to view various lessons by renowned instructors of their field.

## Features
- User Signup/ Login with JWT authentication
- View courses based on user subscription plan
- Filtered views of articles(courses) sorted by category
- Stripe payment for subscription plan


## Tech & Frameworks used
- React.js
- Node.js
- Typescript
- MongoDB
- JWT
- Express
- MaterialUI
- Stripe

### React (FrontEnd)
- Landing Page
  - NavBar Buttons
    - Categories: lists a drop down menu of the course categories
    - View Plans: navigates user to the subscription plans available
    - Home: navigates user to landing page
    - Profile (only renders if logged in): lists a drop down menu of 2 items, Reset P/w and Logout which does as the name suggests
    - Admin (only renders if user is an admin): lists a drop down menu of 3 items, Create, Update and Delete. Create and Update navigates users to a page with a form to enter details of an article for creation/updating. Delete routes to a page with an input field where the name of the instructor can be entered and the course with that instructor name will be deleted.

  - Signup/Login
    - Buttons show a modal with input fields for the users email and password to signup/login respectively

  - Trending Instructors Carousel
    - Course Instructor images rendered on an carousel which users can use the cursor and swipe to view.

  - FAQ footer
    - Accordion component rendered at every page with questions and answers.

- Articles Page
  - Calls on the Express response to render out cards with article information stored in DB. 
  
- ArticleDetails page
  - Page consists of an mp4 video, accordion with menu items on the side and course title and content. The menu items in the accordion contains draft information but ideally it would contain video links for the courses and onclick it would change the video's URL and play the selected video.
  
### Express Routes (BackEnd)
- ## Endpoints
  - /articles (GET)
    -   Checks if user has purchased a subscription plan.
    -   Render out articles based on user subscription plan (basic, standard or premium)
    
  - /articles/:category (GET)
    - Checks if user has purchased a subscription plan.
    - Render out articles based on user subscription plan and category in params.
  - /articles/create (POST)
    - Uses user input article details request and create a new entry in DB
    
  - /articles/update (PUT)
    - Uses user input article details request and updates the existing article in DB
 
  - /articles/delete (POST)
    - Uses user input article details request and deletes the existing article in DB
    
  - /auth/signup (POST)
    - Validates signup details entered, creates a user and stripe customer id. Password is hashed and a JWT token is created.
  - /auth/login (POST)
    - Validates login details entered and checks with DB if user exists, if user exists return JWT token to user.

  - /subs/prices (GET)
    - Gets the prices of the 3 subscription tiers
  - /subs/session (POST)
    - Creates a checkout page with relevant product information

## Known Issues
  - On login, the dropdown menu for the profile button in the navbar pops up in the top left
  
## Future Works
  - Populate the article details page with actual video links, hopefully called from a proper API.
