import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  console.log('url: ', url)

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const [inProgress, setInProgress] = useState(false)

  // useEffect(async () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setInProgress(true)

        const res = await fetch(url)
        console.log('res: ' + res)

        const result = await res.json()
        console.log('result: ' + result)

        if (res.ok) {
          setData(result)
          setError(null)
        } else {
          throw result
        }
      } catch (error) {
        setError(error)
      } finally {
        setInProgress(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, inProgress }
}
