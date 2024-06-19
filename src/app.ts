import 'dotenv/config'
import Server from './models/server';

(async()=> {
  main();
})();


function main() {
  const server = new Server();
  server.listen();
}