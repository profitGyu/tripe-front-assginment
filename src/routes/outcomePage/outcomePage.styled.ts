import styled from 'styled-components'

import colors from '../../styles/constants/colors'
import animation from '../../styles/mixins/animation'
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
  animation-name: ${animation.fadeIn};
  animation-duration: 700ms;
`

export const MetricsContainer = styled.ul`
  margin-left: 623px;
  animation-name: ${animation.fadeIn};
  animation-delay: 100ms;
  animation-duration: 700ms;
`

export const AwardsContainer = styled.ul`
  display: flex;
  margin: 50px 0px 0px 623px;
  animation-name: ${animation.fadeIn};
  animation-delay: 200ms;
  animation-duration: 700ms;
`
