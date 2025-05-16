// src/services/dashboard.js
// Mock service for dashboard data
const dashboardService = {
  getStats: async () => {
    // Mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          aiChats: 23,
          textGenerated: 4567,
          creditsUsed: 78,
          creditsRemaining: 122
        });
      }, 500);
    });
  },
  
  getRecentActivity: async () => {
    // Mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            type: 'chat',
            description: 'You had a chat conversation with TCAPY-AI',
            time: '2 hours ago'
          },
          {
            id: 2,
            type: 'text',
            description: 'Generated a blog post about AI technology',
            time: '1 day ago'
          },
          {
            id: 3,
            type: 'purchase',
            description: 'Purchased 100 credits',
            time: '3 days ago'
          }
        ]);
      }, 500);
    });
  }
};

export default dashboardService;