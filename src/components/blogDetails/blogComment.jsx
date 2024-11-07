import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';
import { formatDistanceToNow } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { BsReply, BsTrash } from 'react-icons/bs';
import './blogComment.css'

const BlogComments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replies, setReplies] = useState({});
  const [newReply, setNewReply] = useState('');
  const [activeReplyId, setActiveReplyId] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/comments/${blogId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [blogId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCommentData = {
        blogId,
        content: newComment,
        createdAt: new Date().toISOString(),
      };
      await axios.post(`${BASEURL}/api/v1/comments`, newCommentData);
      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault();
    try {
      const newReplyData = {
        blogId,
        commentId,
        content: newReply,
        createdAt: new Date().toISOString(),
      };
      await axios.post(`${BASEURL}/api/v1/replies`, newReplyData);
      setNewReply('');
      setActiveReplyId(null);
      fetchComments();
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${BASEURL}/api/v1/comments/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleDeleteReply = async (commentId, replyId) => {
    try {
      await axios.delete(`${BASEURL}/api/v1/replies/${replyId}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting reply:', error);
    }
  };

  const handleReplyToggle = (commentId) => {
    setActiveReplyId(commentId === activeReplyId ? null : commentId);
  };

  return (
    <div className="blog-comments-container">
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <div className="comment-header">
              <span className="comment-author">Anonymous</span>
              <span className="comment-date">
                {formatDistanceToNow(new Date(comment.createdAt))} ago
              </span>
              <button
                className="delete-comment"
                onClick={() => handleDeleteComment(comment._id)}
              >
                <BsTrash />
              </button>
            </div>
            <div className="comment-content">{comment.content}</div>
            <div className="replies-container">
              {comment._id in replies
                ? replies[comment._id].map((reply) => (
                    <div key={reply._id} className="reply">
                      <div className="reply-header">
                        <span className="reply-author">Anonymous</span>
                        <span className="reply-date">
                          {formatDistanceToNow(new Date(reply.createdAt))} ago
                        </span>
                        <button
                          className="delete-reply"
                          onClick={() =>
                            handleDeleteReply(comment._id, reply._id)
                          }
                        >
                          <BsTrash />
                        </button>
                      </div>
                      <div className="reply-content">{reply.content}</div>
                    </div>
                  ))
                : null}
              <form
                onSubmit={(e) => handleReplySubmit(e, comment._id)}
                className={`reply-form ${
                  activeReplyId === comment._id ? 'active' : ''
                }`}
              >
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  placeholder="Write a reply..."
                  required
                />
                <div className="reply-form-actions">
                  <button type="submit">Submit</button>
                  <button
                    type="button"
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
  );
};

export default BlogComments;