import React, { useCallback, useState } from 'react'
import StackGrid from 'react-stack-grid'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { StackItem } from './StackItem'
import AddStackItem from './AddStackItem'
import { usePosts } from '../hooks'

const StackComponent = () => {
  const { posts: allPosts, loading, loadMore, hasMore } = usePosts(5)
  const [page, updatePage] = useState(0)
  const handleOnDocumentBottom = useCallback(() => {
    if (hasMore) {
      updatePage(page + 1)
      loadMore(page + 1)
    }
    console.log({ hasMore, page })
  }, [page, hasMore])
  useBottomScrollListener(handleOnDocumentBottom)

  if (loading) {
    return <p>Loading ...</p>
  }

  console.log({ allPosts, hasMore })
  return (
    <StackGrid columnWidth={200}>
      <AddStackItem />
      {allPosts.map((post) => (
        <StackItem key={post._id} post={post} />
      ))}
    </StackGrid>
  )
}

export default StackComponent
