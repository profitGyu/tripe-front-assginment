import AwardItem from '../../components/AwardItem'
import MetricItem from '../../components/MetricItem'
import { AWARD_LIST, METRIC_LIST } from '../../v-model/outcome'

import {
  Container,
  ContentLogo,
  MetricsContainer,
  AwardsContainer,
} from './outcomePage.styled'

const OutcomePage = () => {
  return (
    <Container>
      <ContentLogo>2021년 12월 기준</ContentLogo>
      <MetricsContainer>
        {METRIC_LIST.map((item) => (
          <MetricItem
            count={item.count}
            unit={item.unit}
            info={item.info}
            key={item.key}
          />
        ))}
      </MetricsContainer>
      <AwardsContainer>
        {AWARD_LIST.map((item) => (
          <AwardItem
            img={item.src}
            upperText={item.upper}
            downText={item.down}
            key={item.key}
          />
        ))}
      </AwardsContainer>
    </Container>
  )
}

export default OutcomePage
