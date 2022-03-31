import React, { useState, useMemo } from 'react'
import { default as useTest } from '@/hooks/useReducer'
import { default as Filter } from './Filter'

function Doc() {
  // const { state, dispatch } = useTest()
  console.log(77)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const test = () => {
    setB(b + 1000)
  }
  const sum = useMemo(() => {
    console.log('bbbbbbbbbb')
    return b * 10
  }, [b])
  return (
    <div
      onClick={() => {
        setA(a + 10)
      }}
    >
      {a}
      {console.log(7777)}
      <div
        onClick={() => {
          setB(b + 10)
        }}
      >
        111111 {b} {sum}
      </div>
    </div>
  )
}

export default Doc
