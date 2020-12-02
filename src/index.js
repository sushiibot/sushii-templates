const Koa = require('koa');
const serve = require('koa-static');
const Handlebars = require("handlebars");
const fs = require("fs");
const util = require("util");
const path = require("path");

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.query);
    if (ctx.path.endsWith("hbs")) {
        const file = await util.promisify(fs.readFile)(path.join(__dirname, ctx.path));
        const template = Handlebars.compile(file.toString());
        ctx.body = template(ctx.query);
    }

    await next();
});

app.use(serve("."));

app.listen(8000);
console.log("Listening on :8000");
