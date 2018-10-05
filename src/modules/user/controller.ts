import { Context } from '../../types/context'

export const users = async (_: any, __: any, { models: { User } }: Context) => User.find()

export const user = async (_: any, { id }: { id: string }, { models: { User } }: Context) => {
  const userData = await User.findById(id)

  return {
    ok: true,
    user: userData,
  }
}
