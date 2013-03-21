# Map app for ownCloud

## Basic features

Following features have already been implemented by eMerzh:

* when user clicked into the app, they should see a map!
  * The map should take over the whole content area
* provide a search bar so user can search for location and update the view in the map
* add points (place bookmark)

Following features haven't been implemented yet:

* map app plugin system
* center map to user's location on app start
* get direction
* more point management features (delete, rename, share, etc)
  * give tags to points (good restaurants, bars that sucks, etc)
* route management (add, share, etc)
  * parse route from GPX/KML
  * a workout plugin to share workout route
* plugin/hook system for map app to talk with other OC apps
* integrate map app with calendar app
  * so users can see events' location on a small embedded map.
* integrate map app with contact app
  * so users can see people's location on a small embedded map.


## Possible extensions
* enable tile caching
  * server side caching:
    * http://wiki.openstreetmap.org/wiki/ProxySimplePHP
	  * example:  http://wiki.openstreetmap.org/wiki/OpenLayers
  * client side caching:
    * make use of localStorage in browser?
* using map app for device tracking
  * integrate with ownPrey app
  * last known location of my device
  * real time device location tracking
* travel planning feature
* communicate with imageviewer app?
  * show images based on it's taken location on the map (good for showcase
    pictures taken during travel)
* display all contacts on a map
* show all events from calendar app on a map
* fetch data from services like scheme and display events on the map?


## Tools/Resources/Libraries that can be reused
* Search & Reverse Geocoding/Address lookup
 * http://wiki.openstreetmap.org/wiki/Nominatim
* KML/GPX libraries implemented in JS and PHP
* leaflet
* MapQuest: http://open.mapquestapi.com
* Openrouteservice: http://openrouteservice.org


## Attack Plan

### Get prepared
* learn more about AngularJS and doctrine
* learn more about leaflet and API for Openrouteservice, mapquest
* dive into OC's API, hook system, etc
* do workout to collect lots of route data for later use ;)
* discuss with Marble GSoC project on API design and possible collaboration.

### The core part
* port current map app to new appframework, using AngularJS and doctrine :)
* make sure the map app can robustly manage points and routes
  (store, export, import, edit and share).

### Adding features
* design and implement map app's plugin system
* write features using map app's plugin system:
  * getting directions
  * advanced point and route management
* integrate map app with other OC maps
  * show embedded map in contact/calendar app.

### Adding more features
* design and implement map app API for external applications (marble for example)
  * see if we can coordinate with marble GSoC project at KDE side for this part
* if I got extra time, pick some of the extensions to hack on

Notice that writing documentation and unit testing are not included in the plan
above, because they should be taken care of in every step :)
