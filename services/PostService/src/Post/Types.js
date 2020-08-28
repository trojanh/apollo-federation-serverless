export default `

input fetchPostByUserIdInputData {
    userId : String
}

input fetchPostByUserIdInput {
    data : fetchPostByUserIdInputData
}

input fetchPostByIdInputData {
    postId : String
}

input fetchPostByIdInput {
    data : fetchPostByIdInputData
}

input fetchAllPostsInput {
    cursor : fetchAllPostsInputData
}

input fetchAllPostsInputData {
    page : Int
    limit : Int
}

input updatePostInputData{
    postId : String
    name : String
    description : String
}

input updatePostInput{
    data : updatePostInputData
}

input createPostInputData {
    userId : String
    name : String
    description : String
}

input createPostInput{
    data : createPostInputData
}

type fetchPostByUserResponse {
    success : Boolean
    data : [Post]
    error : Error
}

type fetchPostByIdResponse {
    success : Boolean
    data : Post
    error : Error
}

type updatePostResponse{
    success : Boolean
    error : Error
}

type createPostResponse {
    success : Boolean
    data : Post
    error : Error
}

type fetchAllPostsResponse {
    success : Boolean
    hasMore: Boolean
    data : [Post]
    error : Error
}

`