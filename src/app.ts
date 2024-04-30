import express,{Express, Request, Response} from 'express'
import config from '../config/default';
import routes from './routes'
import pino from 'pino'

const app = express();
const logger = pino({
    level: 'info'    
  });
  app.use(express.json()); 
app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');
});
app.listen(config.appPort,async()=>{
    logger.info(`Server is running on port ${config.appPort}`);
    routes('get',app);
    routes('getnew',app);
    routes('save',app);
});