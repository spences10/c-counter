import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {
  const { time: bdt } = useBuildDateTime()

  const [lapse, setLapse] = useState(new Date(bdt * 1000))
  const intervalRef = useRef(null)

  const buildDateTime = bdt => {
    return new Date(bdt * 1000).toISOString()
  }

  const time = ms => {
    return new Date(ms).toISOString()
    // return new Date(ms).toISOString().slice(11, -8)
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
      <p>{buildDateTime(bdt)}</p>
    </div>
  )
}
