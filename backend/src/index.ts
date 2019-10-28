import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

const router: Router = new Router();
const app: Koa = new Koa();

app.use(bodyParser());
app.use(cors());

router.get('/', async (ctx: Koa.ParameterizedContext) => {
    ctx.status = 200;
    ctx.body = 'Hello, World!';
});

router.get('/fs', async (ctx: Koa.ParameterizedContext) => {
    let costFs = new Array(122);

    for (let fs = 0; fs < 122; fs++) {
        // polynomial to predict the cost of failstacks
        costFs[fs] =
            -0.0126 * fs ** 6 +
            3.4562 * fs ** 5 -
            327.46 * fs ** 4 +
            16654 * fs ** 3 -
            335630 * fs ** 2 +
            2000000 * fs -
            1000000;
    }

    ctx.status = 200;
    ctx.body = costFs;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
