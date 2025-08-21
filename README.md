# ZibChat

ZibChat is a modern, modular web-based chat and customer support platform built with React, Redux, and Material-UI. It is designed for organizations to manage online conversations, support tickets, and user profiles efficiently. The project supports right-to-left (RTL) layouts and is localized for Persian (Farsi) users.

## Features

- **User Authentication:**  
  Registration, login, and password recovery flows using forms with validation and feedback.

- **Profile Management:**  
  Users can view and edit their profile, change passwords, and verify their mobile number and email address.

- **Online Chat System:**  
  Real-time chat interface for operators and users, including:

  - Text messaging
  - Audio message recording and playback
  - File attachments
  - Quick reply templates
  - User panel for managing conversations

- **Department & Group Management:**  
  Admins can create and manage departments and department groups for organizing support teams.

- **App Management:**  
  Ability to register and configure multiple client applications/sites, including color customization.

- **UI/UX:**
  - Responsive design with RTL support
  - Custom themes and fonts
  - Toast notifications and confirmation dialogs
  - Modular, reusable UI components

## Project Structure

- `src/`
  - `assets/`: Static assets (CSS, fonts, images)
  - `base/`
    - `coreServices/`: Shared UI components and utilities
    - `layouts/`: Application layouts
    - `views/`: Feature pages (auth, admin, chat, profile, etc.)
  - `redux/`: State management (store, reducers)
  - `App.js`, `index.js`: Application entry points

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

```sh
npm install
```

### Running the App

```sh
npm start
```

### Building for Production

```sh
npm run build
```

### Running Tests

```sh
npm test
```

## Technologies Used

- React
- Redux
- Material-UI (MUI)
- react-hook-form
- framer-motion
- Bootstrap (RTL)
- SweetAlert2
- Emoji Picker
- Date-fns-jalali

## Customization

- **RTL Support:**  
  The app is fully RTL-compatible for Persian/Farsi users.
- **Theming:**  
  Easily customizable colors and fonts via the theme provider.
- **Component-Based:**  
  UI is built from reusable components in [`src/base/coreServices/components`](src/base/coreServices/components).

## License

This project is private and not licensed for public use.

---

For more details, see the source code in the [`src`](src)
