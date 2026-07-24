import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL } from '../../BaseURL/BaseURL'
import { sanitizeName } from '../../utils/sanitizeName'
import { formatDistanceToNowStrict } from 'date-fns'
import { BsReply } from 'react-icons/bs'
import './blogComment.css'
import './new.css'
import { MdEmojiEmotions } from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react'

const COMMENTER_STORAGE_KEY = 'elonatech_commenter_info'

const getInitials = (name) => {
  const source = (name || '').trim() || 'Anonymous'
  const parts = source.split(/\s+/)
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() || '').join('') || 'A'
}

const Avatar = ({ name, size = 'md' }) => (
  <div className={`comment-avatar comment-avatar-${size}`}>{getInitials(name)}</div>
)

const BlogComments = ({ blogId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [replies, setReplies] = useState({})
  const [newReply, setNewReply] = useState('')
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [saveInfo, setSaveInfo] = useState(false)
  const [activeReplyId, setActiveReplyId] = useState(null)
  const [showReplyForm, setShowReplyForm] = useState(false)

  const textAreaRef = useRef(null)
  const pickerRef = useRef(null)
  const pickerRef2 = useRef(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showEmojiPicker2, setShowEmojiPicker2] = useState(false)

  // Prefill from a previous "save my info" comment, WordPress-style
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(COMMENTER_STORAGE_KEY) || 'null')
      if (saved) {
        setUsername(saved.userName || '')
        setEmail(saved.email || '')
        setSaveInfo(true)
      }
    } catch (err) {
      // ignore corrupt storage
    }
  }, [])

  const persistCommenterInfo = () => {
    if (saveInfo) {
      localStorage.setItem(COMMENTER_STORAGE_KEY, JSON.stringify({ userName, email }))
    } else {
      localStorage.removeItem(COMMENTER_STORAGE_KEY)
    }
  }

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

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/v1/comments/${blogId}`)
      setComments(response.data)

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

  useEffect(() => {
    fetchComments()
  }, [blogId])

  const handleCommentSubmit = async e => {
    e.preventDefault()
    try {
      const newCommentData = {
        blogId,
        content: newComment,
        createdAt: new Date().toISOString(),
        userName,
        email
      }
      await axios.post(`${BASEURL}/api/v1/comments`, newCommentData)
      persistCommenterInfo()
      setNewComment('')
      await fetchComments()
      toast.success('Your comment has been posted!')
    } catch (error) {
      console.error('Error submitting comment:', error)
      toast.error('Failed to post your comment. Please try again.')
    }
  }

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault()
    try {
      const newReplyData = {
        blogId,
        commentId,
        content: newReply,
        createdAt: new Date().toISOString(),
        userName,
        email
      }
      await axios.post(`${BASEURL}/api/v1/replies`, newReplyData)
      persistCommenterInfo()
      setNewReply('')
      setActiveReplyId(null)
      setShowReplyForm(false)

      setReplies(prevReplies => ({
        ...prevReplies,
        [commentId]: [...(prevReplies[commentId] || []), newReplyData]
      }))
      toast.success('Your reply has been posted!')
    } catch (error) {
      console.error('Error submitting reply:', error)
      toast.error('Failed to post your reply. Please try again.')
    }
  }

  const handleDeleteComment = async commentId => {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
      await axios.delete(`${BASEURL}/api/v1/comments/${commentId}`, { headers: { 'x-access-token': token } })
      fetchComments()
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const handleDeleteReply = async (commentId, replyId) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
      await axios.delete(`${BASEURL}/api/v1/replies/${replyId}`, { headers: { 'x-access-token': token } })
      fetchComments()
    } catch (error) {
      console.error('Error deleting reply:', error)
    }
  }

  const handleReplyToggle = commentId => {
    setActiveReplyId(commentId === activeReplyId ? null : commentId)
    setShowReplyForm(!showReplyForm)
  }

  return (
    <div className='blog-comments-container'>
      <h3
        style={{
          marginBottom: '5px',
          border: 'none',
          textDecoration: 'underline'
        }}
      >
        Leave a Reply
      </h3>
      <p className='comment-form-note'>Your email address will not be published. Required fields are marked *</p>
      <form onSubmit={handleCommentSubmit} className='comment-form'>
        <label className='comment-field-label' htmlFor='comment-content'>Comment *</label>
        <div className='comment-box'>
          <div className='textarea-container'>
            {!showEmojiPicker && (
              <textarea
                id='comment-content'
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

        <div className='comment-field-row'>
          <div className='comment-field'>
            <label className='comment-field-label' htmlFor='comment-name'>Name *</label>
            <input
              type='text'
              id='comment-name'
              placeholder='Your name'
              value={userName}
              onChange={e => setUsername(sanitizeName(e.target.value))}
              required
            />
          </div>
          <div className='comment-field'>
            <label className='comment-field-label' htmlFor='comment-email'>Email *</label>
            <input
              type='email'
              id='comment-email'
              placeholder='you@example.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <label className='comment-save-info'>
          <input
            type='checkbox'
            checked={saveInfo}
            onChange={e => setSaveInfo(e.target.checked)}
          />
          Save my name and email in this browser for the next time I comment.
        </label>

        <button type='submit' className='comment-submit-btn'>Post Comment</button>
      </form>

      <h3
        style={{
          marginBottom: '20px',
          border: 'none',
          textDecoration: 'underline'
        }}
      >
        Comments
      </h3>
      <div
        className='comments-list'
        style={{ maxHeight: '700px', overflowY: 'auto' }}
      >
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment._id} className='comment'>
              <div className='commentview2'>
                <div className='avatar3'>
                  <Avatar name={comment.userName} />
                </div>
                <div>
                  <div className='nameTime'>
                    <span className='comment-author'>
                      {comment.userName || 'Anonymous'}
                    </span>
                    <span className='comment-date'>
                      {formatDistanceToNowStrict(new Date(comment.createdAt))}{' '}
                      {comment.updatedAt &&
                      comment.updatedAt !== comment.createdAt
                        ? '(edited)'
                        : ''}
                    </span>
                  </div>
                  <div className='comment-content'>{comment.content}</div>
                  <div className='replyDel'>
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
                  <div className='comment-box'>
                    <div className='textarea-container'>
                      {!showEmojiPicker2 && (
                        <textarea
                          style={{ resize: 'none' }}
                          ref={textAreaRef}
                          value={newReply}
                          onChange={e => setNewReply(e.target.value)}
                          placeholder='Write a reply...'
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

                  <div className='comment-field-row'>
                    <div className='comment-field'>
                      <label className='comment-field-label'>Name *</label>
                      <input
                        type='text'
                        placeholder='Your name'
                        value={userName}
                        onChange={e => setUsername(sanitizeName(e.target.value))}
                        required
                      />
                    </div>
                    <div className='comment-field'>
                      <label className='comment-field-label'>Email *</label>
                      <input
                        type='email'
                        placeholder='you@example.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className='reply-form-actions'>
                    <button type='submit'>Post Reply</button>
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
                          <Avatar name={reply.userName} size='sm' />
                        </div>
                        <div>
                          <div className='nameTime'>
                            <span className='reply-author'>
                              {reply.userName || 'Anonymous'}
                              {reply.isAdmin && (
                                <span className='reply-admin-badge'>Team</span>
                              )}
                            </span>
                            <span className='reply-date'>
                              {formatDistanceToNowStrict(
                                new Date(reply.createdAt)
                              )}
                            </span>
                          </div>
                          <div className='reply-content'>{reply.content}</div>
                          <div className='replyDel' />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No replies yet.</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className='no-comments'>
            No comments have been added to this post.
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogComments
