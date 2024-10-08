# Recipe Search API

This is a Node.js backend API that fetches recipe data from the Edamam Recipe API. The API allows users to search for recipes based on various parameters such as ingredients, diet preferences, and more.

## Features

- Fetch recipes based on search query
- Filter recipes by Cuisine type and Meal type
- Paginated results

## Tech Stack

- Node.js
- Express.js
- Edamam Recipe API (Uses v1 of the API https://developer.edamam.com/edamam-docs-recipe-api-v1)

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Setup Instructions

### 1. Clone the Repository

Clone this project to your local machine using:

```
git clone https://github.com/dgostin/recipes-backend.git recipe-search-api
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

- `from` - First result index (default 0)
- `to` - Last result index
- `term` - The search term (e.g., `chicken`, `pasta`, etc.)
- `selectedCuisineTypes` - The type of cuisine of the recipe. You can simultatniousely use saveral cuisines this way “cuisineType=chinese&cuisineType=indian”
- `selectedMealTypes` - The type of meal a recipe belongs to – lunch, dinner, breakfast, snack

#### Example Request:

```
GET /api/recipes?from=0&to=6&term=chicken&selectedCuisineTypes=Caribbean&selectedCuisineTypes=Chinese&selectedMealTypes=Snack&selectedMealTypes=Lunch
```

### Response:

The API returns a JSON object with a count of results and an array of "recipe" objects.

```json
{
  "q": "chicken",
  "from": 0,
  "to": 3,
  "more": true,
  "count": 9795,
  "hits": [
    {
      "recipe": {}
    },
    {
      "recipe": {}
    },
    {
      "recipe": {}
    }
  ]
}
```

## Dependencies

- `express` - Web framework for Node.js
- `axios` - Promise-based HTTP client for making requests to the Edamam API
- `dotenv` - Module to load environment variables from `.env` file

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This README provides all the necessary details for understanding, setting up, and using your Node backend API project.
