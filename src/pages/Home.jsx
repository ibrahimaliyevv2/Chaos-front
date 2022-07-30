import React, { Component } from 'react'
import ProfileCard from '../components/cards/ProfileCard'
import PostForm from '../components/forms/PostForm'
import '../css/Home.css';
import {Container, Col, Row } from 'reactstrap'
import SidebarLeft from '../components/sidebars/SidebarLeft';
import SidebarRight from '../components/sidebars/SidebarRight';
import Photo1 from '../img/profile-photo.jpeg'

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} lg={2}
          style={{padding: '0'}}>
            <SidebarLeft />
          </Col>
          <Col md={2} lg={2}>
            <ProfileCard
              title={'Test'}
              tag={'h6'}
              style={{
                width: '14em'
              }}
              subtitle={'subtitle'}
              description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
              className={'mt-3'}
              img={'https://picsum.photos/300/200'}
            />
          </Col>
          <Col md={4} lg={4}>
            <PostForm className={'mt-3'} />
          </Col>
          <Col md={2}>
            <Col>
              <ProfileCard
                title={'Card2'}
                tag={'h6'}
                style={{
                  width: '14em'
                }}
                subtitle={'Card2 subtitle'}
                description={"TEST"}
                className={'mt-3'}
                img={'https://picsum.photos/300/200'}
              />
            </Col>
            <Col>
              <ProfileCard
                title={'Card2'}
                tag={'h6'}
                style={{
                  width: '14em'
                }}
                subtitle={'Card2 subtitle'}
                description={"TEST"}
                className={'mt-3'}
                img={'https://picsum.photos/300/200'}
              />
            </Col>
          </Col>
          <Col md={2}>
                <SidebarRight
                img={Photo1}
                name={"Girl Girly"}
                />
          </Col>
        </Row>


      </Container>
    )
  }
}
