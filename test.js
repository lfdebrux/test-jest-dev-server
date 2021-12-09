const { setup: setupDevServer } = require('jest-dev-server');

(async() => {
  await setupDevServer({
    command: `npx http-server -p 3000`,
    launchTimeout: 50000,
    port: 3000,
  })
  console.log("dev server is running")
})();
