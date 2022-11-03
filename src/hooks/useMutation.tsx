import { useState } from 'react'
import api from '../lib/api'

interface Props<T> {
  url: string
  method?: 'post' | 'put'
  onSuccess?: (data: T) => void
}

type ReturnType<T> = [(body: any) => Promise<void>, T | null, boolean]

const useMutation = <T,>({
  url,
  method = 'post',
  onSuccess
}: Props<T>): ReturnType<T> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const mutate = async (body?: any) => {
    setLoading(true)
    try {
      const { data } = await api[method]<T>(url, body)
      setData(data)

      if (onSuccess) onSuccess(data)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  return [mutate, data, loading]
}

export default useMutation
