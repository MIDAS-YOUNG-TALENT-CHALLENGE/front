import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 2rem;
`

export const Jubotron = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TaskWrapper = styled.div`
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
