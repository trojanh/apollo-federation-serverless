export default `

  input fetchUserByIdInputData {
      userId : String!
  }

  input fetchUserByNameInputData {
    name : String!
  }

  input fetchUserByNameInput {
    data : fetchUserByNameInputData!
  }

  input fetchUserByIdInput {
      data : fetchUserByIdInputData!
  }

  input createUserInputData {
      name: String!
      email: String
  }

  input createUserInput {
      data : createUserInputData
  }

  type fetchAllUserResponse{
      success : Boolean
      data : [User!]
      error : Error
  }

  type fetchUserByNameResponse {
    success : Boolean
    data : User
    error : Error
  }

  type fetchUserByIdResponse {
      success : Boolean
      data : User
      error : Error
  }

  type createUserResponse {
      success : Boolean
      data : User
      error : Error
  }
`
