# London Armouries Informational Samsung Kiosk

 - Deployment Date: December 18, 2023
 - pairs with: Delta Hotels Kiosk Manager
    - repo: DeltaHotels_CMS
- This repo does not contain the master .zip file of the kiosk widget. This file is contained in the client folder on the ELM VPN.

## Functions & Features
- wayfinding
- display of daily events
- banner advertizing
- scrollable local attractions
- menu views
- local storage
- content updated via CMS

## Pages
#### index.html
- launch page that triggers the initial data call from the server to local storage

#### main.html
- Home Page
- display: first 4 events, link to Events page, advertizing banner, location maps
- master controls for the data call to the server
- Source Files
    - popup.js: ELM modal controls
    - slideshow.js: ad banner controls
    - getEvents_Main.js: get events for home page display
    - activity.js: analytics
    - api.js: main data file used for the server calls
    - main.js: image url
    - CSS: styles, slideshow, fonts

#### Events
- main event display, no limit, scrollable
- Source Files
    - popup.js: ELM modal controls
    - getEvents.js
    - activity.js
    - redirect.js
    - main.js: image url
    - CSS: styles, stylesEvents, all fonts

#### Attractions
- local attractions details, scrollable, linkable via category buttons *attraction category headers are controlled via the CMS*
- Source Files
    - popup.js: ELM modal controls
    - getAttractions.js
    - activity.js
    - redirect.js
    - main.js: image url
    - CSS: styles, stylesAttractions, all fonts

#### Menus
- display carousel via pop-up of 4 required menu types *menu buttons are hard-coded*
- Source Files
    - popup.js: ELM modal controls
    - getMenus.js
    - menuModal.js
    - activity.js
    - redirect.js
    - main.js: image url
    - CSS: styles, stylesMenus, all fonts
