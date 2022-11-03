import { useEffect, useState } from 'react'
import api from '../lib/api'

interface Props<T> {
  url: string
  body?: any
  onSuccess?: (data: T) => void
  onFailure?: () => void
}

type ReturnType<T> = [T | null, boolean]

const useConfigData = <T,>({
  url,
  body,
  onSuccess,
  onFailure
}: Props<T>): ReturnType<T> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const { data } = await api.get<T>(url, body)
        setData(data)

        if (onSuccess) onSuccess(data)
      } catch (e) {
        if (onFailure) onFailure()
        console.log(e)
      }
      setLoading(false)
    })()
  }, [])

  return [data, loading]
}

export default useConfigData
