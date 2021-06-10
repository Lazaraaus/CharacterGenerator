# CharacterGenerator
Full-Stack Character Generator for Role-Playing games built w/ Vue, Express, Node, MongoDB, Enable3D, Phaser, &amp; Three.js

> My overall goal when I started out was to build a Table Top Simulator that connected to a character generator. 
  I intended to use Enable3D, Express, Sockiet.io, MongoDB, Mongoose, Vue, Phaser, Amazon S3 and Phaser-On-Node-JS. My intended audience 
  was role playing game players who needed a virtual space to play and couldn’t afford more expensive services like Roll20.net. 
  
> Unfortunately I wasn't able to successfully complete my project in the time frame but I do have a good baseline to continue to
  build upon. Hopefully within a month or two I have a working prototype up as intended, but for now excercise I had to pivot to 
  something a bit more manageable. Currently the project is a character generator but doesn't have the ability to choose Models, 
  Animations, or View 3D characters in real time. I ran into some issues getting Vue to work with phaser-on-nodejs and Enable3D. 
  Phaser-on-nodejs's interpolation engine doesn't work with Enable3D, which doesn't officially support mixing 2D and 3D elements
  together. Some elements of Enable3D, hotloading .FBX files w/ animations, model rigs, and textures, break Vue 3's implementation 
  of the Shadow DOM, so this was another hurdle I should have caught earlier when scoping/planning my project. 
  
> I used MongoDB to host a DB for a small API that I was intending to use as the service to hold Character Data for the TableTopSim, 
  as well as, serve as a character builder for users of the TableTopSim environment. My original intent was to host models data (.fbx files)
  on Mongo and pre-load them into the browser using Phaser. I learned a good bit about GFS, but this ultimately didn't work due to speed and
  processing issues. Storing them locally also presented some processing issues, longitudinally I'm looking into running the server on an Azure VPS
  instance with some beefier hardware. 
  
> There are some very real errors in the current state of the project. User authentication isn't implemented. The UI and design isn't very good. 

> Presentation Link: https://docs.google.com/presentation/d/1geYw3BQSg9_gjNbQ8GjCVX5vdn2kgfHOFj4S0Iaz340/edit?usp=sharing
  
# Install
1.) Clone Git Repo

2.) Navigate to character-generator/Server/

3.) Run "npm install"

4.) Run "npm run dev"

5.) Navigate to character-generator/Client/

6.) Run "npm install"

7.) Run "npm run serve"

8.) Navigate to localhost:8080
