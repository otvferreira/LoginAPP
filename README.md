# Firebase Authentication App Documentation

This document serves as the official documentation for the **Firebase Authentication App** built with React Native using **Expo**. The app provides functionality for user authentication with Firebase, including registration, login, and logout.

---

## Overview

The application allows users to:

- **Register**: Create a new account using an email and password.
- **Login**: Authenticate with an existing account.
- **Logout**: Sign out of the app securely.
- **Home Screen**: Displays a welcome message for authenticated users.

---

## Features

1. **User Authentication**:
   - Registration and login via Firebase Authentication.
   - Secure authentication using Firebase backend.

2. **Navigation**:
   - Seamless navigation between screens using React Navigation.

3. **Responsive Design**:
   - Screens designed to adapt to different device sizes.

4. **Scalability**:
   - Easily extendable for additional authentication methods (e.g., Google, Facebook).

---

## Getting Started

### Prerequisites

1. Install Node.js and npm. [Download here](https://nodejs.org/).
2. Install Expo CLI:
   ```bash
   npm install -g expo-cli
   ```
3. Create a Firebase account. [Sign up here](https://firebase.google.com/).

---

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd FirebaseAuthApp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a project and add a web app.
   - Copy the Firebase configuration object.
   - Create a `firebaseConfig.js` file in the `src/` directory and paste the configuration:
     ```javascript
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };

     const app = initializeApp(firebaseConfig);
     export default app;
     ```

4. **Enable Email/Password Authentication**:
   - In Firebase Console, go to **Authentication > Sign-in Method**.
   - Enable **Email/Password**.

5. **Start the Application**:
   ```bash
   expo start
   ```

---

## Application Structure

```
FirebaseAuthApp/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   └── HomeScreen.js
│   ├── navigation/
│   │   └── AuthStack.js
│   └── firebaseConfig.js
├── App.js
└── package.json
```

### Key Files

- **App.js**: Entry point of the application.
- **firebaseConfig.js**: Contains Firebase initialization.
- **AuthStack.js**: Manages navigation between screens.
- **screens/**: Contains the user interface and functionality for login, registration, and home screens.

---

## Screens

### 1. Login Screen
- Allows users to log in using their email and password.
- Includes navigation to the registration screen for new users.

---
![image](https://github.com/user-attachments/assets/f34fa151-e200-4f42-b689-c1da2e1385fa)

### 2. Register Screen
- Allows new users to create an account.
- On successful registration, navigates to the login screen.

---
![image](https://github.com/user-attachments/assets/0616a70c-c2dc-433a-8616-be23f459227d)
![image](https://github.com/user-attachments/assets/afeb60cb-f222-498e-93bb-493d148403f2)

### 3. Home Screen
- Displays a welcome message for authenticated users.
- Includes a logout button to sign out of the application.

---

![image](https://github.com/user-attachments/assets/124c895c-0ae1-4f7f-827a-7c7bf2851a7e)

## Future Enhancements

- Add support for Google and Facebook authentication.
- Implement password reset functionality.
- Improve UI/UX for better user experience.

---

## Troubleshooting

1. **Firebase Error**:
   - Ensure Firebase is correctly configured in `firebaseConfig.js`.

2. **Login/Registration Issues**:
   - Verify the Email/Password Authentication method is enabled in Firebase.

3. **Navigation Errors**:
   - Check the `AuthStack.js` for proper screen linking.

---

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.
