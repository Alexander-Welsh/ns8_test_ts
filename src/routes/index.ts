import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import fetcher from "node-fetch";


/**
 * / route
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().landing(req, res, next);
    });

    router.get("/profile", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().profile(req, res, next);
    });

  }
  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public async landing(req: Request, res: Response, next: NextFunction) {

    const post = await this.getPost()
    const comment = await this.getComment()
    const photo = await this.getPhoto()

    
    this.render(req, res, "landing", {post, comment, photo});

  }

  public async profile(req: Request, res: Response, next: NextFunction) {
    const user = await this.getUser()
    console.log(user)

    this.render(req, res, "profile", {user});

  }

  private async getUser(){
    try{
      let user_data = await fetcher('https://jsonplaceholder.typicode.com/users/1');
      let user = await user_data.json()
      // console.log(user)
      return user
    }catch(err){
      console.log(err)
    }
  }

  private async getPost(){
    try{
      let post_data = await fetcher('https://jsonplaceholder.typicode.com/posts/1');
      let post = await post_data.json()
      return post
    }catch(err){
      console.log(err)
    }
  }

  private async getComment(){
    try{
      let comment_data = await fetcher('https://jsonplaceholder.typicode.com/comments/1');
      let comment = await comment_data.json()
      return comment
    }catch(err){
      console.log(err)
    }
  }

  private async getPhoto(){
    try{
      let photo_data = await fetcher('https://jsonplaceholder.typicode.com/photos/1');
      let photo = await photo_data.json()
      return photo
    }catch(err){
      console.log(err)
    }
  }
}