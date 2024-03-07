//CONFIGURATION 

//CDMS - Centralized Data Management System
//Written by Ken Burcham, George Clark, Colette Coiner
//Instructions on getting started can be found here: https://github.com/CTUIR/cdms-docs/wiki/Getting-Started

/*

This system is (C) 2014-2024 by the Confederated Tribes of the Umatilla Indian Reservation. 
Any use is subject to our license agreement included with this code.
A copy is currently located here: https://github.com/CTUIR/cdms-dev/blob/master/LICENSE

THE CDMS AND COVERED CODE IS PROVIDED UNDER THIS LICENSE ON AN "AS IS" BASIS, 
WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, WITHOUT LIMITATION, 
WARRANTIES THAT THE COVERED CODE IS FREE OF DEFECTS, MERCHANTABLE, FIT FOR A PARTICULAR 
PURPOSE OR NON-INFRINGING. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE COVERED CODE
 IS WITH LICENSEE. SHOULD ANY COVERED CODE PROVE DEFECTIVE IN ANY RESPECT, LICENSEE (NOT THE CTUIR 
 OR ANY OTHER CONTRIBUTOR) ASSUMES THE COST OF ANY NECESSARY SERVICING, REPAIR OR CORRECTION. 
 THIS DISCLAIMER OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THIS LICENSE. NO USE OF
  ANY COVERED CODE IS AUTHORIZED HEREUNDER EXCEPT UNDER THIS DISCLAIMER.

*/

//  This file contains all of the various config values.
//  Many of these items will need to be configured when you implement this system 
//  in a new environment.
import { LicenseManager } from "ag-grid-enterprise";

export let CODE_BASE = "ctuir"; // core, ctuir, critfc, npt, warmsprings, etc.
export let ENVIRONMENT = "dev"; // prod, test, dev
export let DISPLAY_NAME = "CDMS 3 Dev"; // Whatever the latest version is.
export let CURRENT_VERSION = "3.0"; // Whatever the latest version is.
export let PUBLIC_OR_PRIVATE = "public"; // Paluut = public, CDMS_Priv = private.

// Example gis-dev15
export let HOST_SERVER = "[YourHostServerName]";

//Change these to point to your own webserver directories
// Example 'https://mysite.myorg.org/services/'
export let serviceUrl = 'https://[YourSite].[YourOrganization].[com, org, etc.]/services';

// Example 'https://mysite.myorg.org/'
export let serverUrl = 'https://[YourSite].[YourOrganization].[com, org, etc.]/'; 

// Example 'https://mysite.myorg.org/services/uploads/'
export let cdmsShareUrl = 'https://[YourSite].[YourOrganization].[com, org, etc.]/services/uploads/';

// If used... Example "https://mysite.myorg.org/DotNet/proxy.ashx"
export let proxyUrl = "https://mysite.myorg.org/DotNet/proxy.ashx";

// This should be your own analytics code for google analytics.
// If used... Example 'UA-123456789-1'
export let ANALYTICS_CODE = 'UA-123456789-1';

// If you use a SQL Report server, this must be set; otherwise, comment it out.
// The Datastore "name" will be appended here, so make sure your report server folders are named the same as your datastore
// Example 'http://MyServerName/Reports/Pages/Folder.aspx?ItemPath=%2f'
export let REPORTSERVER_URL = 'http://[YourSqlServerName]/Reports/Pages/Folder.aspx?ItemPath=%2f';

// Location for local CDMS documentation.
// Example "http://TheSite.TheOrg.org/ThePathToTheDocument/TheDocument.pdf"
export let CDMS_DOCUMENTATION_URL = "https://gis.ctuir.org/wp-content/uploads/2019/03/CDMSVersion2UserGuide.pdf";

// URL for ESRI AGOL map server.
export let ESRI_AGOL_URL = "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer";

// Example YourRestService.YourOrg.com
export let YOUR_FEATURE_SERVICE_DOMAIN = "YourRestService.YourOrg.com";

//***********
// If you use ArcGIS Mapping services; otherwise, comment this out.


export let GEOMETRY_SERVICE_URL = "https://MyGisSite.myorg.org/arcgis/rest/services/Utilities/Geometry/GeometryServer";
//Used as default when creating a new location
export let NAD83_SPATIAL_REFERENCE = 'PROJCS["NAD83(NSRS2007) / UTM zone 11N",GEOGCS["NAD83(NSRS2007)",DATUM["D_",SPHEROID["GRS_1980",6378137,298.257222101]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",-117],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["Meter",1]]';
export let DEFAULT_LOCATION_PROJECTION_ZONE = {
                Projection: "NAD83",
                UTMZone: "11",
            };   //Used as default when creating a new location
			
// These enable the system to autmatically show the correct map and access the correct feature service,
//  based upon the ENVIRONMENT variable above.
// For Dev/Test environments
// Example "https://MyGisSite.myorg.org/arcgis/reset/services/Points_TEST/FeatureServer/0"
export let CDMS_POINTS_TEST_URL = "https://MyGisSite.myorg.org/arcgis/reset/services/Points_TEST/FeatureServer/0";

// For Production environment
export let CDMS_POINTS_PROD_URL = "https://MyGisSite.myorg.org/arcgis/reset/services/ProjectPoints/FeatureServer/0";
//***********

// Obtain a public/free licence from Microsoft Bing and use it in the value below.
export let BING_KEY = "AuaAtT6zhx..."; //CTUIR's bing key -- only licensed from our server, so get a public/free one and use it

// Used in src/appjsLegacy/core/datasets/components/dataset-query/dataset-query.ts
// This controls how many records are too many to process for a query pull.
// CTUIR uses this, but Innovate is reworking the Query page.
// Therefore this line may become obsolete soon.
export let MAX_DATASET_RECORDS_THRESHOLD = 300000;


// For decimal numbers, how many digits come after the decimal point.
export let NUM_FLOAT_DIGITS = 3;

// The default column width for ag-grid
export let SystemDefaultColumnWidth = 150; 

// The user IDs for Admin type users.  These IDs are from dbo.Users in the backend database.
export let AdminUserIds = [1,2]


// The AG grid license.
// Obtain the grid license from e-commerce@ag-grid.com
// Copy the license they send you via email, into the value for this variable.
export let AG_GRID_LICENSE = "TheStringTheyGiveYou";

// The license key gets set just above, but it is invoked at src/appjsLegacy/main.ts,
// LicenseManager.setLicenseKey(AG_GRID_LICENSE);, about line 427
LicenseManager.setLicenseKey(AG_GRID_LICENSE);


// Database index constant values
// NOTE: you may need to change these to match index values in your own database
export let DATASTORE_ACTIVITYSYSTEMFIELDS = 13; //id for activitysystemfields datastore

// See database, dbo.Datasets, Name = Location
export let SYSTEM_LOCATION_DATASET = 1;

//metadata entities and properties
// See database, dbo.MetadataEntities
export let METADATA_ENTITY_PROJECT = 1;
export let METADATA_ENTITY_DATASETTYPEID = 3;

// See database, dbo.MetadataProperties)
export let METADATA_PROPERTY_PROGRAM = 5;


//Default system-wide project permission
export let DEFAULT_PROJECT_PERMISSION = {Permission: { OrgUser: "View", Public: "Hidden" }};


// Initially, you may need to update these settings.  Once your system is in and established,
// you probably won't need to change anything below this line. --------------------------------------
// Constants
// Field roles.  See database, dbo.FieldRoles
export let FIELD_ROLE_HEADER = 1;
export let FIELD_ROLE_DETAIL = 2;
export let FIELD_ROLE_SUMMARY = 3;
export let FIELD_ROLE_CALCULATED = 4;
export let FIELD_ROLE_VIRTUAL = 5;

//Name of UserPreference that contains a user's landing page (if specified)
export let USER_PREFERENCE_LANDINGPAGE = "LandingPage";

// Initial setting for a user's profile.
export let profile = null; 

// Where is the login page located.
//export let LOGIN_URL = serverUrl + '/login.html';

// Where is the method in the backend located?
export let WHOAMI_URL = serviceUrl + '/api/v1/account/whoami';

// Used to determine if entries follow a date pattern.
export let date_pattern = "/[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}/";

//login-controller
// If a login is successful, where do we have CDMS take the user?
export let successUrl = 'dashboard';
export let loginUrl = serverUrl + '/login';

//import-controller uses these constants
// Used in src/appjsLegacy/core/datasets/components/dataset-import/dataset-import.ts
export let MAP_DO_NOT_MAP_VALUE = "[-- Do not map --]";  //new ones
export let MAP_ACTIVITY_DATE = "[-- Activity Date --]";
export let MAP_LOCATION = "[-- Location --]";

// How is a file shared?
export let SHARINGLEVEL_PRIVATE = 1;
export let SHARINGLEVEL_GROUPREAD = 2;
export let SHARINGLEVEL_PUBLICREAD = 3;
export let SHARINGLEVEL_GROUPWRITE = 4;
export let SHARINGLEVEL_PUBLICWRITE = 5;
export let SHARINGLEVEL_REFERENCE_LIBRARY = 6;

export let SharingLevel = {
    'SHARINGLEVEL_PRIVATE' : "CDMS Only",
    'SHARINGLEVEL_PUBLICREAD' : "Share to web",
	'SHARINGLEVEL_GROUPREAD' : "Collaborators",
	'SHARINGLEVEL_REFERENCE_LIBRARY' : "Reference Library"
};

// Used in src/appjsLegacy/core/datasets/components/dataset-import/dataset-import.ts
export let DEFAULT_IMPORT_QACOMMENT = "Initial Import";

//export let ROWSTATUS_ACTIVE = 0;
export let ROWSTATUS_DELETED = 1;

//System Timezones
// Leaving in zones that are outside of Pacific, for other tribal entities.
// Turn on the ones you need; turn off the ones you don't.
export let millis_per_h = 3600000;
export let SystemTimezones = [
  {
	"Id" : 0,
    "Name" : "Pacific Standard Time (GMT-08:00)",
    "Description" : "(GMT-08:00) Pacific Standard Time (US & Canada)",
    "TimezoneOffset" : -8 * millis_per_h,
  }, 
  {
	"Id" : 1,
    "Name" : "Pacific Daylight Time (GMT-07:00)",
    "Description" : "(GMT-07:00) Pacific Daylight Time (US & Canada)",
    "TimezoneOffset" : -7 * millis_per_h,
  },
  //{
  //"Id" : 2,
  //  "Name" : "Mountain Standard Time (GMT-07:00)",
  //  "Description" : "(GMT-07:00) Mountain Standard Time (US & Canada)",
  //  "TimezoneOffset" : -7 * millis_per_h,
  //},
  //"Id" : 3,
  //  "Name" : "Mountain Daylight Time (GMT-06:00)",
  //  "Description" : "(GMT-06:00) Mountain Daylight Time (US & Canada)",
  //  "TimezoneOffset" : -6 * millis_per_h,
  //},
  //{
  //"Id" : 4,
  //  "Name" : "Central Standard Time",
  //  "Description" : "(GMT-06:00) Central Standard Time (US & Canada)",
  //  "TimezoneOffset" : -6 * millis_per_h,
  //},
  //{
  //"Id" : 5,
  //  "Name" : "Central Daylight Time",
  //  "Description" : "(GMT-05:00) Central Daylight Time (US & Canada)",
  //  "TimezoneOffset" : -5 * millis_per_h,
  // },
  //{
  //"Id" : 6,
  //  "Name" : "Eastern Standard Time",
  //  "Description" : "(GMT-05:00) Eastern Standard Time (US & Canada)",
  //  "TimezoneOffset" : -5 * millis_per_h,
  //},
  //{
  //"Id" : 7,
  //  "Name" : "Eastern Daylight Time",
  //  "Description" : "(GMT-04:00) Eastern Daylight Time (US & Canada)",
  //  "TimezoneOffset" : -4 * millis_per_h,
  //}
  {
	"Id" : 8,
    "Name" : "Greenwich Mean Time (GMT-00:00)",
    "Description" : "(GMT-00:00) Greenwich Mean Time",
    "TimezoneOffset" : 0,
  }
];

// For instruments.
//Data Grade Methods -- shows up as a select list in accuracy check
export let DataGradeMethods = [];
DataGradeMethods.push(""); // 0
DataGradeMethods.push("NIST check in BOTH warm and ice baths");
DataGradeMethods.push("NIST check in ice bath only");
DataGradeMethods.push("Manufacturer Calibration");
DataGradeMethods.push("No Accuracy Check Conducted");
DataGradeMethods.push("Unknown Accuracy Method");

// Map config
export let defaultLayer = "imageryLayer";

//used for dataset-activities (standard datasets)
export let datasetActivitiesBasemapConfig = {
       // { library: "Esri", type: 'streets', title: 'ESRI Roads'},
        //{ library: "Esri", type: 'topo', title: 'Topographical'},
        //{ library: "Esri", type: 'hybrid', title: 'Hybrid' },

		// We had problems with Bing, down below, so we switched back to the ESRI map.
		// Note:  The roadsLayer, imageryLayer, and hybridLayer constants are not in the ESRI map, 
		// but we use the library to tell which map service to call ~/js/directives/Maps.js			
        roadsLayer: { library: "Esri", type: "//www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2Fserver.arcgisonline.com%2Farcgis%2Frest%2Fservices%2FWorld_Street_Map%2FMapServer&source=sd", Display: 'Roads' },
		imageryLayer: { library: "Esri", type: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer", Display: 'Aerial' },

		
		// The Bing map is better, but we had problems with it.
        //roadsLayer: { library: "Bing", type: 'BingMapsRoad', Display: 'Roads' },
        //imageryLayer: { library: "Bing", type: 'BingMapsAerial', Display: 'Aerial' },
        //hybridLayer: { library: "Bing", type: 'BingMapsHybrid', Display: 'Hybrid' },
};

//analytics configuration
declare const ga: any;
// @ts-ignore
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    },
        // @ts-ignore
        i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', ANALYTICS_CODE, 'auto');
ga('send', 'pageview');