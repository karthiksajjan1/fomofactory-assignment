# Stock Price Dashboard

Mini-Website for Real-Time Stock Price Data

Assignment submitted by [Your Name]

## Backend

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/stock-price-dashboard.git
Navigate to the Backend Directory:

cd backend
Install Dependencies:

npm install
Set Up MongoDB:

Ensure MongoDB is installed and running.
Update the MongoDB connection details in src/utils/cronJobs.ts if necessary.
Run the Backend Application:

npm start
This will start the server on port 5001 by default.

Frontend
Navigate to the Frontend Directory:

cd frontend
Install Dependencies:


npm install
Run the Frontend Application:

npm run dev
This will start the React application. Open http://localhost:3000 in your browser.

Notes
Polling Intervals: The backend fetches prices every 5 seconds. Adjust the interval in src/utils/cronJobs.ts if needed.
API Endpoints: Ensure that the API endpoints in the backend (src/utils/cronJobs.ts) and frontend (src/components/StockPriceTable.tsx) match.
MongoDB: Ensure MongoDB is running before starting the backend server.
