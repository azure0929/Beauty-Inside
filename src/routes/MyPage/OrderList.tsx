import { PageHeader } from '../../components/mypage/PageHeader'
import { styled } from 'styled-components'

export const OrderList = () => {
  return (
    <Wrap>
      <PageHeader title="주문 내역" />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
