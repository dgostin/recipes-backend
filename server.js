const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Edamam API route
app.get("/api/recipes", async (req, res) => {
  const q = req.query.q || ""; // Search query from the frontend

  const params = {
    q,
    app_id: process.env.EDAMAM_APP_ID,
    app_key: process.env.EDAMAM_APP_KEY,
  };

  if (req.query.cuisineType) {
    params.cuisineType = req.query.cuisineType;
  }

  const queryParams = new URLSearchParams(params);
  console.log(queryParams.toString());
  const url = `https://api.edamam.com/search?${queryParams}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

app.post("/api/recipes", async (req, res) => {
  //   res.json(req.body);

  const params = {
    // type: "public",
    from: req.body.from ?? 0,
    to: req.body.to ?? 10,
    q: req.body.term,
    cuisineType: req.body.selectedCuisineTypes,
    mealType: req.body.selectedMealTypes,
    app_id: process.env.EDAMAM_APP_ID,
    app_key: process.env.EDAMAM_APP_KEY,
  };

  console.log(params);
  const queryParams = objectToParams(params);
  const url = `https://api.edamam.com/search?${queryParams}`;
  //   const url = `https://api.edamam.com/api/recipes/v2?${queryParams}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function objectToParams(obj) {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value) => {
        params.append(key, value);
      });
    } else {
      params.append(key, obj[key]);
    }
  }

  return params.toString();
}
