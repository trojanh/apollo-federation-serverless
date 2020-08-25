import PostModel from '../Model'
export default async (parent, args, context) => {
  try {
    console.log({data: args})
    const { page, limit }  = args.requests.cursor

    const postCollections = await PostModel.find({})
    .sort({ createdAt: -1 })
    .skip(page * limit) //Notice here
    .limit(limit)
    .lean()
    console.log({postCollections})
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
