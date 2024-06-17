import { Suspense } from 'react'

const LazyLoad = (Comp) => {
  return (
    <Suspense>
      <Comp />
    </Suspense>
  )
}

export default LazyLoad
