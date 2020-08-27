import UserModel from '../Model'

export default async (parent, args, context) => {
  try {
    const { data: userInfo } = args.request
    const { name: rawName = '' } = userInfo
    const name = rawName.trim().toLowerCase()
    const existingUser = await UserModel.findOne({ name })
    if (existingUser) throw new Error('Username already taken.')
    const userCollection = await UserModel.create({ ...userInfo, name })
    return {
      success: true,
      data: userCollection,
      error: null
    }
  } catch (e) {
    console.log(e)

    return {
      success: false,
      error: {
        status: 500,
        message: e
      }
    }
  }
}
