"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const node_fetch_1 = require("node-fetch");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().landing(req, res, next);
        });
        router.get("/profile", (req, res, next) => {
            new IndexRoute().profile(req, res, next);
        });
    }
    constructor() {
        super();
    }
    landing(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.getPost();
            const comment = yield this.getComment();
            const photo = yield this.getPhoto();
            this.render(req, res, "landing", { post, comment, photo });
        });
    }
    profile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            console.log(user);
            this.render(req, res, "profile", { user });
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user_data = yield node_fetch_1.default('https://jsonplaceholder.typicode.com/users/1');
                let user = yield user_data.json();
                return user;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getPost() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let post_data = yield node_fetch_1.default('https://jsonplaceholder.typicode.com/posts/1');
                let post = yield post_data.json();
                return post;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getComment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let comment_data = yield node_fetch_1.default('https://jsonplaceholder.typicode.com/comments/1');
                let comment = yield comment_data.json();
                return comment;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let photo_data = yield node_fetch_1.default('https://jsonplaceholder.typicode.com/photos/1');
                let photo = yield photo_data.json();
                return photo;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.IndexRoute = IndexRoute;
