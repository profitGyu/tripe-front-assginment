import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const Award = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  margin-right: 39px;
`

export const AwardImg = styled.img`
  width: 54px;
  height: 54px;
  margin: 0 5px;
`
export const AwardText = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${colors.textSecondary};
`
