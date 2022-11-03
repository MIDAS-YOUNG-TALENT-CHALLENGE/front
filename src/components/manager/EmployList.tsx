import styled from 'styled-components'
import { allGetUser } from '../../lib/allGetuser'
import ModalEmploy from './ModalEmploy'
import { Link } from 'react-router-dom'

function EmployList() {
  return (
    <_Wrapper>
      <_TopCommandBox>
        <_DepartWrap>
          관리자 코드: <_DepartCode>HD2M8</_DepartCode>
        </_DepartWrap>
        <Link to="/taskcommand">
        <_TaskMakerButton>업무 생성하기</_TaskMakerButton>
        </Link>
        
      </_TopCommandBox>
      <_TopCommmandLine />
      <ModalEmploy />
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  display: Flex;
  height:100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const _TopCommandBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 800px;
`

const _TopCommmandLine = styled.span`
  width: 1000px;
  height: 1px;
  background-color: #b4b4b4;
  margin: 40px 0 20px 0;
`

const _TaskMakerButton = styled.button`
  outline: 0;
  width: 180px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: #48dbfb;
  border: 2px solid #48dbfb;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`

const _DepartWrap = styled.span`
  font-size: 36px;
`

const _DepartCode = styled.span`
  font-size: 42px;
  font-weight: bold;
  color: #48dbfb;
`
export default EmployList
