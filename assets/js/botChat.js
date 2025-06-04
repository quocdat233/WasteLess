const radialMenu = document.getElementById('contactIcons');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotButton = document.getElementById('chatbotButton'); // Nút contact
const instaChatIcon = document.querySelector('.contact-icon.insta'); // Icon chat trong radial menu

function toggleMenu(e) {
  e.stopPropagation();

  if (chatbotContainer.classList.contains('active')) {
    // Nếu chatbot đang mở thì đóng chatbot, không mở radial menu
    chatbotContainer.classList.remove('active');
    radialMenu.classList.remove('active');
  } else {
    // Nếu chatbot đóng thì toggle radial menu như bình thường
    radialMenu.classList.toggle('active');
  }
}

// Bấm nút contact
chatbotButton.addEventListener('click', toggleMenu);

// Bấm icon chat trong radial menu toggle chatbot
instaChatIcon.addEventListener('click', (e) => {
  e.stopPropagation();

  const isActive = chatbotContainer.classList.contains('active');

  if (isActive) {
    chatbotContainer.classList.remove('active');
    closeChatbot(); // <-- Gửi lệnh thu nhỏ
  } else {
    chatbotContainer.classList.add('active');
    openChatbot(); // <-- Gửi lệnh mở rộng
  }

  radialMenu.classList.remove('active');
});


// Bấm ngoài để đóng cả chatbot và radial menu
document.addEventListener('click', (e) => {
  // Nếu click ngoài chatbotContainer, radialMenu, chatbotButton thì đóng hết
  if (
    !chatbotContainer.contains(e.target) &&
    !radialMenu.contains(e.target) &&
    !chatbotButton.contains(e.target)
  ) {
    chatbotContainer.classList.remove('active');
    radialMenu.classList.remove('active');
  }
});

// Đóng chatbot khi bấm nút X
document.getElementById('close-chatbot').addEventListener('click', () => {
  chatbotContainer.classList.remove('active');
});

// Gửi tin nhắn khi bấm nút hoặc enter
document.getElementById('send-message').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
function openChatbot() {
  window.parent.postMessage({ action: 'chatbotVisible', visible: true }, '*');
}

function closeChatbot() {
  window.parent.postMessage({ action: 'chatbotVisible', visible: false }, '*');
}

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (!message) return;

  const messagesContainer = document.getElementById('chatbot-messages');

  // Tạo tin nhắn người dùng
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  userMessage.textContent = message;
  messagesContainer.appendChild(userMessage);

  // Cuộn xuống dưới cùng
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Tin nhắn phản hồi giả lập bot trả lời
  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = 'Cảm ơn bạn đã liên hệ! Tôi sẽ trả lời ngay khi có thể.';
    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 500);

  input.value = '';
}

// Lắng nghe lệnh từ iframe cha (nếu có)
window.addEventListener('message', (event) => {
  if (event.data.action === 'closeChatbot') {
    chatbotContainer.classList.remove('active');
  }
});
