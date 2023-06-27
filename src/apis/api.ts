import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'KDT5_nREmPe9B',
    'username': 'KDT5_Team4',
  },
});

export const signIn = async (email: string, password: string) => {
  try {
    const { data } = await requestApi.post('/auth/login', { email, password });
    return data;
  } catch (error) {
    console.warn(error);
    console.warn('로그인에 실패했습니다.');
    return false;
  }
};

//단일제품상세조회 // products/:productId
export const getProduct = async (id: string) => {
  try {
    const { data } = await requestApi.get('products/' + id)
    return data
  } catch (error) {
    console.warn(error)
    console.warn('fail to load product')
    return false
  }
}