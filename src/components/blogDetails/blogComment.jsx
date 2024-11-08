import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { BASEURL } from '../../BaseURL/BaseURL'
import { formatDistanceToNowStrict } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import { BsReply, BsTrash } from 'react-icons/bs'
import './blogComment.css'
import './new.css'
import { MdEmojiEmotions } from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react'
import avatar from '../../../src/asset/avatar.png'

const BlogComments = ({ blogId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [replies, setReplies] = useState({})
  const [newReply, setNewReply] = useState('')
  const [activeReplyId, setActiveReplyId] = useState(null)
  const [showReplyForm, setShowReplyForm] = useState(false) // State for reply form visibility

  const [selectedGender, setSelectedGender] = useState('female')

  const handleChange = event => {
    setSelectedGender(event.target.value)
  }

  const textAreaRef = useRef(null)
  const pickerRef = useRef(null)
  const pickerRef2 = useRef(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showEmojiPicker2, setShowEmojiPicker2] = useState(false)

  const onEmojiClick = emojiData => {
    setNewComment(newComment + emojiData.emoji)
    setShowEmojiPicker(false)
    if (textAreaRef.current) {
      textAreaRef.current.focus()
      textAreaRef.current.setSelectionRange(
        newComment.length,
        newComment.length
      )
    }
  }
  const onEmojiClick2 = emojiData => {
    setNewReply(newReply + emojiData.emoji)
    setShowEmojiPicker2(false)
    if (textAreaRef.current) {
      textAreaRef.current.focus()
      textAreaRef.current.setSelectionRange(
        newComment.length,
        newComment.length
      )
    }
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false)
        textAreaRef.current.focus()
      }
      if (
        pickerRef2.current &&
        !pickerRef2.current.contains(event.target) &&
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target)
      ) {
        setShowEmojiPicker2(false)
        textAreaRef.current.focus()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/comments/${blogId}`)
        setComments(response.data)

        // Fetch replies for each comment
        const repliesData = {}
        for (const comment of response.data) {
          const replyResponse = await axios.get(
            `${BASEURL}/api/v1/replies/${comment._id}`
          )
          repliesData[comment._id] = replyResponse.data
        }
        setReplies(repliesData)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }
    fetchComments()
  }, [blogId])

  const handleCommentSubmit = async e => {
    e.preventDefault()
    try {
      const newCommentData = {
        blogId,
        content: newComment,
        createdAt: new Date().toISOString(),
        gender: selectedGender
      }
      await axios.post(`${BASEURL}/api/v1/comments`, newCommentData)
      setNewComment('')
      fetchComments()
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
  }

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault()
    try {
      const newReplyData = {
        blogId,
        commentId,
        content: newReply,
        createdAt: new Date().toISOString()
      }
      await axios.post(`${BASEURL}/api/v1/replies`, newReplyData)
      setNewReply('')
      setActiveReplyId(null)
      setShowReplyForm(false) // Hide the reply form after submitting

      // Update replies state after posting
      setReplies(prevReplies => ({
        ...prevReplies,
        [commentId]: [...(prevReplies[commentId] || []), newReplyData]
      }))
    } catch (error) {
      console.error('Error submitting reply:', error)
    }
  }

  const handleDeleteComment = async commentId => {
    try {
      await axios.delete(`${BASEURL}/api/v1/comments/${commentId}`)
      fetchComments()
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const handleDeleteReply = async (commentId, replyId) => {
    try {
      await axios.delete(`${BASEURL}/api/v1/replies/${replyId}`)
      fetchComments()
    } catch (error) {
      console.error('Error deleting reply:', error)
    }
  }

  const handleReplyToggle = commentId => {
    setActiveReplyId(commentId === activeReplyId ? null : commentId)
    setShowReplyForm(!showReplyForm) // Toggle the reply form visibility
  }

  return (
    <div className='blog-comments-container'>
      <form onSubmit={handleCommentSubmit} className='comment-form'>
        <input type='text' name='name' id='name' placeholder='Enter name...' />
        <div className='gender-container'>
          <label style={{ marginRight: '10px' }}>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={selectedGender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={selectedGender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
        </div>
        <div className='comment-box'>
          <div className='textarea-container'>
            {!showEmojiPicker && (
              <textarea
                style={{ resize: 'none' }}
                ref={textAreaRef}
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder='Write a comment...'
                required
              />
            )}
            <MdEmojiEmotions
              className='emoji-icon'
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div className='emoji-picker' ref={pickerRef}>
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  onOpen={event => event.preventDefault()}
                />
              </div>
            )}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>

      <h3>Comments</h3>
      <div className='comments-list'>
        {comments.map(comment => (
          <div key={comment._id} className='comment'>
            <div className='commentview2'>
              <div className='avatar3'>
                <img src={avatar} alt='profile pic' className='avatar' />
              </div>
              <div>
                <div className='nameTime'>
                  <span className='comment-author'>Anonymous</span>
                  <span className='comment-date'>
                    {formatDistanceToNowStrict(new Date(comment.createdAt))}
                  </span>
                </div>

                <div className='comment-content'>{comment.content}</div>
                <div className='replyDel'>
                  {/* <button
                    className='delu'
                    onClick={() => handleDeleteComment(comment._id)}
                  >
                    <BsTrash />
                  </button> */}

                  <span
                    className='reply2'
                    onClick={() => handleReplyToggle(comment._id)}
                  >
                    <BsReply /> <span>Reply</span>
                  </span>
                </div>
              </div>
            </div>

            {showReplyForm && activeReplyId === comment._id && (
              <form
                onSubmit={e => handleReplySubmit(e, comment._id)}
                className={`reply-form ${
                  activeReplyId === comment._id ? 'active' : ''
                }`}
              >
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter name...'
                />
                <div className='gender-container'>
                  <label style={{ marginRight: '10px' }}>
                    <input
                      type='radio'
                      name='gender'
                      value='female'
                      checked={selectedGender === 'female'}
                      onChange={handleChange}
                    />
                    Female
                  </label>

                  <label>
                    <input
                      type='radio'
                      name='gender'
                      value='male'
                      checked={selectedGender === 'male'}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                </div>
                <div className='comment-box'>
                  <div className='textarea-container'>
                    {!showEmojiPicker2 && (
                      <textarea
                        style={{ resize: 'none' }}
                        ref={textAreaRef}
                        value={newReply}
                        onChange={e => setNewReply(e.target.value)}
                        placeholder='Write a comment...'
                        required
                      />
                    )}
                    <MdEmojiEmotions
                      className='emoji-icon'
                      onClick={() => setShowEmojiPicker2(!showEmojiPicker2)}
                    />
                    {showEmojiPicker2 && (
                      <div className='emoji-picker2' ref={pickerRef2}>
                        <EmojiPicker
                          onEmojiClick={onEmojiClick2}
                          onOpen={event => event.preventDefault()}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className='reply-form-actions'>
                  <button type='submit'>Submit</button>
                  <button
                    type='button'
                    onClick={() => handleReplyToggle(comment._id)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className='replies-container'>
              {replies[comment._id] && replies[comment._id].length > 0 ? (
                replies[comment._id].map(reply => (
                  <div key={reply._id} className='reply'>
                    <div className='commentview'>
                      <div className='avatar3'>
                        <img
                          src={avatar}
                          alt='profile pic'
                          className='avatar2'
                        />
                      </div>
                      <div>
                        <div className='nameTime'>
                          <span className='reply-author'>Anonymous</span>
                          <span className='reply-date'>
                            {formatDistanceToNowStrict(
                              new Date(reply.createdAt)
                            )}{' '}
                            {/* ago */}
                          </span>
                        </div>
                        <div className='reply-content'>{reply.content}</div>
                        <div className='replyDel'>
                          {/* <button
                            className='delu'
                            onClick={() =>
                              handleDeleteReply(comment._id, reply._id)
                            }
                          >
                            <BsTrash />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No replies yet.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogComments
