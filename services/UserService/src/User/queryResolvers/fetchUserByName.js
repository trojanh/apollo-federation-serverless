import UserModel from '../Model'
export default async (parent, args, context) => {
  try {
    const { name: rawName = '' } = args.request.data
    const name = rawName.trim().toLowerCase()
    const userCollection = await UserModel.findOne({
      name
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
