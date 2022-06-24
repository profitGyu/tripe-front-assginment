import styled from 'styled-components'

import colors from '../../styles/constants/colors'
import { Triple2Image } from '../../assets/images/index'

export const Container = styled.section`
  position: relative;
  width: 1200px;
  max-width: 1200px;
  height: auto;
  padding-top: 150px;
  margin: 0px auto;
`

export const ContentLogo = styled.div`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  color: ${colors.textSecondary};
  background-image: url(${Triple2Image});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  text-align: center;
`

export const MetricsContainer = styled.div`
  margin-left: 623px;
`
export const MetricItem = styled.li`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${colors.text};
`

export const AwardsContainer = styled.div`
  position: absolute;
  margin: 50px 0px 0px 623px;
`
// eslint-disable-next-line @typescript-eslint/naming-convention
interface IAwardItemProp {
  img: string
}

export const AwardItem = styled.div<IAwardItemProp>`
  display: inline-block;
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${colors.textSecondary};
  background-image: ${(props) => `url(${props.img}) `};
  background-position: left top;
  background-repeat: no-repeat;
`
