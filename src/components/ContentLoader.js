import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader
    height={300}
    width={400}
    speed={2}
    primaryColor={'#4e5c6e'}
    secondaryColor={'#ffffff'}>
    <rect x="43" y="127" rx="4" ry="4" width="112.5" height="42" />
    <rect x="12" y="128" rx="4" ry="4" width="27" height="18.88" />
    <rect x="159" y="127" rx="4" ry="4" width="27" height="18.88" />
    <rect x="224" y="125" rx="4" ry="4" width="112.5" height="42" />
    <rect x="30" y="203" rx="4" ry="4" width="50" height="8" />
    <rect x="139" y="203" rx="4" ry="4" width="50" height="8" />
    <rect x="241" y="203" rx="4" ry="4" width="50" height="8" />
    <rect x="5" y="5.63" rx="5" ry="5" width="388" height="104" />
  </ContentLoader>
)

export default MyLoader
