import { useEffect, useRef, useState } from 'react'

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const useRollingNum = (count: number, duration: number) => {
  const animationFrame = 1000 / (Math.round(duration / 1000) * 60)
  const totalFrames = Math.round(duration / animationFrame)

  const frame = useRef(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
    const rollingNum = () => {
      const percent = easeOutExpo(frame.current / totalFrames)
      const currentNum = Math.round(count * percent)
      setNum(currentNum)
      frame.current = requestAnimationFrame(rollingNum)

      if (count === currentNum) {
        cancelAnimationFrame(frame.current)
      }
    }

    const rollingNumberDelayTimer = setTimeout(rollingNum, 100)

    return () => {
      cancelAnimationFrame(frame.current)
      clearTimeout(rollingNumberDelayTimer)
    }
  }, [count, totalFrames])

  return num
}

export default useRollingNum
