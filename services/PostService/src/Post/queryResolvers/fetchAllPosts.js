import PostModel from '../Model'
export default async (parent, args, context) => {
  try {
    console.log({ data: args })
    const { page, limit } = args.requests.cursor

    const postCollections = await PostModel.find({}, null, {
      skip: page * limit,
      limit,
      sort: { createdAt: -1 }
    })

    const postsCount = await PostModel.countDocuments({ })

    console.log({ postCollections, size: postsCount, count: page * limit+limit })
    return {
      success: true,
      data: postCollections,
      hasMore: postsCount > (page * limit + limit),
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
