import { useEffect, useRef, useState } from 'react'

import { Metric } from './metricItem.styled'

interface Props {
  count: number
  unit: string
  info: string
}

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const MetricItem = ({ count, unit, info }: Props) => {
  const duration = 2000
  const animationFrame = 1000 / (Math.round(duration / 1000) * 60)
  const frame = useRef(0)
  const [num, setNum] = useState(0)
  const totalFrames = Math.round(duration / animationFrame)

  useEffect(() => {
    const tickUp = () => {
      const percent = easeOutExpo(frame.current / totalFrames)
      const currentCount = Math.round(count * percent)
      setNum(currentCount)
      frame.current = requestAnimationFrame(tickUp)

      if (count === currentCount) {
        cancelAnimationFrame(frame.current)
      }
    }

    const tickUpTimer = setTimeout(tickUp, 100)

    return () => {
      cancelAnimationFrame(frame.current)
      clearTimeout(tickUpTimer)
    }
  }, [count, totalFrames])
  return (
    <Metric>
      <mark>
        {num}
        {unit}
      </mark>
      {info}
    </Metric>
  )
}
export default MetricItem
