import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left, Body, Right,Title, List, ListItem,Segment} from 'native-base';
import LivresDeLaBible from './listOfBibleBooks.json';

export default class App extends React.Component {
  render() {
    var listDesLivres = LivresDeLaBible;
    return (
      <Container>
        <Header>
         <Left>
           <Button transparent>
             <Icon name='arrow-back' />
           </Button>
         </Left>
         <Body>
           <Title>La Bible</Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='search' />
           </Button>
           <Button transparent>
             <Icon name='heart' />
           </Button>
           <Button transparent>
             <Icon name='more' />
           </Button>
         </Right>
       </Header>
       <Segment>
          <Button first>
            <Text>Livres</Text>
          </Button>
          <Button>
            <Text>Chapitres</Text>
          </Button>
          <Button last active>
            <Text>Versets</Text>
          </Button>
        </Segment>
       <Content>
         <List dataArray={listDesLivres}
           renderRow={(bible) =>
             <ListItem key={bible.id}>
               <Text>{bible.livre}</Text>
             </ListItem>
           }>
         </List>
       </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="radio" />
              <Text>Radio</Text>
            </Button>
            <Button vertical active>
              <Icon active name="radio" />
              <Text>YouTube</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
