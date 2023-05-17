import React from "react"
import ContentLoader from "react-content-loader"

const ArticleSkeleton = (props) => (
  <div style={{ width: '100%' }}>
  <ContentLoader 
    speed={3}
    width="100%"
    height={160}
    viewBox="0 0 500 160"
    backgroundColor="#ebebeb"
    foregroundColor="#b0b0b0"
    {...props}
  >
    <rect x="127" y="88" rx="3" ry="3" width="70%" height="6" /> 
    <rect x="4" y="5" rx="3" ry="3" width="95%" height="6" /> 
    <rect x="4" y="24" rx="3" ry="3" width="95%" height="50" /> 
    <rect x="4" y="88" rx="3" ry="3" width="20%" height="6" /> 
    <circle cx="116" cy="91" r="5" />
  </ContentLoader>
</div>
)

export default ArticleSkeleton