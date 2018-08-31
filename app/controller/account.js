const { Controller } = require('egg')

class AccountController extends Controller {
  constructor(ctx) {
    super(ctx)
    this.Model = ctx.model.Account
    this.Rule = {
      title: { type: 'string', required: true },
      name: { type: 'string', required: true }
    }
  }

  async create() {
    const { title, name, show, index } = this.ctx.request.body
    const create = {
      title,
      name,
      show,
      index
    }

    this.ctx.validate(this.Rule, create)
    this.Model.create(create)
    this.ctx.body = create
  }

  async delete() {
    const { id } = this.ctx.params

    await this.Model.destroy({
      where: {
        id
      }
    })
    this.ctx.body = { id }
  }

  async update() {
    const { id } = this.ctx.params
    const { title, name, show, index } = this.ctx.request.body
    const update = {
      title,
      name,
      show,
      index
    }

    this.ctx.validate(this.Rule, update)

    const data = await this.Model.findOne({ where: { id } })
    if (!data) throw new Error('Not Found')

    this.Model.update(update, {
      where: { id }
    })
    this.ctx.body = update
  }

  async list() {
    const list = await this.Model.findAll()
    const total = await this.Model.count()

    this.ctx.body = {
      list,
      total
    }
  }

  async id() {
    const { id } = this.ctx.params

    const data = await this.Model.findOne({ where: { id } })
    this.ctx.body = data
  }
}

module.exports = AccountController
