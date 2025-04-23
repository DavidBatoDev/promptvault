## PromptVault

PromptVault is a CRUD application built with the MERN stack (MongoDB, Express, React, Node.js) that stores and manages AI prompt prefixes and integrates with the Google Gemini API to generate responses based on user messages combined with saved system prompts.

> This is for the GDG - Web Development Department `Mern Stack Backend` Study Jam

---

### Features
- Create, read, update, and delete prompts (`name`, `description`, `system_prompt`)
- Send user messages to the Google Gemini API, automatically prepending a saved `system_prompt`
- Easy-to-test REST API with Insomnia or curl

---

## Table of Contents
1. [Prerequisites](#prerequisites)  
2. [Installation](#installation)  
3. [Configuration](#configuration)  
4. [Running the Server](#running-the-server)  
5. [API Endpoints](#api-endpoints)  
   - CRUD for Prompts  
   - Send Message to Gemini  
6. [Sample HTTP Requests](#sample-http-requests)  

---

## Prerequisites
- Node.js v16+ and npm  
- MongoDB URI (Atlas or local)  
- Google Gemini API Key (stored in `.env`)  

---

## Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/DavidBatoDev/promptvault.git
   cd promptvault
    ```

2. Install dependencies:  
   ```bash
   npm install
    ```

## Configuration
1. Create a `.env` file in the root of the project:  
   ```env
   MONGO_URI=your-mongodb-connection-string
   GEMINI_API_KEY=your-google-gemini-api-key
   PORT=5000      # optional, defaults to 5000
    ```

2. Verify `config/db.js` uses `process.env.MONGO_URI` and `geminiController.js` uses `process.env.GEMINI_API_KEY`.
## Running the Server
Start the server in development mode (with nodemon):  
```bash
npm run dev
```
Or, to run in production mode:
```bash
npm start
```

The API will be available at `http://localhost:<PORT>/api.`


## API Endpoints

### Prompts CRUD
| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| POST   | `/api/prompts`          | Create a new prompt         |
| GET    | `/api/prompts`          | Retrieve all prompts        |
| GET    | `/api/prompts/:id`      | Retrieve a prompt by ID     |
| PUT    | `/api/prompts/:id`      | Partially update a prompt   |
| DELETE | `/api/prompts/:id`      | Delete a prompt             |

### Gemini Integration
| Method | Endpoint           | Description                            |
| ------ | ------------------ | -------------------------------------- |
| POST   | `/api/gemini/send` | Send message (with optional prompt_id) |

---

## Sample HTTP Requests

#### 1. Create Prompt
```bash
curl -X POST http://localhost:5000/api/prompts \
  -H "Content-Type: application/json" \
  -d '{
        "name": "AI Assistant",
        "description": "System prompt for a helpful AI assistant",
        "system_prompt": "You are a helpful assistant..."
      }'
```

#### 2. Get All Prompts
```bash
curl http://localhost:5000/api/prompts
```

#### 3. Get Prompt by ID
```bash
curl http://localhost:5000/api/prompts/<PROMPT_ID>
```

#### 4. Update Prompt
```bash
curl -X PUT http://localhost:5000/api/prompts/<PROMPT_ID> \
  -H "Content-Type: application/json" \
  -d '{ "name": "Updated Assistant Name" }'

```

#### 5. Delete Prompt
```bash
curl -X DELETE http://localhost:5000/api/prompts/<PROMPT_ID>
```


#### 6. Send Message to Gemini
```bash
curl -X POST http://localhost:5000/api/gemini/send \
  -H "Content-Type: application/json" \
  -d '{
        "message": "Give me a project idea with Node.js and MongoDB",
        "prompt_id": "<PROMPT_ID>"
      }'
```


