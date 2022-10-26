### 10/24/22 - 10/26/22 ISSUE

> > CORS blocking WeatherAPI call

1. Backend Creation

- api calls shoudn't be made with frontend (risk of api key exposure, cors issues)
- backend created with node/express `app.use(cors())`
- install nodemon and remember to change start script

2. Frontend

- frontend needed to send coordinates to backend
- `axios.post` request in `WeatherApp.js`
- send `{lat, long}` as payload
- then set data as the returned response

3. Backend

- backend recieves coordinates through `axios.post`
- makes api call with `axios.get`
- convert destructured data to json to send back to frontend as the response

4. Hosting

- hosting on render

- host frontend as `static site` (weather-sc)
- set root directory as frontend
- build command: npm run build

- host backend as `web service` (weather-sc-server)
- build command: yarn
- start command: node backend/server.js (has to go into the folder, it's not at root directory)
- added environmental variable (api key)

5. Deployment

- set to NOT auto deploy
- for local development, post payload to `http://localhost:3001`
- for deployment, payload must be send to the server on hosted site `https://weather-sc-server.onrender.com`

### NOTES

- cloned app -> git push origin main
- client/server can't run on the same port, start them up seperately
- client on 3000, port on 3001
- insomnia to test routes
