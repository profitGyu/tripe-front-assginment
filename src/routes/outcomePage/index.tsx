import { PlayStore2Image, Apple4Image } from '../../assets/images/index'

import {
  Container,
  ContentLogo,
  MetricsContainer,
  MetricItem,
  AwardsContainer,
  AwardItem,
} from './outcomePage.styled'

const OutcomePage = () => {
  return (
    <Container>
      <ContentLogo>2021년 12월 기준</ContentLogo>
      <MetricsContainer>
        <ul>
          <MetricItem>700만 명의 여행자</MetricItem>
          <MetricItem>100만 개의 여행 리뷰</MetricItem>
          <MetricItem>470만 개의 여행 일정</MetricItem>
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
