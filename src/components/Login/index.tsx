import { useForm } from 'react-hook-form'
import * as S from './style'

interface FormType {
  email: string
  password: string
}

const Login = () => {
  const { register } = useForm<FormType>()

  return (
    <S.Wrapper>
      <S.Content>
        <h1>Login</h1>

        <S.InputWrapper>
          <S.Input
            {...register('email', {
              required: true
            })}
            type="email"
            placeholder="이메일 입력"
          />
          <S.Input
            {...register('password', {
              required: true
            })}
            type="password"
            placeholder="비밀번호 입력"
          />
        </S.InputWrapper>
        <S.Button>Login</S.Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Login
