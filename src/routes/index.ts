import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import fetcher from "node-fetch";

import {PostModel, CommentModel, PhotoModel, UserModel} from "../interfaces"

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

    //add landing page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().landing(req, res, next);
    });

    // add profile route
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

    const post: PostModel = await this.getPost();
    const comment: CommentModel = await this.getComment();
    const photo: PhotoModel = await this.getPhoto();

    
    this.render(req, res, "landing", {post, comment, photo});

  }

  public async profile(req: Request, res: Response, next: NextFunction) {
    const user: UserModel = await this.getUser();

    this.render(req, res, "profile", {user});

  }

  private async getUser(): Promise<any>{
    try{
      let user_data = await fetcher('https://jsonplaceholder.typicode.com/users/1');
      let user = await user_data.json();
      return user
    }catch(err){
      console.log(err)
    }
  }

  private async getPost(): Promise<any>{
    try{
      let post_data = await fetcher('https://jsonplaceholder.typicode.com/posts/1');
      let post = await post_data.json();
      return post
    }catch(err){
      console.log(err)
    }
  }

  private async getComment(): Promise<any>{
    try{
      let comment_data = await fetcher('https://jsonplaceholder.typicode.com/comments/1');
      let comment = await comment_data.json();
      return comment
    }catch(err){
      console.log(err)
    }
  }

  private async getPhoto(): Promise<any>{
    try{
      let photo_data = await fetcher('https://jsonplaceholder.typicode.com/photos/1');
      let photo = await photo_data.json();
      return photo
    }catch(err){
      console.log(err)
    }
  }
}