import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowDimensions from '@src/hooks/useWindowDimensions'

interface IArticleSkeleton {}

const ArticleSkeleton = (props: IArticleSkeleton) => (
  <div style={{ width: `${useWindowDimensions().width < 577 ? '84vw' : '68vw'}` }}>
    <ContentLoader
      speed={3}
      // height={160}
      // viewBox="0 0 20vw 160" // Use "100%" for dynamic width
      backgroundColor="#ebebeb"
      foregroundColor="#b0b0b0"
      style={{ width: '100%' }}
      // style={{ width: '100%' }} // Set width dynamically
      {...props}
    >
      <rect x="2%" y="5" rx="3" ry="3" width="95%" height="6" />

      <rect x="2%" y="24" rx="3" ry="3" width="95%" height="50" />

      <rect x="2%" y="88" rx="3" ry="3" width="20%" height="6" />
      <rect x="28%" y="88" rx="3" ry="3" width="69%" height="6" />
      <circle cx="25%" cy="91" r="2%" />
    </ContentLoader>
  </div>
)

export default ArticleSkeleton
