import { differenceInMinutes } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { useBuildDateTime } from '../hooks/useBuildDateTime'

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

  const startTime = lapse

  intervalRef.current = setInterval(() => {
    setLapse(Date.now() - startTime)
  }, 0)

  const yo = differenceInMinutes(
    // new Date(Date.now()),
    // new Date(Date(bdt * 1000))
    new Date(2014, 6, 2, 12, 20, 0),
    new Date(2014, 6, 2, 12, 7, 59)
  )
  return (
    <div>
      <p>{yo}</p>
      <p>Time since: {time(lapse)}</p>
      <p>Build time: {buildDateTime(bdt)}</p>
    </div>
  )
}
