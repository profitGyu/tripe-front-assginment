import { PlayStore2Image, Apple4Image } from '../../assets/images/index'
import AwardItem from '../../components/AwardItem'
import MetricItem from '../../components/MetricItem'

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
        <MetricItem count="700" unit="만명" info="의 여행자" />
        <MetricItem count="100" unit="만개" info="의 여행 리뷰" />
        <MetricItem count="470" unit="만개" info="의 여행 일정" />
      </MetricsContainer>
      <AwardsContainer>
        <AwardItem
          img={PlayStore2Image}
          text1="2018 구글 플레이스토어"
          text2="올해의 앱 최우수상 수상"
        />
        <AwardItem
          img={Apple4Image}
          text1="2018 구글 플레이스토어"
          text2="올해의 앱 최우수상 수상"
        />
      </AwardsContainer>
    </Container>
  )
}

export default OutcomePage
