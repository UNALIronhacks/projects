# 2017-Purdue-Platzi-Ironhack-sauravn

## NYU Housing

### Description

**NYU Housing** is a web application compatible with both desktop and mobile browsers, that aims to help people in finding a safe and affordable place to rent near New York University (NYU), New York. The application will provide an option to choose a **Apartment** from a list of available housing options. It shows a graphical repersentation of `parks and recreation, location of services, schools, alternative modes of transportation, street lighting, closeness to highway, crime rates and types of crime, closeness to police/fire stations and education, real estate prices, criminal/offender registry, integration with Google Maps/Open Maps, impact Scale, etc.`, and also makes overall recommendation. The application also supports a **Discussion Forum** where users can share their personal experiences about the aprtment they visited recently and if there are any safety concerns.<br />
	
**Unique Feature**<br />
Our recommendation system will be using a machine learning approach to use historical data of user's search and will try to help the users by recommending apartments similar to their prior search. 
 
### Keywords
 
*Safe and Affordable Housing, Safety Scale, Price Comparison, Map Location, Forum* 


### Datasets Description
 
1. Climate Data Online (CDO) API
	Link: https://catalog.data.gov/dataset/climate-data-online-cdo

	I used Climate Data Online API to pull latest and historical weather information and show it on the Google Maps. I fetch the requried data in real time from the 
	API based upon the user request. Below are the `dataset` and `datatypes` that I am using to pull required information.
	```
	self.availableDatasets = [{id:'GHCND', product:'GHCND_DAILY_FORM'}];
		self.availableDatatypes = ['PRCP','SNOW','TMAX','TMIN','TAVG'];
	```
	`Request URL: http://www.ncdc.noaa.gov/cdo-web/api/v2`

### Application Description
    
Fill in the structued description:
* Map View:
	1. [Y] Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example) - **YES**
	2. [Y] Markers for location of markets - **YES**
	3. [Y] Labels for markets' names - **YES**
	4. [Y] InfoWindow to show detail information of a market - **YES**
	5. [Y] [describe] Any other cover on the map (for example, cloud cover to show the weather effect) - **YES**

* Data Visualization:
	1. [Y] [describe] Use Graph? What is the type? (bar chart, pie chart, radar chart ...) - **YES. D3 Radar Chart**
	2. [Y] [List] Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables ...) - **YES**


* Interaction Form:
	1. [Y] [List] Any information output? list them. (text field, text area, label, plain HTML ...) **YES**
	2. [Y] [List] Any operation option (filters)? List them. **YES**
	3. [Y] [List] Any information input? List them.  **YES**
	4. [Y] [List] Interaction with Map? List them. **YES**
	5. [Y] [List] Interaction with data visualization? List them. **YES**

### Build Case

I have developed this application on a Macbook Pro and tested it on Ubuntu 14.04 virtual machine (VM) with Apache webserver. I have used HTML5/CSS3, Javascript and JQuery, so there are no other dependencies involved in deploying this application.

### Test Case

Tested on Firefox, Chrome and Mobile Browsers (iPhone and Android).
