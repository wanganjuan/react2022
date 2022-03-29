import { useEffect, useState } from 'react'
import { initLine } from '@/util/js/chart' // 引入echart
import { default as useControl } from '@/hooks/useControl'
import { setTimeout } from 'timers'
const xx = {
  expectedData: [80, 100, 121, 104, 105, 90, 100],
  actualData: [120, 90, 100, 138, 142, 130, 130]
}
interface IProps {
  chartData: {
    expectedData: []
    actualData: []
  }
}
//
function ChartCard(props: IProps) {
  const { sidebarCollapsed, setSidebarCollapsed } = useControl()
  const [chart, setChart] = useState<any>(null)
  const _resizeEvent = (chart: any) => {
    chart && chart.resize()
  }
  const { chartData } = props
  useEffect(() => {
    console.log('resize')
    window.addEventListener(
      'resize',
      () => {
        _resizeEvent(chart)
      },
      false
    )
    // 卸载的时候进行处理
    return () => {
      console.log(chart, 'dispose')
      window.removeEventListener('resize', _resizeEvent)
      chart && chart.dispose()
      setChart(null)
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      _resizeEvent(chart)
    }, 200)
  }, [sidebarCollapsed])
  useEffect(() => {
    setChart(initLine(document.querySelector('.chartxx'), chartData.expectedData, chartData.actualData))
  }, [chartData])
  return <div className="chartxx"></div>
}

export default ChartCard
