// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  API_URL: 'https://api.openweathermap.org/data/2.5/',
  API_KEY: '38aee4dd3ef50715f5644f4f7a63e31d',
  API_IMG_LOC: 'https://openweathermap.org/img/wn/',
  API_GOOGLE_APIS: 'https://maps.googleapis.com/maps/api/geocode/json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
