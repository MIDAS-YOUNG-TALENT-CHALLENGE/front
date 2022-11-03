import styled from 'styled-components'

export const Wrapper = styled.div``

export const Jubotron = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CommuteBtn = styled.button`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  background: #23cf5f;
  color: white;
  box-shadow: 0 0 1rem rgba(77, 227, 71, 0.9);
  transition: 0.4s;
  outline: none;

  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1.01);
  }
`

export const TaskList = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 0 2rem;
  box-sizing: border-box;
  margin: 0 auto 5rem;
`

export const TaskHeads = styled.div`
  display: flex;
`
export const TaskHead = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 0 0.5rem;
  padding: 1rem 0;
`
export const Tasks = styled.div`
  display: flex;
  margin: 0 0 0.5rem;
  padding: 1rem 0;
  background: #f2f5f9;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.4s;

  :hover {
    background: #dedfe1;
  }
`

export const Task = styled.div`
  flex: 1;
  text-align: center;
`

/*  Modal  */
export const ModalWrapper = styled.div`
  background: #fff;
  width: 85%;
  height: 90%;
  max-width: 30rem;
  max-height: 35rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

interface ModalButtonProps {
  type: any
}

export const ModalButton = styled.button<ModalButtonProps>`
  background: ${({ type }) => (type === 'accept' ? '#23cf5f' : '#d8534e')};
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`

export const AcceptButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #23cf5f;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`

export const RejectButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #d8534e;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`
