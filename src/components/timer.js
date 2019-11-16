import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {
  const [lapse, setLapse] = useState(0)
  const intervalRef = useRef(null)

  const time = ms => {
    return new Date(ms).toISOString().slice(11, -8)
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  const startTime = Date.now() - lapse

  intervalRef.current = setInterval(() => {
    setLapse(Date.now() - startTime)
  }, 0)

  return (
    <div>
      <p>{time(lapse)}</p>
    </div>
  )
}
