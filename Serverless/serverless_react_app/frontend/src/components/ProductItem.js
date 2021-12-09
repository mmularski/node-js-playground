import React from 'react'
import {
  Card
} from 'semantic-ui-react'
export default function ProductItem(props) {
  return (
    <Card
      image={props.item.imageUrl}
      header={props.item.name}
      meta={props.item.category}
      description={props.item.description}
    />
  )
}