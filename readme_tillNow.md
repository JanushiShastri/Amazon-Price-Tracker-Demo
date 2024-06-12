# Project Documentation
## Firebase Configuration
#### File: src/Firebase/firebase.js
#### Purpose: Initialize Firebase services for the application.
### Key Functions/Components:
#### initializeApp(firebaseConfig): Initializes the Firebase app with the given configuration.
#### getAuth(app): Initializes Firebase Authentication and returns the auth instance.
#### getFirestore(app): Initializes Firestore and returns the Firestore instance.
### Exports:
#### auth: The authentication instance used for user authentication.
#### db: The Firestore instance used for database operations.
## Router Configuration
#### File: src/router/index.js
#### Purpose: Configure routes and navigation guards for the application.
### Key Functions/Components:
#### createRouter({ history, routes }): Creates a router instance with history mode and route definitions.
#### beforeEach((to, from, next) => { ... }): Navigation guard that checks for user authentication before allowing access to certain routes.
### Checks:
#### Redirects authenticated users away from the login page.
#### Redirects unauthenticated users to the login page when accessing protected routes.
### Routes:
#### /login: Route for the login view.
#### /: Route for the home view (requires authentication).
#### /about: Route for the about view (requires authentication).
## Vuex Store Configuration
#### File: src/stores/index.js
#### Purpose: Manage application state, particularly user authentication.
### State:
#### user: Stores the current user's authentication state.
### Mutations:
#### SET_USER(state, user): Sets the user state to the provided user object.
#### CLEAR_USER(state): Clears the user state, setting it to null.
### Actions:
#### login({ commit }, details): Authenticates a user with email and password, sets the user state, and redirects to the home page.
#### register({ commit }, details): Registers a new user with email and password, sets the user state, and redirects to the home page.
#### logout({ commit }): Logs out the current user, clears the user state, and redirects to the login page.
#### fetchUser({ commit }): Checks the current authentication state and updates the user state accordingly.
### Purpose of Each Action:
#### login: Handles user login, including error handling for various authentication issues.
#### register: Handles user registration, including error handling for various registration issues.
#### logout: Manages user logout and state clearing.
#### fetchUser: Continuously monitors the authentication state and updates the Vuex store accordingly.
## Login View
#### File: src/views/Login.vue
#### Purpose: Provide user interfaces for login and registration.
### Template Sections:
#### Register Form:
Inputs for email and password.
Submits form data to register a new user.
#### Login Form:
Inputs for email and password.
Submits form data to log in an existing user.
### Key Methods:
register(): Dispatches the register action from the Vuex store with the form data.
login(): Dispatches the login action from the Vuex store with the form data.
### Setup Function:
Initializes reactive form data objects (login_form, register_form).
Binds methods to handle form submission.
### Main App Component
File: src/App.vue
Purpose: Serve as the root component of the application and manage user state display.
### Template:
Navigation Bar:
Displays links to Home and About if the user is authenticated.
Includes a logout button.

## Router View:
#### Placeholder for route components.
### Key Functions:
#### setup(): Uses the Vuex store to dispatch the fetchUser action on component mount.
#### onBeforeMount(() => { store.dispatch('fetchUser') }): Ensures the user's authentication state is fetched and handled before the component mounts.
#### Styling:
#### Styles for navigation bar layout and positioning.