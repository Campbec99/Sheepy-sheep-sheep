# Welcome Sheep — Simple Visitor Counter (Node + Express)

## What this is
A minimal Node.js + Express app that serves a small site saying "Welcome Sheep" and increments a visitor counter each time the homepage is loaded.

## Files included
- `server.js` — Express server and `/api/count` endpoint
- `public/index.html` — Frontend
- `public/script.js` — Fetches the counter
- `count.txt` — Stores the numeric count (initially 0)
- `package.json` — start script and dependency
- `README.md` — this file

## Run locally
1. Install dependencies: `npm install`
2. Start: `npm start`
3. Open: `http://localhost:3000`

## Deploying to Railway (recommended via GitHub)
1. Create a Git repo from these files and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Welcome Sheep"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. On Railway (https://railway.app) create a new project -> Choose **Deploy from GitHub** -> connect your GitHub account and select the repo.
3. Railway will detect `package.json` and run `npm install` then `npm start`. Ensure the start script is `npm start` (it is by default here).
4. After deployment you will have a live URL. Visit it to increment the visitor counter.

## Important notes about persistence
This project stores the visitor count in a plain file `count.txt` on the app filesystem. Hosting platforms like Railway use ephemeral containers — the file may reset on redeploys or instance restarts. For a reliable persistent counter, consider using a small database (example options):
- Railway-provisioned PostgreSQL (use a table to track visits)
- SQLite stored on a persistent volume (if your host supports volumes)
- A simple key-value store (Redis) if available
If you'd like, I can provide a version that uses SQLite or PostgreSQL and show how to set the DATABASE_URL env var on Railway.
