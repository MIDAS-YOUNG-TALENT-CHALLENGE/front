import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '../../hooks'
import * as S from './style'

interface FormType {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormType>()
  const navigate = useNavigate()
  const [mutation] = useMutation<{ token: string }>({
    url: '/api/user/login',
    onSuccess: data => {
      localStorage.setItem('accessToken', data.token)
    }
  })

  const onSubmit = async (form: FormType) => {
    await mutation(form)
    navigate('/')
  }

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
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
