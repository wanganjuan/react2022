import { useState, useEffect } from 'react'
export const _resize = (el?: any) => {
  const [chart, setChart] = useState<any>(el)
  console.log(chart)
  const _resizeEvent = () => {
    chart && chart.resize()
  }
  useEffect(() => {
    console.log('resize')
    window.addEventListener('resize', _resizeEvent, false)
    // 卸载的时候进行处理
    return () => {
      console.log(chart, 'dispose')
      window.removeEventListener('resize', _resizeEvent)
      chart && chart.dispose()
      setChart(null)
    }
  }, [])
  const setChart1 = (e: any) => {
    setChart(e)
  }
  return {
    setChart1
  }
}
