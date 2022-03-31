import React, { useState, useEffect, useMemo } from 'react'

function Filter(p: any) {
  console.log(123)
  return (
    <div>
      99999999
      {console.log(123212)}
      {p.number}
    </div>
  )
}
// https://github.com/beichensky/Blog/issues/6
export default React.memo(Filter)
