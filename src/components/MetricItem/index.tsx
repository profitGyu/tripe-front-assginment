import { useRollingNum } from '../../hooks'

import { Metric } from './metricItem.styled'

interface Props {
  count: number
  unit: string
  info: string
}

const MetricItem = ({ count, unit, info }: Props) => {
  const num = useRollingNum(count, 2000)
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
