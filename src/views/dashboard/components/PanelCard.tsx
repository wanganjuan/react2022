import './common.styl'
import { Col, Row, Tooltip } from 'antd'
import CountUp from 'react-countup'
const chartList = [
  {
    type: 'New Visits',
    icon: 'user',
    num: 102400,
    color: '#40c9c6'
  },
  {
    type: 'Messages',
    icon: 'message',
    num: 81212,
    color: '#36a3f7'
  },
  {
    type: 'Purchases',
    icon: 'pay-circle',
    num: 9280,
    color: '#f4516c'
  },
  {
    type: 'Shoppings',
    icon: 'shopping-cart',
    num: 13600,
    color: '#f6ab40'
  }
]
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6
}
interface IProps {
  changeKey: (e: any) => void
}
function PanelCard(props: IProps) {
  const { changeKey } = props
  const colList = (list: any) => {
    return list.map((chart: any) => {
      return (
        <Col {...topColResponsiveProps} key={chart.type}>
          <div
            className="card-panel"
            onClick={() => {
              changeKey(chart.type)
            }}
          >
            <div className="card-panel-icon-wrapper"></div>
            <div className="card-panel-description">
              <p className="card-panel-text">{chart.type}</p>
              <CountUp end={chart.num} start={0} className="card-panel-num" duration={5} />
            </div>
          </div>
        </Col>
      )
    })
  }
  return (
    <Row gutter={24} className="m-panel-card">
      {colList(chartList)}
    </Row>
  )
}

export default PanelCard
