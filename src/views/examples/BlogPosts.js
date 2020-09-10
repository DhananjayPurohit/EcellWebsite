import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Collapse
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function BlogPosts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
    <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Major Events</h2>
                  <h3 className="title-uppercase">
                    <small>Past Events</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/RajShamani.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Freshman Orientation 2019
                          </CardTitle>
                        </a>
                        <div className="card-description">
                          <p>
                          A freshman orientation programme was organized by the e – cell of IET- DAVV 
                          on 3rd September 2019. The main highlight of the programme was Mr. Raj Shamani , 
                          one of the best influencers of India . He had adopted the profession of speaking 
                          six years back and is professional speaker since then. He is one of the youngest 
                          Indians to deliver a speech in UN.
                          </p>
                        </div>
                        <Collapse isOpen={collapses.includes(1)}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable
                VHS.
              </CardBody>
            </Collapse>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm"
                      onClick={e => {
                        e.preventDefault();
                        changeCollapse(1);
                      }}>
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            You Should Get Excited About Virtual Reality.
                          </CardTitle>
                          <h6 className="title-uppercase">October 20, 2016</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            In the first sentence of Pitchfork’s review of my
                            collaborative project with 9th Wonder, INDIE 500, a
                            reviewer who is associated with music review site
                            rhapsody.com writes about how I criticize and then
                            distance myself from “celebrity straw men” with the
                            line “celebrities be making money...
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
               <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Freshmen entrepreneurship orientation program 
                          </CardTitle>
                          <h6 className="title-uppercase">October 1, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            A one-day workshop on “Freshman Orientation program” was organized by Entrepreneurship Cell, IET-DAVV on 01-10-2018. On this occasion, a young entrepreneur, Mr. Sidharth Rajhans, Founder Director, Spacify Inc. delivered an expert lecture on ‘Entrepreneurship: from Ideation to Execution’. He addressed students about various aspects of start-ups, entrepreneurship and government schemes.
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            A session on the life of an entrepreneur
                          </CardTitle>
                          <h6 className="title-uppercase">October 23, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                           A one-day session was organised by the E-Cell to give a broader knowledge on choosing and pursuing entrepreneurship as the career for the students. On this occasion the Co- founders of “Little Help”, Mr. Govind Choudhary and Mr. Prakhar Londhe, were invited as the speakers to share their life journeys and life lessons to the students. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Is College the right time to start-up 
                          </CardTitle>
                          <h6 className="title-uppercase">October 27, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A 2-hour session was conducted by E - cell to motivate the college students to start their entrepreneurial journey in the college itself. On this occasion “Sourabh Yadav” the cofounder of “Basics Eduventures” addressed the students. He himself had started his journey while he was in college thus, he explained all the advantages of starting one’s entrepreneurial journey while studying in college itself. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          A session on Business Model 
                          </CardTitle>
                          <h6 className="title-uppercase">November 15, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A session on business model was organised by the E-cell. In this event Mr. Sparsh Sadafal, addressed the students. He started from the basics of business model, its meaning, a brief history and its importance. Later he explained the different business models of leading start-ups like Uber, Ola, Zomato etc, and they are earning a profit in spite of a lot of investment, their target audiences and the loyalty of the customers etc. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          A pitching workshop 
                          </CardTitle>
                          <h6 className="title-uppercase">November 29, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          On this occasion Mr. Vikas Sharma, was invited to deliver an expert lecture on pitching. The motive of this workshop to educated the students about the concept of pitching, its process, its importance and how to get funded. He explained the students about the types of funding available in the market for the entrepreneurs, the benefits of being a bootstrapped company. He taught them the process of pitching the way, the language the points which one need to keep in mind while pitching to the investors. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Motivational Talk Session 
                          </CardTitle>
                          <h6 className="title-uppercase">September 30, 2019</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A motivational talk session was organized by E-Cello of IET DAVV on 30th September,2019 . The main highlight of the session was about the title “Basics of Starting Business becoming entrepreneur” and was addressed by Mr. Punit Khandelwal, currently working as consultant with EY (Ernst & Young) which is a multinational professional services firm headquartered in London, England, United Kingdom. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              {/* <div className="article">
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/sections/leonard-cotte.jpg")}
                        />
                        <p className="image-thumb">Photo by Cam Adams</p>
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="warning">
                          Trending
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          Make Somebody Nervous Before You Die
                        </CardTitle>
                        <h6 className="title-uppercase">October 20, 2016</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          You won’t find many concepts that are very useful or
                          important if you insist on having a worldview that’s
                          void of controversy, invulnerable to criticism, and
                          incapable of making others feel confused...
                        </p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm">
                      Read more
                    </Button>
                  </Card>
                </Col>
              </div> */}
                {/* <hr />
                <Row>
                  <Col md="12">
                    <div className="pull-left">
                      <Button
                        className="btn-link btn-move-left"
                        color="default"
                        size="sm"
                      >
                        <i className="fa fa-angle-left mr-1" />
                        Older Posts
                      </Button>
                    </div>
                    <div className="pull-right">
                      <Button
                        className="btn-link btn-move-right"
                        color="default"
                        size="sm"
                      >
                        Newer Posts <i className="fa fa-angle-right" />
                      </Button>
                    </div>
                  </Col>
                </Row> */}
            </Container>
          </div>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default BlogPosts;
