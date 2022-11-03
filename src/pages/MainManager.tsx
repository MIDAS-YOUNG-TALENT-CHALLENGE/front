import styled from 'styled-components'
import EmployList from '../components/manager/EmployList'

function MainManager() {
  return (
    <_Wrapper>
      <EmployList />
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  height: 100%;
`

export default MainManager
