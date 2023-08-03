import { Model } from 'pinia-orm'

export class UserORM extends Model {
  static entity = 'users_orm'

  static hidden = ['password']

  static fields () {
    return {
      id: this.string(''),
      avatar: this.string(''),
      password: this.string(''),
      role: this.string(''),
      username: this.string('')
    }
  }

  declare id: string
  declare avatar: string
  declare password: string
  declare role: string
  declare username: string
}
