import Koa from 'koa';
import Router from 'koa-router';
import bodyParser = require('body-parser');

const router: Router = new Router();
const app: Koa = new Koa();

app.use(bodyParser());

router.get('/', async (ctx: Koa.ParameterizedContext) => {
    ctx.status = 200;
    ctx.body = 'Hello, World!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
