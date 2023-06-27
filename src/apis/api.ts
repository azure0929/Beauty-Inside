import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  apikey: 'KDT5_nREmPe9B',
  username: 'KDT5_Team4',
}

const requestApi = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api',
  headers,
})

//사용자: 로그인
export const signIn = async (email: string, password: string) => {
  try {
    const { data } = await requestApi.post('auth/login', { email, password })
    return data
  } catch (error) {
    console.warn(error)
    console.warn('로그인에 실패했습니다.')
    return false
  }
}

//사용자: 등록가능한 계좌 조회
export const getValidAccounts = async () => {
  try {
    const { data } = await requestApi.get('account/banks', {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return data
  } catch (error) {
    console.warn(error)
    console.warn('등록 가능한 은행 목록 조회를 실패했습니다.')
    return false
  }
}

//사용자: 계좌 목록 및 잔액 조회
export const getUserAccounts = async () => {
  try {
    const { data } = await requestApi.get('account', {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return data
  } catch (error) {
    console.warn(error)
    console.warn('등록된 계좌 목록 조회를 실패했습니다.')
    return false
  }
}

//사용자: 계좌 연결
export const addAccount = async (payload) => {
  try {
    const { data } = await requestApi.post('account', payload, {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return data
  } catch (error) {
    console.warn(error)
    console.warn('계좌 연결에 실패했습니다.')
    return false
  }
}

//사용자: 계좌 삭제
export const deleteAccount = async ({ id, signature }) => {
  try {
    const { data } = await requestApi.delete('account', {
      data: {
        accountId: id,
        signature: signature,
      },
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return data
  } catch (error) {
    console.warn(error)
    console.warn('계좌 삭제에 실패했습니다.')
    return false
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