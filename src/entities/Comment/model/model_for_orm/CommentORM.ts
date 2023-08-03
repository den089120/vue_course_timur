import { Model } from 'pinia-orm'
import { UserORM } from './UserORM'

export class CommentORM extends Model {
  static entity = 'articles_orm'

  static fields () {
    return {
      id: this.string(''),
      articlesId: this.string(''),
      text: this.string(''),
      userId: this.string(''),
      user: this.belongsTo(UserORM, 'userId')
    }
  }

  declare id: string
  declare articlesId: string
  declare text: string
  declare userId: string
  declare user: UserORM
}
