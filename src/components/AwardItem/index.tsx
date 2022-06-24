import { Award, AwardImg, AwardText } from './awardItem.styled'

interface Props {
  text1: string
  text2: string
  img: string
}

const AwardItem = ({ img, text1, text2 }: Props) => {
  return (
    <Award>
      <AwardImg src={img} />
      <AwardText>
        {text1}
        <br />
        {text2}
      </AwardText>
    </Award>
  )
}
export default AwardItem
