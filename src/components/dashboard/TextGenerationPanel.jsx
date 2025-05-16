// src/components/dashboard/TextGenerationPanel.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import './TextGenerationPanel.css';

const TextGenerationPanel = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: 'Bài viết Blog',
      description: 'Tạo một bài viết blog hấp dẫn, có cấu trúc rõ ràng.',
      promptTemplate: 'Viết một bài blog về [CHỦ ĐỀ] với độ dài khoảng 500 từ. Bao gồm một đoạn giới thiệu, 3 điểm chính, và một đoạn kết luận.'
    },
    {
      id: 2,
      title: 'Email Marketing',
      description: 'Soạn email quảng cáo ngắn gọn và hiệu quả.',
      promptTemplate: 'Viết một email marketing để quảng bá [SẢN PHẨM/DỊCH VỤ] cho [ĐỐI TƯỢNG]. Email nên có chủ đề hấp dẫn, lời mở đầu thu hút, nội dung chính về lợi ích, và kêu gọi hành động rõ ràng.'
    },
    {
      id: 3,
      title: 'Bài đăng Mạng xã hội',
      description: 'Tạo các bài đăng hấp dẫn cho mạng xã hội.',
      promptTemplate: 'Viết [SỐ LƯỢNG] bài đăng mạng xã hội ngắn gọn về [CHỦ ĐỀ/SẢN PHẨM] phù hợp với [NỀN TẢNG]. Mỗi bài đăng nên đính kèm hashtag phù hợp.'
    }
  ]);
  
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setGenerating(true);
    
    // Simulate AI text generation with a timeout
    setTimeout(() => {
      // In a real app, this would be an API call to your backend
      setGeneratedText(`Đây là phản hồi mẫu cho prompt: "${prompt}"\n\nTrong một ứng dụng thực tế, phần này sẽ được thay thế bằng văn bản được tạo từ mô hình ngôn ngữ AI của bạn thông qua API. Văn bản được tạo ra sẽ phụ thuộc vào prompt người dùng và các tham số khác như nhiệt độ, độ dài tối đa, v.v.\n\nVăn bản này chỉ là một trình giữ chỗ và nên được thay thế bằng tích hợp thực tế với API AI text generation của bạn. Văn bản được tạo sẽ xuất hiện ở đây, định dạng đúng và sẵn sàng để người dùng sao chép, chỉnh sửa hoặc tải xuống.`);
      setGenerating(false);
    }, 2000);
  };
  
  const applyTemplate = (template) => {
    setPrompt(template.promptTemplate);
  };
  
  const handleCopyText = () => {
    navigator.clipboard.writeText(generatedText);
    // Show toast notification here in a real app
    alert('Đã sao chép vào clipboard!');
  };
  
  const handleDownloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'generated-text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  const handleClearText = () => {
    setGeneratedText('');
    setPrompt('');
  };
  
  return (
    <div className="text-generation-panel">
      <div className="panel-header">
        <h1>Text Generation</h1>
        <p className="panel-description">
          Tạo văn bản chất lượng cao với sự trợ giúp của AI
        </p>
      </div>
      
      <div className="text-generation-container">
        <div className="prompt-section">
          <Card title="Prompt" elevation="low" className="prompt-card">
            <form onSubmit={handleSubmit}>
              <textarea
                className="prompt-textarea"
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Nhập yêu cầu của bạn ở đây... Ví dụ: Viết một bài giới thiệu về công nghệ AI cho người mới bắt đầu."
                rows={8}
              />
              
              <div className="prompt-actions">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!prompt.trim() || generating}
                >
                  {generating ? 'Đang tạo...' : 'Tạo văn bản'}
                </Button>
                
                <Button
                  type="button"
                  variant="text"
                  onClick={handleClearText}
                  disabled={generating}
                >
                  Xóa
                </Button>
              </div>
            </form>
          </Card>
          
          <div className="templates-section">
            <h3>Mẫu Prompt</h3>
            <p>Chọn một mẫu để bắt đầu nhanh hơn</p>
            
            <div className="templates-grid">
              {templates.map(template => (
                <Card
                  key={template.id}
                  elevation="low"
                  padding="small"
                  className="template-card"
                  onClick={() => applyTemplate(template)}
                >
                  <h4>{template.title}</h4>
                  <p>{template.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="result-section">
          <Card title="Kết quả" elevation="low" className="result-card">
            {generatedText ? (
              <>
                <div className="result-actions">
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleCopyText}
                  >
                    Sao chép
                  </Button>
                  
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleDownloadText}
                  >
                    Tải xuống
                  </Button>
                </div>
                
                <div className="result-content">
                  {generatedText.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : generating ? (
              <div className="generating-placeholder">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>AI đang tạo văn bản...</p>
              </div>
            ) : (
              <div className="empty-result">
                <p>Văn bản được tạo sẽ xuất hiện ở đây</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TextGenerationPanel;