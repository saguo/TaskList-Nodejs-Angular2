# MyTaskList:
==================================================================
This app was built based on NodeJs, Express, Angular2, Mongodb.
Basic functions: add tasks, delete tasks, update the status of tasks.
All data was stored in local mongodb.

# Get start :
Make sure you already installed mongodb & npm (global)

## 1.Run mongodb
```
cd mongo/bin
./mongod —dbpath ../Mongo-data
```
You should see:
```
I NETWORK  [thread1] waiting for connections on port 27017
```

## 2. Install Dependencies (node_modules)
Open a new command line window  & 
cd to root directory
```
npm install
```
```
cd client
npm install
```
## 3. Convert the .ts files to .js files(realtime)
```
cd client
npm run build:watch
```
## 4. Install bower& bootstrap
cd to root directory
```
npm install -g bower --save
bower install bootstrap 
```

## 5. Run the web app
Open a new command line window  & cd to root directory
```
node server
```
or (if you installed nodemon):
```
nodemon
```

## 6. Open the browser, navigate to 'localhost:3000', check the tasklist-app
