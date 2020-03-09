import { useState, useEffect } from 'react'

const getWidth = () => window.innerWidth

const useIsMobile = () => {
  let [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeoutId: any = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 50)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width <= 767
}

export default useIsMobile
