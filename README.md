# 🍽️ Meals App

A **React Native** app built with **TypeScript** that displays meal categories, meal overviews, and detailed meal information. The app features stack and drawer navigation and uses **Expo Vector Icons** for UI elements.

## 🚀 Features

- Browse meal categories
- View meals in each category
- See detailed information about each meal
- Mark meals as favorites
- Use drawer navigation for quick access to categories and favorites

## 🛠️ Tech Stack

- **React Native**
- **TypeScript**
- **React Navigation** (Stack & Drawer)
- **Expo Vector Icons**

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/meytirm/meal-app.git
   cd meal-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

## 🗂️ Project Structure

```
.
├── App.tsx                # Main entry point, sets up navigation
├── theme.ts               # Centralized theme and color definitions
├── types.ts               # Type definitions for navigation and data
├── screens/               # All screen components
│   ├── CategoriesScreen.tsx
│   ├── MealsOverviewScreen.tsx
│   ├── MealDetailScreen.tsx
│   └── FavoritesScreen.tsx
├── components/            # Reusable UI components
│   └── (e.g., MealItem.tsx, CategoryGridTile.tsx)
├── assets/                # Images, fonts, etc.
├── navigation/            # Navigation configuration (optional)
│   └── (e.g., AppNavigator.tsx)
├── constants/             # App-wide constants (optional)
├── package.json
├── README.md
└── ... (other config files)
```

## 📄 License

MIT
