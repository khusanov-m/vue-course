# Instructions

1. Open the folder with your IDE
2. Open terminal inside IDE and type "npm install"
3. To watch on localhost the output, run command after finishing installment of node modules "npm run serve"
4. To be able to deploy, run command "npm run build"
5. After that you deploy "dist" folder to your hosting service - Netlify, Firebase and etc.

## How to deploy on Firebase:

1. Open your [Firebase console](https://firebase.google.com/)
2. Create a project
3. Chose hosting method
4. Install the Firebase CLI in the same folder "npm install -g firebase-tools"
5. Further run "firebase login" to login your firebase account
6. After login, type "firebase init" to create a hosting
  - 1 Type "y"
  - 2 Find "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys" and press space and then enter key
  - 3 To the "What do you want to use as your public directory?" type "dist" to choose recently constructed script folder
  - 4 "Configure as a single-page app (rewrite all urls to /index.html)?" type "y"
  - "Set up automatic builds and deploys with GitHub? (y/N)" type "n" if you don't want to deploy with Github
  - "File dist/index.html already exists. Overwrite? (y/N)" type "n" because we already build "dist" folder which ready to deployment
  - After all, firebase config will be created
7. As firebase config done, run "firebase deploy" to deploy your app/webpage to firebase hosting 
