# Recipe Search API

This is a Node.js backend API that fetches recipe data from the Edamam Recipe API. The API allows users to search for recipes based on various parameters such as ingredients, diet preferences, and more.

## Features

- Fetch recipes based on search query
- Filter recipes by ingredients, diet preferences, and other parameters
- Paginated results (fetch 20 recipes at a time)

## Tech Stack

- Node.js
- Express.js
- Edamam Recipe API

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Setup Instructions

### 1. Clone the Repository

Clone this project to your local machine using:

```
git clone https://github.com/yourusername/recipe-search-api.git
```

### 2. Navigate to the Project Directory

```
cd recipe-search-api
```

### 3. Install Dependencies

Install the required dependencies using npm:

```
npm install
```

### 4. Create an Environment File

Create a `.env` file in the root of the project and add your Edamam API credentials:

```
EDAMAM_APP_ID=your_app_id
EDAMAM_APP_KEY=your_app_key
```

### 5. Start the Server

Run the following command to start the server:

```
npm start
```

The API will be running on `http://localhost:3000`.

## Usage

You can use the API to search for recipes by making GET requests to the following endpoint:

### Search Recipes

```
GET /api/recipes
```

#### Query Parameters:

- `q` - The search term (e.g., `chicken`, `pasta`, etc.)
- `diet` - Diet preferences (e.g., `low-carb`, `high-protein`)
- `health` - Health filters (e.g., `gluten-free`, `vegan`)

#### Example Request:

```
GET /api/recipes?q=chicken&diet=low-carb
```

### Response:

The API returns a JSON object with recipe details such as title, ingredients, calories, and more.

```json
{
  "recipes": [
    {
      "title": "Grilled Chicken",
      "ingredients": ["chicken", "olive oil", "garlic"],
      "calories": 250,
      "image": "image_url"
    },
    ...
  ]
}
```

## Project Structure

```
/recipe-search-api
  ├── /node_modules
  ├── /src
      ├── /routes
      └── /controllers
  ├── .gitignore
  ├── .env
  ├── package.json
  └── README.md
```

## Dependencies

- `express` - Web framework for Node.js
- `axios` - Promise-based HTTP client for making requests to the Edamam API
- `dotenv` - Module to load environment variables from `.env` file

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This README provides all the necessary details for understanding, setting up, and using your Node backend API project.
