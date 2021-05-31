import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={1000}
    height={124}
    viewBox="0 0 800 124"
    backgroundColor="#dcd1d1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="26" rx="3" ry="3" width="111" height="8" /> 
    <rect x="7" y="4" rx="3" ry="3" width="57" height="12" /> 
    <rect x="7" y="69" rx="3" ry="3" width="380" height="6" /> 
    <rect x="6" y="108" rx="3" ry="3" width="178" height="6" /> 
    <rect x="6" y="89" rx="3" ry="3" width="380" height="6" /> 
    <rect x="428" y="7" rx="0" ry="0" width="177" height="111" />
  </ContentLoader>
)

export default MyLoader

