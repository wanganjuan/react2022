import React from 'react'
import { default as useTest } from '@/hooks/useReducer'

function Doc() {
  const { state, dispatch } = useTest()
  return (
    <div
      onClick={() => {
        dispatch({ type: 'increment' })
      }}
    >
      {state.count}
    </div>
  )
}

export default Doc
