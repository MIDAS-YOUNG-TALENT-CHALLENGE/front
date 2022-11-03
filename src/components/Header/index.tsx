import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Header = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  return (
    <S.Wrapper>
      <h2>hello</h2>
      <S.LogoutBtn onClick={onLogout}>로그아웃</S.LogoutBtn>
    </S.Wrapper>
  )
}

export default Header
