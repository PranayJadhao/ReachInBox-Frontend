import React, { useState } from "react";
import styles from "./App.css"
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
const demoData = [
  {
    id: 1,
    fromName: "John Doe",
    subject: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sentAt: "2024-04-01T10:00:00.000Z",
  },
  {
    id: 2,
    fromName: "Jane Smith",
    subject: "Meeting Tomorrow",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sentAt: "2024-04-01T09:30:00.000Z",
  },
];

const HomePage = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [replyBcc, setReplyBcc] = useState("");
  const [replyCc, setReplyCc] = useState("");
  const [replySubject, setReplySubject] = useState("");
  const [replyContent, setReplyContent] = useState("");

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleReplyClick = () => {
    setReplyModalOpen(true);
  };

  const handleCloseReplyModal = () => {
    setReplyModalOpen(false);
    setReplyBcc("");
    setReplyCc("");
    setReplySubject("");
    setReplyContent("");
  };

  const handleSendReply = () => {
    // Implement reply functionality here
    console.log("Reply sent:", replyBcc, replyCc, replySubject, replyContent);
    handleCloseReplyModal();
  };

    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
                <div className="container">
                    <div>
                        <SidePanel></SidePanel>
                    </div>
            <div className="email-list">
              {demoData.map((email) => (
                <div
                  className="email-item"
                  key={email.id}
                  onClick={() => handleEmailClick(email)}
                >
                  <div className="from-name">{email.fromName}</div>
                  <div className="subject">{email.subject}</div>
                  <button className="reply-button" onClick={handleReplyClick}>
                    Reply
                  </button>
                </div>
              ))}
            </div>
            <div className="email-details">
              {selectedEmail && (
                <>
                  <div className="from-name">{selectedEmail.fromName}</div>
                  <div className="subject">{selectedEmail.subject}</div>
                  <div
                    className="email-body"
                    dangerouslySetInnerHTML={{ __html: selectedEmail.body }}
                  ></div>
                </>
              )}
            </div>

            {/* Reply Modal */}
            {replyModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Reply to Email</h2>
                  <input
                    type="text"
                    className="reply-input"
                    placeholder="Bcc"
                    value={replyBcc}
                    onChange={(e) => setReplyBcc(e.target.value)}
                  />
                  <input
                    type="text"
                    className="reply-input"
                    placeholder="Cc"
                    value={replyCc}
                    onChange={(e) => setReplyCc(e.target.value)}
                  />
                  <input
                    type="text"
                    className="reply-input"
                    placeholder="Subject"
                    value={replySubject}
                    onChange={(e) => setReplySubject(e.target.value)}
                  />
                  <textarea
                    className="reply-textarea"
                    placeholder="Write your reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                  ></textarea>
                  <div className="modal-buttons">
                    <button
                      className="modal-button"
                      onClick={handleCloseReplyModal}
                    >
                      Cancel
                    </button>
                    <button className="modal-button" onClick={handleSendReply}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
            </div>
            
            
      </div>
    );
};

export default HomePage;
