import UserModel from '../Model'
export default async (parent, args, context) => {
  try {
    const { userId } = args.request.data

    const userCollection = await UserModel.findOne({
      _id: userId
    }).lean()

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
