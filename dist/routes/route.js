"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRoute {
    constructor() {
        this.title = "NS8 Test";
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.render(view, options);
    }
}
exports.BaseRoute = BaseRoute;
