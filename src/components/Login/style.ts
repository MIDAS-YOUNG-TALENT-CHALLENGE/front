import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.form`
  width: 80%;
  max-width: 30rem;
  height: 90%;
  max-height: 35rem;
  padding: 1rem;
  background: #e8ecf8;
  border-radius: 0.5rem;
  color: #4873fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 80%;
  background: #dee6f8;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  ::placeholder {
    color: #8d93a4;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: #3161f0;
  padding: 1rem 30%;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`
