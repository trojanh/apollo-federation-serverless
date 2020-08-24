import UserModel from '../Model'

export default async (parent, args, context) => {
  try {
    const { data: userInfo } = args.request
    const userCollection = await UserModel.create(userInfo)
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
