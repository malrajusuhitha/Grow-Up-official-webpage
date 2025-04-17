import React, { useState } from "react";
import botAvatar from "../assets/4.jpg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your assistant 🤖. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const botReply = (userText) => {
    setIsTyping(true);
    setTimeout(() => {
      let reply = "Sorry, I didn't get that.";
      if (/hello|hi/i.test(userText)) {
        reply = "Hello! 👋 How can I assist you?";
      } else if (/job|vacancy/i.test(userText)) {
        reply = "We have various IT and Non-IT jobs listed on our Jobs page!";
      } else if (/contact|support/i.test(userText)) {
        reply = "You can reach us via the Contact page.";
      }
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    const input = document.getElementById("chat-input");
    const newMessage = input.value.trim();
    if (newMessage) {
      setMessages((prev) => [...prev, { sender: "user", text: newMessage }]);
      input.value = "";
      botReply(newMessage);
    }
  };

  // Styles
  const styles = {
    container: {
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 9999,
      fontFamily: "'Segoe UI', sans-serif",
    },
    toggleBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      padding: "15px",
      fontSize: "1.5rem",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      animation: "bounce 2s infinite",
    },
    chatWindow: {
      width: 300,
      height: 400,
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      position: "absolute",
      bottom: 60,
      right: 0,
      animation: isOpen ? "slideUp 0.5s ease-out" : "none",
    },
    chatHeader: {
      background: "linear-gradient(135deg, #007bff, #00d4ff)",
      color: "#fff",
      padding: 12,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      objectFit: "cover",
      backgroundColor: "#fff",
    },
    chatBody: {
      flex: 1,
      padding: 10,
      overflowY: "auto",
      backgroundColor: "#f8f9fa",
    },
    chatFooter: {
      display: "flex",
      padding: 10,
      borderTop: "1px solid #ccc",
      backgroundColor: "#fff",
    },
    input: {
      flex: 1,
      padding: 8,
      border: "1px solid #ccc",
      borderRadius: 8,
      outline: "none",
    },
    sendBtn: {
      marginLeft: 10,
      padding: "8px 12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
    },
    botMessage: {
      backgroundColor: "#e2f0ff",
      padding: "8px 12px",
      marginBottom: 8,
      borderRadius: 10,
      alignSelf: "flex-start",
    },
    userMessage: {
      backgroundColor: "#d1ffe0",
      padding: "8px 12px",
      marginBottom: 8,
      borderRadius: 10,
      alignSelf: "flex-end",
      textAlign: "right",
    },
    typing: {
      fontStyle: "italic",
      color: "#555",
      margin: 6,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        <div style={styles.chatHeader}>
          <img src={botAvatar} alt="Chatbot" style={styles.avatar} />
          <span>GrowUp Bot</span>
        </div>
        <div style={styles.chatBody}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={msg.sender === "user" ? styles.userMessage : styles.botMessage}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && <div style={styles.typing}>Bot is typing...</div>}
        </div>
        <div style={styles.chatFooter}>
          <input type="text" id="chat-input" placeholder="Ask me anything..." style={styles.input} />
          <button onClick={handleSend} style={styles.sendBtn}>
            Send
          </button>
        </div>
      </div>
      <button style={styles.toggleBtn} onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
Chatbot.jsx