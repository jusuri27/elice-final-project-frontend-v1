import axios from '../axios';

// 채팅방 목록 조회 API
export const getAllChatRoomAPI = async () => {
  try {
    const response = await axios.get('/chatroom');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch all chatrooms:', error);
    throw error;
  }
};

// 참여 중인 채팅방 목록 조회 API
export const getAllEnterChatAPI = async () => {
  try {
    const token = localStorage.getItem('access_token');

    if (!token) {
      throw new Error('JWT 토큰이 없습니다. 로그인을 해주세요.');
    }

    const response = await axios.get('/chat', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch EnterChatRooms:', error);
    throw error;
  }
};

// 채팅방 생성 API
export const createChatRoomAPI = async (chatRoomTitle) => {
  try {
    const response = await axios.post('/chatroom', chatRoomTitle);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Failed to create chatRoom: ', error);
    throw error;
  }
};

export const getChatMessagesAPI = async (roomId) => {
  try {
    const token = localStorage.getItem('access_token');

    if (!token) {
      throw new Error('JWT 토큰이 없습니다. 로그인을 해주세요.');
    }

    // axios로 채팅 내역 조회 요청
    const response = await axios.get(`/chatroom/${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // 받은 데이터가 정상적으로 response.data에 포함되어 있음
    return response.data;
  } catch (error) {
    console.error('Failed to fetch chat messages:', error);
    throw error;
  }
};
