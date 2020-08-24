import PostModel from '../Model'

export default async (parent, args, context) => {
  try {
    const { postId } = args.request.data

    const postCollection = await PostModel.findOne({ _id: postId }).lean()

    return {
      success: true,
      data: postCollection,
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
