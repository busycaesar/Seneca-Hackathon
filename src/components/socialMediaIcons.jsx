import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Instagram from "../svgs/instagram.png";
import Facebook from "../svgs/facebook.png";
import LinkedIn from "../svgs/linkedin.png";
import Twitter from "../svgs/twitter.png";
import Tiktok from "../svgs/tiktok.png";

export default function SocialMediaIcons() {
  return (
    <Row className="row-cols-auto no-gutters">
      <Col>
        <Image
          src={Instagram}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Instagram"
          width={25}
        />
        <Image
          src={Facebook}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Facebook"
          width={25}
        />
        <Image
          src={LinkedIn}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to LinkedIn"
          width={25}
        />
        <Image
          src={Twitter}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Twitter"
          width={25}
        />
        <Image
          src={Tiktok}
          style={{ margin: "0.05em 0.25em" }}
          alt="Link to Tiktok"
          width={25}
        />
      </Col>
    </Row>
  );
}
