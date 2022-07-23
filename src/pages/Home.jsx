import React, { Component } from 'react'
import ProfileCard from '../components/cards/ProfileCard'
import Sidebar from '../components/Sidebar'
import PostForm from '../components/forms/PostForm'
import { Col, Row } from 'reactstrap'


export default class Home extends Component {
  render() {
    return (
      <>
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Sidebar />
          </Col>
          <Col sm={2} md={2} lg={2}>
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
          <Col sm={2} md={2} lg={4}>
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
          <Col>
              <ProfileCard
              title={'Card2'}
              tag={'h6'}
              style={{
                width: '14em'
              }}
              subtitle = {'Card2 subtitle'}
              description={"TEST"}
              className={'mt-3'}
              img={'https://picsum.photos/300/200'}
              />
              </Col>
          </Col>
        </Row>


      </>
    )
  }
}
