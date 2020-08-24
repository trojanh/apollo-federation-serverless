import PostModel from '../Model'
export default async (parent, args, context) => {
  try {
    const postCollections = await PostModel.find({}, null, {
      sort: { createdAt: 1 }
    }).lean()

    return {
      success: true,
      data: postCollections,
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
