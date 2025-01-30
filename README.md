# 🌍 Travel Planner API  

A simple REST API for managing travel plans using **Node.js, Express, and MongoDB Atlas**.  

## 🚀 Features  
- Create a travel plan  
- Get all travel plans  
- Get a specific travel plan by ID  
- Update a travel plan  
- Delete a travel plan  

## 📌 Tech Stack  
- **Backend:** Node.js, Express  
- **Database:** MongoDB Atlas  
- **Deployment:** Render / Netlify  

## 📜 API Endpoints  

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/plans`            | Get all travel plans      |
| GET    | `/plans/:id`        | Get a single travel plan  |
| POST   | `/plans`            | Create a new travel plan  |
| PATCH  | `/plans/:id`        | Update a travel plan      |
| DELETE | `/plans/:id`        | Delete a travel plan      |

## 📌 Installation & Setup  

1. **Clone the Repository**  
   ```bash
   git clone <repo-link>
   cd travel-planner-api
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file and add:  
   ```env
   MONGO_URI=<your-mongodb-atlas-uri>
   PORT=5000
   ```

4. **Run the Server**  
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000`.

## 📤 Deployment  

The API is deployed on **Render/Netlify**:  
🔗 **Live API:** [https://travelplannerapi-kjwv.onrender.com/]()  
 

## 🛠 Tools Used  
- **Express.js** for routing  
- **Mongoose** for MongoDB interactions  
- **dotenv** for environment variable management  

## 📬 Contributing  
Feel free to submit issues or pull requests! 🚀  
