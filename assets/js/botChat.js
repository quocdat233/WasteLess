// Toggle radial menu
function toggleMenu(e) {
  e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  const radialMenu = document.getElementById('contactIcons');
  radialMenu.classList.toggle('active');
}

// Toggle chatbot and close radial menu
function toggleChatbot() {
  const chatbotContainer = document.getElementById('chatbot-container');
  const radialMenu = document.getElementById('contactIcons');
  chatbotContainer.classList.toggle('active');
  radialMenu.classList.remove('active'); // Đóng radial menu khi mở chatbot
}

// Close chatbot
document.getElementById('close-chatbot').addEventListener('click', () => {
  document.getElementById('chatbot-container').classList.remove('active');
});

// Handle sending messages
document.getElementById('send-message').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (!message) return;

  // Add user message
  const messagesContainer = document.getElementById('chatbot-messages');
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  userMessage.textContent = message;
  messagesContainer.appendChild(userMessage);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = 'Cảm ơn bạn đã liên hệ! Tôi sẽ trả lời ngay khi có thể.';
    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 500);

  input.value = '';
}

// Close radial menu when clicking outside
document.addEventListener('click', (e) => {
  const radialMenu = document.getElementById('contactIcons');
  const contactButton = document.querySelector('.contact-button');
  if (!radialMenu.contains(e.target) && !contactButton.contains(e.target)) {
    radialMenu.classList.remove('active');
  }
});

// Ensure contact button toggles radial menu
document.querySelector('.contact-button').addEventListener('click', toggleMenu);