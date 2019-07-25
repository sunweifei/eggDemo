'use strict';

const Controller = require('egg').Controller;

// eslint-disable-next-line no-unused-vars
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(1);
    const user = await ctx.model.User.findByPk(id);
    console.log(user);
    ctx.body = 'hi.egg';
  }
}

module.exports = HomeController;
