import { Award, AwardImg, AwardText } from './awardItem.styled'

interface Props {
  upperText: string
  downText: string
  img: string
}

const AwardItem = ({ img, upperText, downText }: Props) => {
  return (
    <Award>
      <AwardImg src={img} />
      <AwardText>
        {upperText}
        <br />
        {downText}
      </AwardText>
    </Award>
  )
}
export default AwardItem
