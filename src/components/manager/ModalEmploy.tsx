import { useState } from 'react'
import styled from 'styled-components'
import ChangeModal from './ChangeModal'

function EmployInfo() {
  const [modal, setModal] = useState(0)

  const offModal = () => setModal(0)

  return (
    <>
      {modal !== 0 && <_EmployBackground onClick={offModal} />}
      {Array(12)
        .fill(0)
        .map((e, i) => (
          <div>
            {modal === i + 1 && (
              <_EmployModal lastChild={i > Array(12).length - 7 ? `-${(i-Array(12).length + 6) * 70 + 50}px` : ''}>
                <ChangeModal />
              </_EmployModal>
            )}
            <_EmployItem onClick={() => setModal(i + 1)}>
              <_EmployName>김태완</_EmployName>
              <_EmployWorkTime>{'06:02:11'}</_EmployWorkTime>
              <_EmployWorking done={false}>
                {false ? '퇴근' : '출근'}
              </_EmployWorking>
            </_EmployItem>
          </div>
        ))}
    </>
  )
}

const _EmployItem = styled.div`
  display: flex;
  width: 700px;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f5f9;
  border-radius: 5px;
  padding: 5px 5px;

  position:relative;
  z-index: 1;
  margin: 10px 0;
  :hover {
    background-color: #dedfe1;
  }
  > span {
    font-size: 20px;
  }
`

const _EmployName = styled.div`
  font-size: 22px;
  padding: 5px 15px;
`

const _EmployWorking = styled.span<{ done: boolean }>`
  color: ${({ done }) => (done ? 'green' : 'red')};
  margin-right: 10px;
`

const _EmployWorkTime = styled.span``

const _EmployBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const _EmployModal = styled.div<{lastChild: string}>`
  position: absolute;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 450px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
  margin-left: 160px;
  margin-top: ${({lastChild}) => lastChild.length && lastChild};
  > div {
    width: 425px;
  }
`

export default EmployInfo
