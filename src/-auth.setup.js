/*
Auth setup
-------------------------------------------
1- create a firebase project
2- enable web
3- enable sign in method 
4- install firebase in the project
5- copy configuration and paste it to the firebase.config.js file
6- Export app from firebase.config.js file.

*/

/*
1- Create UserContext (Auth Context) : 
   UserContext is a component and UserContext provides Auth Context

2- create AuthContext and export it(assigning as a variable for createContext)
3- Set AuthContext.Provider 
4- make sure to set the children
5- set value to the AuthContext.Provider
6-  Export AuthContext (Very very <important></important>);
7- get form data;

 */

/*
1- get auth from firebase 
2- crete user, by using a function and return createUserWithEmailAndPassWord
 */


/*
 ---------------------------------
 FIREBASE HOSTING
 ---------------------------------

 //One time for each computer
1-  npm install -g firebase-tools   
2-  firebase login

//for each project one time
1- firebase init  
   What do you want to use as your public directory? build  (this answer should be build)
   single page application will be - Yes


//For every deploy 
1- npm run build
2- firebase deploy
 */