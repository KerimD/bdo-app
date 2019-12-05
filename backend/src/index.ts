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

const fixRoundOff = (num: number) => {
  return Math.trunc(num * 10000) / 10000;
}

const generateAccessoryChances = () => {
    let SUCCESS_ACCESSORIES = new Array(121);

    SUCCESS_ACCESSORIES[0] = new Array();

    // setting the base success chance
    SUCCESS_ACCESSORIES[0][0] = 0.25;
    SUCCESS_ACCESSORIES[0][1] = 0.1;
    SUCCESS_ACCESSORIES[0][2] = 0.075;
    SUCCESS_ACCESSORIES[0][3] = 0.025;
    SUCCESS_ACCESSORIES[0][4] = 0.005;

    // fs = failstack
    for (let fs = 1; fs < 121; fs++) {
        SUCCESS_ACCESSORIES[fs] = new Array();

        // previous values
        let prevValue_0 = SUCCESS_ACCESSORIES[fs - 1][0];
        let prevValue_1 = SUCCESS_ACCESSORIES[fs - 1][1];
        let prevValue_2 = SUCCESS_ACCESSORIES[fs - 1][2];
        let prevValue_3 = SUCCESS_ACCESSORIES[fs - 1][3];
        let prevValue_4 = SUCCESS_ACCESSORIES[fs - 1][4];

        // if (failstack <= some_number) then incrememnt the previous value by some decimal
        if (fs <= 18) {
            SUCCESS_ACCESSORIES[fs][0] = fixRoundOff(prevValue_0 + 0.025);
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.01);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0075);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0025);
        } else if (fs <= 40) {
            SUCCESS_ACCESSORIES[fs][0] = fixRoundOff(prevValue_0 + 0.005);
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.01);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0075);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0025);
        } else if (fs <= 44) {
            SUCCESS_ACCESSORIES[fs][0] = fixRoundOff(prevValue_0 + 0.005);
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.002);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0075);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0025);
        } else if (fs <= 58) {
            SUCCESS_ACCESSORIES[fs][0] = fixRoundOff(prevValue_0 + 0.005);
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.002);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0015);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0025);
        } else if (fs <= 110) {
            SUCCESS_ACCESSORIES[fs][0] = prevValue_0;
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.002);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0015);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0025);
        } else {
            SUCCESS_ACCESSORIES[fs][0] = prevValue_0;
            SUCCESS_ACCESSORIES[fs][1] = fixRoundOff(prevValue_1 + 0.002);
            SUCCESS_ACCESSORIES[fs][2] = fixRoundOff(prevValue_2 + 0.0015);
            SUCCESS_ACCESSORIES[fs][3] = fixRoundOff(prevValue_3 + 0.0005);
        }

        // the amount that the level 'TET - PEN' increases never changes
        SUCCESS_ACCESSORIES[fs][4] = fixRoundOff(prevValue_4 + 0.0005);
    }

    return SUCCESS_ACCESSORIES;
};

router.get('/accessory', async (ctx: Koa.ParameterizedContext) => {
    ctx.status = 200;
    ctx.body = generateAccessoryChances();
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
