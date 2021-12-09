import React from 'react'
import {
  Container,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react'
import ProductRow from './ProductRow'
export default function Products() {

  const items = [
    {
      name: 'Maska głowy konia',
      imageUrl: 'https://9.allegroimg.com/s512/035a09/8e8da63c4d228fe653e01a34ce09/Profesjonalna-lateksowa-maska-KON-glowa-konia',
      category: 'Przedmiot',
      description: 'W sam raz na imprezę'
    },
    {
      name: 'Maska Anonymous',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xKb9BcWFL._UL1200_.jpg',
      category: 'Przedmiot',
      description: 'Na imprezę, obalanie rządu lub żądanie okupu.'
    },
    {
      name: 'Łopata',
      imageUrl: 'https://www.szafirek.net/383/%C5%82opata-szpadel-z-trzonkiem-drewnianym-szeroko%C5%9B%C4%87-20cm.jpg',
      category: 'Przedmiot',
      description: 'Można się okopać i w ten sposób zabezpieczyć'
    },
    {
      name: 'Parawan plażowy',
      imageUrl: 'https://s3.fifishop.pl/39820-large_default/parawan-plazowy-marynarski-sen.jpg',
      category: 'Przedmiot',
      description: 'Letni atrybut prawdziwego Polaka'
    },
    {
      name: 'Wiadro',
      imageUrl: 'https://thumbs.img-sprzedajemy.pl/1000x901c/3e/0c/81/stare-wiadro-skierniewice-455398088.jpg',
      category: 'Przedmiot',
      description: 'Idealne na trzymanie plików. Nie przecieka!'
    },
  ]

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
        {splitArray(items).map((e,index) => (<ProductRow items={e} key={index} />))}
      </Grid>
    </Container>
  )
}