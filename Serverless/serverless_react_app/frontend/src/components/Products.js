import React from 'react'
import {
  Container,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react'
import ProductRow from './ProductRow'
import axios from 'axios';

const config = require('../config.json');

export default function Products() {

  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try{
        console.log('Starting getting data...');
        
        const response = await axios.get(`${config.api.productsUrl}`);
        const {metadata, data} = response.data;
        console.log(`Fetched ${metadata.length} items`);

        setState(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []);

  const splitArray = array => {
    let i,j, temparray, chunk = 3;
    const results = []
    for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      results.push(temparray)
    }
    return results
  }

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='shopping basket' />
          Produkty naszej firmy
          <Header.Subheader>
            Przejrzyj nasz asortyment
          </Header.Subheader>
        </Header>
      </Container>

      <Grid columns={3} divided>
        {splitArray(state).map((e,index) => (<ProductRow items={e} key={index} />))}
      </Grid>
    </Container>
  )
}