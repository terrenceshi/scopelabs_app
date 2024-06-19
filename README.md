# Video App

## An overview of your solution and its features.

My solution takes heavy inspiration from both YouTube and Netflix.

For my homepage, I looked at many video sites and concluded that the best way to display videos would be by category, as education is a broad umbrella that can narrow down many choices by simply choosing a subject. Thus, I chose to take some inspiration with Netflix and how they display media via genre.

The video playing pages take in the video id as a parameter in the URL. This allows people to access videos when they have the video id. The page itself is very much like YouTube's, as it is a compact and minimalist way to display video, description, and comments.

Every video page will get all comments. The user can add their own comment, which will also reload the comments to reflect the change.

The top right profile picture icon has 3 features. Let's first talk about uploading. Uploading is straightforward enough. The user more or less fills out a form to make the proper POST call to upload a video.

Let's also talk about logout. Of course, our users will need be able to log into and out of their accounts. Clicking logout brings up a dialog to sign in as a new user. For this demo, only the user field matters.

Lastly, we can use the API to get all videos under the currently signed in user. 

Of course, all images and API dependent data have skeletons and loading symbols that are displayed before they are loaded. Additionally, every page is friendly to all different sizes of windows, including mobile.

## Instructions on how to build and run the application on the web.

For the web, you can access the deployed demo on ______.

If you want to run this project locally, you will need node.js installed.

Afterwards, navigate to the root directory of this project and run the following:

```
npm install
npm start
```

If the API server is up, you should be able to use the app!

## Screenshots of the platform.

![Alt text](/pics/1.png?raw=true "Home Page" )

![Alt text](/pics/2.png?raw=true "Video Page")

![Alt text](/pics/3.png?raw=true "Comments")

![Alt text](/pics/4.png?raw=true "Upload Page")

![Alt text](/pics/5.png?raw=true "User Videos Page")

![Alt text](/pics/6.png?raw=true "Log in modal")



## Any other necessary information to test the application.