import React from 'react'
import {
  Grid,
} from 'semantic-ui-react'
import ProductItem from './ProductItem'

export default function ProductRow(props) {
  return (
    <Grid.Row>

      {props.items.map((e, index) => (
      <Grid.Column key={index}>
        <ProductItem item={e} />
      </Grid.Column>
      ))}
    </Grid.Row>
  )
}