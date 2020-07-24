import React from 'react'
import components from '../icons'

const Component = ({ tag, size, color }, props) => {
  const TagName = components[tag]

  return <TagName size={size} color={color} />
}

export default Component
