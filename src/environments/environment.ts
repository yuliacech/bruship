// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // backend deployed on render
  baseApiUrl: 'https://bruship-server.onrender.com',
  // local backend
  // baseApiUrl: 'http://localhost:8080',
  trackingID: '',
  originUrl: 'http://localhost:4200',
  auth0ID: 'KCe6woO5i4jWrPVlFgeNQI0VBH4xklK3'
};
