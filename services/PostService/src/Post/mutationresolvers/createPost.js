import PostModel from '../Model'
export default async (parent, args, context) => {
  try {
    const { data: postInfo } = args.request

    const postCollection = await PostModel.create(postInfo)

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
