import React from 'react';
import { AppRegistry, StyleSheet, View ,StatusBar} from 'react-native';
import {  Header, Left, Drawer , Body,Right , Button, Icon, Title,Thumbnail,Tabs,TabHeading,Fab,Footer,FooterTab,Container, Tab,Text,ScrollableTab, TouchableOpacity,Content} from 'native-base';

import {PropTypes} from 'prop-types';
import Home from './HomeScreen.js';
import CreatePost from './CreatePost.js';



export default class Main extends React.Component {


  render() {


    return (

      <Container  style={{backgroundColor: "white"}}>

        <Header style={{backgroundColor: "white"}}>
              <Left >
                <Button transparent >
                <Icon name="camera" style={{color:'black', fontSize: 26}}/>
                </Button>
              </Left>

              <Body>
              <Title style={{color:"black",fontFamily:"Billabong",fontSize:35,paddingLeft:25}} >Instagram</Title>
              </Body>

              <Right>
              <Button transparent>
              <Icon name="paper-plane" style={{color:'black', fontSize: 26}}/>
              </Button>
              </Right>
        </Header>


        <Content>
            <Home/>
        </Content>


        <Footer >

              <FooterTab style={{backgroundColor: 'white'}}>

              <Button >
                <Icon  name='home' style={{color:'black'}}></Icon>
              </Button>

              <Button  >
                <Icon  name='md-add-circle' style={{color:'black'}}></Icon>
              </Button>
                <Button  onPress={() => this.props.navigation.navigate('Profile')} >
                  <Icon  name='person' style={{color:'black'}}></Icon>
                </Button>

              </FooterTab>

        </Footer>


    </Container>


    );
  }
}



AppRegistry.registerComponent('Main Screen', () => Main)
