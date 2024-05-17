# to start working on the project

## - make sure to install docker desktop and node.js

## - clone this repo

```bash
git clone https://github.com/dqrk0jeste/rarog-frontend.git
```

## and backend one

```bash
git clone https://github.com/dqrk0jeste/rarog-backend.git
```

## - run the backend

```bash
cd rarog-backend
docker compose up -d
```

## - make a new branch

```bash
cd ../rarog-frontend
git checkout -b some-branch-name
```

## - install the frontend deps and run the dev server

```bash
npm install
npm run dev
```

## - save changes often

```bash
git add .
git commit -m 'your message goes here'
```

## - when done, push the changes to this repo

```bash
git push origin some-branch-name
```

## - stop the backend server

```bash
cd ../rarog-backend
docker compose down
```
