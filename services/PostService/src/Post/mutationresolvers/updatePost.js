import PostModel from '../Model'

export default async (parent, args, context) => {
  try {
    const { data: postInfo } = args.request
    const { postId } = postInfo

    await PostModel.updateOne({ _id: postId }, postInfo)

    return {
      success: true,
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
