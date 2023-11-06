# Lima Frontend
_React Front-End where my applications meet using [lima-backend](https://github.com/R-dVL/lima-backend) API._


## Table of Contents
1. [Dependencies](#Dependencies)
2. [Project Structure](#Project%20Structure)


## Project Structure
~~~text
(root)
+- public                      # Static files
|   +- favicon.ico
|   +- ...
+- src
|   +- components              # React Components
|       +- Header
|           +- Header.css
|           +- Header.js
|       +- Footer
|           +- Footer.css
|           +- Footer.js
|       +- ...
|   +- pages                    # Pages constructed
|       +- CatWatcherPage.js
|       +- HomePage.js
|       +- ...
|   +- App.js                   # App routes and main script
~~~


## Apps
### Cat Watcher
___cat-watcher__ project is a motion detector I use when I'm away from home to spy on my cats, photos are posted in a MongoDB gathered with _lima-backend_ API and shown in this view._
> [cat-watcher](https://github.com/R-dVL/cat-watcher)

