import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css'; // kita akan buat styling terpisah

const ChatBot = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // System prompt berisi informasi perusahaan
  const getSystemPrompt = () => {
    return `
Anda adalah asisten virtual dari CyberInfra Solutions, perusahaan penyedia jasa infrastruktur IT dan keamanan siber.
Berikut informasi tentang perusahaan:

Nama: CyberInfra Solutions
Visi: Mewujudkan ekosistem digital yang kokoh, adaptif, dan bebas dari ancaman siber.
Layanan:
1. Infrastruktur TI: Desain Data Center, Virtualisasi & Cloud Architecture enterprise.
2. Sistem Proteksi EDR/SIEM: Pemantauan ancaman real-time, mitigasi serangan, & manajemen insiden siber.
3. Jaringan Aman & SD-WAN: Instalasi firewall Next-Gen, arsitektur Zero-Trust, & konektivitas multi-cabang.
4. Manajemen Akses (PAM/IAM): Kontrol hak akses ketat, proteksi kredensial, & tata kelola identitas user.
5. Audit & Kepatuhan Keamanan: Penetration Testing, penilaian kerentanan, & pemenuhan standar regulasi.
6. Backup & Disaster Recovery: Perlindungan data dari ransomware, failover otomatis, & kontinuitas bisnis.

Sertifikasi:
- ISO/IEC 27001:2022 (ISMS)
- ISO 22301:2019 (BCMS)
- ISO 9001:2015 (QMS)
- AWS Select Tier Partner
- Cisco Premier Certified
- Certified Cloud Security

Kontak:
Email: info@cyberinfra.co.id
WhatsApp: +62 812-3456-7890
Alamat: CyberInfra Tower Lt. 12, Jl. Jend. Sudirman No.Kav 21, Jakarta Selatan, DKI Jakarta 12920

Tim Ahli:
- Dimas Kurniawan (Lead Data Center Engineer)
- Deva Agriani (Senior Cyber Security Analyst)
- Gempur Mahya Reksa (DevSecOps Cloud Architect)

Jawab pertanyaan dengan ramah, profesional, dan akurat. Jika ditanya di luar cakupan, arahkan ke tim sales.
Gunakan bahasa Indonesia.`;
  };

  // Fungsi untuk memanggil OpenAI API
  const sendMessageToAI = async (userMessage) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Maaf, layanan AI belum dikonfigurasi. Silakan hubungi kami langsung melalui kontak yang tersedia.' 
      }]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: getSystemPrompt() },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Gagal menghubungi AI');
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } catch (error) {
      console.error('OpenAI error:', error);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti atau hubungi kami melalui email/WhatsApp.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    await sendMessageToAI(userMessage);
  };

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fokus input saat chat dibuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Contoh pertanyaan cepat (quick replies)
  const quickReplies = [
    'Apa saja layanan CyberInfra?',
    'Berapa biaya konsultasi?',
    'Sertifikasi apa yang dimiliki?',
    'Bagaimana cara menghubungi tim sales?'
  ];

  const handleQuickReply = (text) => {
    setInput(text);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka chat AI"
      >
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comment-dots"></i>}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <i className="fas fa-robot" style={{ marginRight: '10px' }}></i>
              <span>AI Assistant - CyberInfra</span>
            </div>
            <button 
              className="chat-close" 
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-welcome">
                <p>👋 Halo! Saya asisten virtual CyberInfra Solutions.</p>
                <p>Tanyakan tentang layanan, sertifikasi, atau konsultasi IT kami.</p>
                <div className="quick-replies">
                  {quickReplies.map((text, idx) => (
                    <button 
                      key={idx} 
                      className="quick-reply-btn"
                      onClick={() => handleQuickReply(text)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                <div className="message-bubble">
                  {msg.sender === 'bot' && <i className="fas fa-robot" style={{ marginRight: '8px', color: '#4285F4' }}></i>}
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <div className="message-bubble typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-form" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Tanyakan sesuatu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;