import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { BASEURL } from "../../BaseURL/BaseURL";

const getToken = () => JSON.parse(localStorage.getItem("token"));

// Bell + dropdown, rendered once in AdminSidebar so it's visible on every
// admin page. Polls the unread count so the badge stays fresh without a
// socket connection.
const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const panelRef = useRef(null);

  const fetchUnreadCount = useCallback(async () => {
    try {
      const res = await axios.get(`${BASEURL}/api/v1/notifications/unread-count`, {
        headers: { "x-access-token": getToken() },
      });
      setUnreadCount(res.data.count);
    } catch (error) {
      // Silent — the badge just won't update this cycle
    }
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/notifications/all`, {
        headers: { "x-access-token": getToken() },
      });
      setNotifications(res.data);
    } catch (error) {
      // Silent — dropdown just stays empty
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 45000);
    return () => clearInterval(interval);
  }, [fetchUnreadCount]);

  // Close the dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = () => {
    const next = !open;
    setOpen(next);
    if (next) fetchNotifications();
  };

  const markAsRead = async (id) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/notifications/${id}/read`,
        {},
        { headers: { "x-access-token": getToken() } }
      );
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      // Silent
    }
  };

  const markAllAsRead = async () => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/notifications/read-all`,
        {},
        { headers: { "x-access-token": getToken() } }
      );
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (error) {
      // Silent
    }
  };

  return (
    <div className="nbell-wrapper" ref={panelRef}>
      <button
        className="nbell-btn"
        onClick={toggleOpen}
        aria-label="Notifications"
      >
        <i className="bi bi-bell-fill"></i>
        {unreadCount > 0 && (
          <span className="nbell-badge">{unreadCount > 99 ? "99+" : unreadCount}</span>
        )}
      </button>

      {open && (
        <div className="nbell-panel">
          <div className="nbell-panel-header">
            <h6 className="nbell-panel-title">Notifications</h6>
            {unreadCount > 0 && (
              <button className="nbell-mark-all" onClick={markAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>

          <div className="nbell-list">
            {loading ? (
              <div className="nbell-empty">Loading...</div>
            ) : notifications.length === 0 ? (
              <div className="nbell-empty">You're all caught up.</div>
            ) : (
              notifications.map((n) => (
                <Link
                  key={n._id}
                  to={n.link || "#"}
                  className={`nbell-item ${n.read ? "" : "nbell-item-unread"}`}
                  onClick={() => {
                    setOpen(false);
                    if (!n.read) markAsRead(n._id);
                  }}
                >
                  <p className="nbell-item-message">{n.message}</p>
                  <div className="nbell-item-footer">
                    <span className="nbell-item-time">
                      {formatDistanceToNowStrict(new Date(n.createdAt), { addSuffix: true })}
                    </span>
                    {!n.read && (
                      <button
                        className="nbell-mark-one"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          markAsRead(n._id);
                        }}
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
