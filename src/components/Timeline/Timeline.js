import React from "react";
import {Container, 
    Row, 
    Col,
    Button, 
    Card,
    CardBody,
    CardFooter,
    CardTitle} from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import EventIcon from '@material-ui/icons/Event';
import MicNoneIcon from '@material-ui/icons/MicNone';

function Timeline(){
    return(
        <>
        <div className="section-gray"
        // style={{backgroundImage: `url(${require('../../assets/img/sections/bg.jpg')})`,
        // backgroundRepeat: "no-repeat", backgroundSize:"100%",
        // }}
        >
        <Container fluid>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" >Our Activities</h2>
              {/* <h5 className="description">
                The UI Kits, Templates and Dashboards that we've created are
                used by <b>790,000+ web developers</b> in over{" "}
                <b>1,400,00 Web Projects</b>. This is what some of them think:
              </h5> */}
            </Col>
          </Row>
          <Row>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ color: '#fff' }}
    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Coming Soon"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<EventIcon/>}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/alumnus.png")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Convoke with Alumnus
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2020"
    iconStyle={{ background: '#f5593d', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/NEC2020.jpeg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    NEC 2020 Finals
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Dec 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/hol.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Hour of Learning
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/gd.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Group Discussion
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/loe.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    A session on life of an entrepreneur
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Sept 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/gfs.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Government funding schemes for entrepreneurs
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Sept 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/rs.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Freshman Orientation by Raj Shamani
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Jan 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/d2c.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Dare2compete quiz 
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Jan 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/debate.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Debate
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/pw.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    A pitching workshop
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/d2ch.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Dare2compete Hackathon
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/bm.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    A session on Business Model
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/quiz.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Quiz
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/csc.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Case study Competition
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/crt.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Is College the right time to start-up
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/sloe.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    A session on the life of an entrepreneur
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/ms.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Movie Screening
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/gdp.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Group Discussion
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Oct 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<EventIcon />}
  >
    <Card className="card-blog" >
        <Row>
            <Col md="6" sm="12">
                <div className="card-image" >
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/feop.jpg")}
                    />
                  </a>
                </div>
                </Col>
                <Col md="6" sm="12">
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    Freshmen entrepreneurship orientation Program
                  </CardTitle>
                  {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                  <CardFooter>
                    {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                  </CardFooter>
                </CardBody>
                </Col>
                </Row>
              </Card>
  </VerticalTimelineElement>
</VerticalTimeline>
</Row>
</Container>
</div>
  </>
    );
}
export default Timeline;