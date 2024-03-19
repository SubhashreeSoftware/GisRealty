import { useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VisibilityObserver } from "reactjs-visibility";
import Image from "next/image";
function CounterUp() {
  const [loading, setLoading] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setLoading({ loading: true });
    }
  };

  const options = {
    rootMargin: "200px",
  };

  return (
    <>
      <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                <Image alt=""
                style={{ height:"50%", width: "50%" }}
                          src={`/img/icons/icon-img/ap.png`}
                        />
                </div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix="+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Total Apartments</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                <Image alt=""
                style={{ height:"30%", width: "30%" }}
                          src={`/img/icons/icon-img/pp.png`}
                        /></div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix="K+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Total Properties</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                <Image alt=""
                style={{ height:"50%", width: "50%" }}
                          src={`/img/icons/icon-img/villa2.png`}
                        /></div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix="+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Total Villas Sold</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                <Image alt=""
                style={{ height:"30%", width: "30%" }}
                          src={`/img/icons/icon-img/bb.png`}
                        /></div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix="+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Total Buildings</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CounterUp;
