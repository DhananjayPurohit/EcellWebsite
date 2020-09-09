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
