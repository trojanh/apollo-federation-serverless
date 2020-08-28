import React, { useState } from 'react'
import './AddStackItem.css'
import { useAddPosts } from '../hooks'
import { TextArea } from './TextArea'
import { Input } from './Input'

const AddNewButton = ({ toggleNewPostsForm }) => {
  return (
    <>
      <div className="section"></div>
      <div className="section title" onClick={toggleNewPostsForm}>
        Add New
      </div>
      <div className="section"></div>
    </>
  )
}

const NewPostForm = ({
  name,
  updateName,
  author,
  updateAuthor,
  description,
  updateDescription,
  submitPost,
  toggleNewPostsForm
}) => {
  return (
    <>
      <Input label={'name'} value={name} handleChange={updateName} />
      <TextArea
        label={'description'}
        value={description}
        handleChange={updateDescription}
      />
      <Input label={'author'} value={author} handleChange={updateAuthor} />
      <div>
        <button onClick={submitPost}>Submit</button>
        <button onClick={toggleNewPostsForm}>Cancel</button>
      </div>
    </>
  )
}
export default function AddStackItem() {
  const [isAddClicked, toggleIsAddClicked] = useState(false)
  const toggleNewPostsForm = () => toggleIsAddClicked(!isAddClicked)
  const [addNewPost, response] = useAddPosts()

  const [name, updateName] = useState('')
  const [description, updateDescription] = useState('')
  const [author, updateAuthor] = useState('')
  const resetForm = () => {
    updateName('')
    updateDescription('')
    updateAuthor('')
  }
  const submitPost = () => {
    addNewPost({
      variables: {
        post: {
          name,
          description,
          userId: author
        }
      }
    })
    resetForm()
    toggleNewPostsForm()
    console.log({ name, description, author })
  }
  return (
    <div
      key={`keyNew`}
      className="wrapper"
      style={{
        background: 'rgb(228 16 45)'
      }}
    >
      {response.loading ? (
        <div> Adding ...</div>
      ) : !isAddClicked ? (
        <AddNewButton toggleNewPostsForm={toggleNewPostsForm} />
      ) : (
        <NewPostForm
          name={name}
          updateName={updateName}
          description={description}
          updateDescription={updateDescription}
          author={author}
          updateAuthor={updateAuthor}
          submitPost={submitPost}
          toggleNewPostsForm={toggleNewPostsForm}
        />
      )}
    </div>
  )
}
