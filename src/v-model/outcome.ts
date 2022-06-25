import { PlayStore2Image, Apple4Image } from '../assets/images/index'

const METRIC_LIST = [
  {
    count: 700,
    unit: '만명',
    info: '의 여행자',
    key: 'metric_one',
  },
  {
    count: 100,
    unit: '만개',
    info: '의 여행 리뷰',
    key: 'metric_two',
  },
  {
    count: 400,
    unit: '만개',
    info: '의 여행 일정',
    key: 'metric_three',
  },
]

const AWARD_LIST = [
  {
    src: PlayStore2Image,
    upper: '2018 구글 플레이스토어',
    down: '올해의 앱 최우수상 수상',
    key: 'award_one',
  },
  {
    src: Apple4Image,
    upper: '2018 애플 앱스토어',
    down: '오늘의 여행앱 선정',
    key: 'award_two',
  },
]

export { METRIC_LIST, AWARD_LIST }
