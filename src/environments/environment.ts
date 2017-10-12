// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAGogPRvcZMiUZS2a4oLnhLOuuywXI7PtI',
    authDomain: 'chat-demo-a204d.firebaseapp.com',
    databaseURL: 'https://chat-demo-a204d.firebaseio.com',
    projectId: 'chat-demo-a204d',
    storageBucket: 'chat-demo-a204d.appspot.com',
    messagingSenderId: '539799933789'
  }
};
