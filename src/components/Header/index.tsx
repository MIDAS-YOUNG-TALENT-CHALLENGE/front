import { Link, useNavigate } from 'react-router-dom'
import * as S from './style'

const Header = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  return (
    <S.Wrapper>
      <S.Navigation>
        <h2>Spread Hour</h2>
        <Link to={`/`}>메인페이지</Link>
        <Link to={`/my`}>마이페이지</Link>
      </S.Navigation>
      <S.LogoutBtn onClick={onLogout}>로그아웃</S.LogoutBtn>
    </S.Wrapper>
  )
}

export default Header
