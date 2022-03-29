import { useState } from 'react'
import './index.styl'
import PanelCard from './components/PanelCard'
import ChartCard from './components/ChartCard'
const lineChartDefaultData: any = {
  'New Visits': {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  Messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  Purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  Shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
function Dashboard() {
  const [chartData, setChartData] = useState(lineChartDefaultData['New Visits'])
  // 定义下事件来接受下
  const changeKey = (e: any) => {
    setChartData(lineChartDefaultData[e])
  }
  return (
    <div>
      <PanelCard changeKey={changeKey} />
      <div style={{ marginTop: '20px' }}>
        <ChartCard chartData={chartData} />
      </div>
    </div>
  )
}

export default Dashboard
