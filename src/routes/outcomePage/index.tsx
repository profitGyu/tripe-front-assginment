import { PlayStore2Image, Apple4Image } from '../../assets/images/index'
import MetricItem from '../../components/MetricItem'

import {
  Container,
  ContentLogo,
  MetricsContainer,
  AwardsContainer,
  AwardItem,
} from './outcomePage.styled'

const OutcomePage = () => {
  return (
    <Container>
      <ContentLogo>2021년 12월 기준</ContentLogo>
      <MetricsContainer>
        <ul>
          <MetricItem count="700" unit="만명" info="의 여행자" />
          <MetricItem count="100" unit="만개" info="의 여행 리뷰" />
          <MetricItem count="470" unit="만개" info="의 여행 일정" />
        </ul>
      </MetricsContainer>
      <AwardsContainer>
        <AwardItem img={PlayStore2Image}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardItem>
        <AwardItem img={Apple4Image}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardItem>
      </AwardsContainer>
    </Container>
  )
}

export default OutcomePage
