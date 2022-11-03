import { useState } from 'react'
import api from '../lib/api'

interface Props<T> {
  url: string
  body?: any
  onSuccess?: (data: T) => void
}

type ReturnType<T> = [() => Promise<void>, T | null, boolean]

const useMutation = <T,>({ url, body, onSuccess }: Props<T>): ReturnType<T> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const mutate = async () => {
    setLoading(true)
    try {
      const { data } = await api.post<T>(url, body)
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
