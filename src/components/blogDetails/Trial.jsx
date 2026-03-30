import React, { useState } from 'react'
import { BsTrash, BsReply } from 'react-icons/bs'
import { formatDistanceToNow } from 'date-fns'
import EmojiPicker from 'emoji-picker-react'

const Trial = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [newReply, setNewReply] = useState('')
  const [activeReplyId, setActiveReplyId] = useState(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('male')
  const [replies, setReplies] = useState({})

  const handleCommentSubmit = e => {
    e.preventDefault()
    // Add the selectedEmoji to the new comment content
    const newCommentData = {
      content: newComment + selectedEmoji, // Concatenate emoji
      createdAt: new Date(),
      name,
      gender
    }
    setComments([...comments, newCommentData])
    setNewComment('')
    setSelectedEmoji(null) // Reset selected emoji
  }

  const handleDeleteComment = commentId => {
    setComments(comments.filter(comment => comment._id !== commentId))
  }

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault()
    const newReplyData = {
      content: newReply,
      createdAt: new Date()
    }
    setReplies(prevReplies => ({
      ...prevReplies,
      [commentId]: prevReplies[commentId]
        ? [...prevReplies[commentId], newReplyData]
        : [newReplyData]
    }))
    setNewReply('')
    setActiveReplyId(null)
  }

  const handleDeleteReply = (commentId, replyId) => {
    setComments(
      comments.map(comment =>
        comment._id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter(reply => reply._id !== replyId)
            }
          : comment
      )
    )
  }

  const handleReplyToggle = commentId => {
    setActiveReplyId(activeReplyId === commentId ? null : commentId)
  }

  //   const handleEmojiClick = (emojiObject, event) => {
  //     setSelectedEmoji(emojiObject.emoji)
  //     setShowEmojiPicker(false)
  //   }

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleGenderChange = e => {
    setGender(e.target.value)
  }

  const handleEmojiClick = (emojiObject, event) => {
    // Update newComment by adding the selected emoji
    setNewComment(newComment + emojiObject.emoji)
    setShowEmojiPicker(false)
  }

  return (
    <div className='blog-comments-container'>
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit} className='comment-form'>
        <div className='comment-form-input'>
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Your Name'
            required
          />
          <div className='gender-radio'>
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            <label htmlFor='female'>Female</label>
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
          </div>
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder='Write a comment...'
            required
          />
          <div className='emoji-trigger'>
            <button type='button' onClick={handleEmojiPickerToggle}>
              {/* Your Emoji Icon */}A
            </button>
          </div>
        </div>
        <button type='submit'>Submit</button>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </form>

      <div className='comments-list'>
        {comments.map(comment => (
          <div key={comment._id} className='comment'>
            <div className='comment-header'>
              <div className='comment-profile'>
                {/* Your Default Profile Picture */}
              </div>
              <div className='comment-author-info'>
                <span className='comment-author'>{comment.name}</span>
                <span className='comment-date'>
                  {formatDistanceToNow(new Date(comment.createdAt))} ago
                </span>
              </div>
              <button
                className='delete-comment'
                onClick={() => handleDeleteComment(comment._id)}
              >
                <BsTrash />
              </button>
            </div>

            <div className='comment-content'>{comment.content}</div>
            <div className='replies-container'>
              {/* This part was modified to access and display replies */}
              {comment._id in replies
                ? replies[comment._id].map(reply => (
                    <div key={reply._id} className='reply'>
                      <div className='reply-header'>
                        <span className='reply-author'>Anonymous</span>
                        <span className='reply-date'>
                          {formatDistanceToNow(new Date(reply.createdAt))} ago
                        </span>
                        <button
                          className='delete-reply'
                          onClick={() =>
                            handleDeleteReply(comment._id, reply._id)
                          }
                        >
                          <BsTrash />
                        </button>
                      </div>
                      <div className='reply-content'>{reply.content}</div>
                    </div>
                  ))
                : null}
              <form
                onSubmit={e => handleReplySubmit(e, comment._id)}
                className={`reply-form ${
                  activeReplyId === comment._id ? 'active' : ''
                }`}
              >
                <textarea
                  value={newReply}
                  onChange={e => setNewReply(e.target.value)}
                  placeholder='Write a reply...'
                  required
                />

                <div className='reply-form-actions'>
                  <button type='submit'>Submit</button>
                  <button
                    type='button'
                    onClick={() => handleReplyToggle(comment._id)}
                  >
                    <BsReply /> Reply
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

;<style jsx>
  {`
    .blog-comments-container {
      margin-top: 1000px;
    }
  `}
</style>

export default Trial
