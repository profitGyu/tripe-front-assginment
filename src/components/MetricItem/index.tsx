import { Metric } from './metricItem.styled'

interface Props {
  count: string
  unit: string
  info: string
}

const MetricItem = ({ count, unit, info }: Props) => {
  return (
    <Metric>
      <mark>
        {count}
        {unit}
      </mark>
      {info}
    </Metric>
  )
}
export default MetricItem
