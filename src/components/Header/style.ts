import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 10;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const LogoutBtn = styled.button`
  background: #333030;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`
