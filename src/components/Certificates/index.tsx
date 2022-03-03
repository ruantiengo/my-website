/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

export function Certificates() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.certificatesContainer}>
      <h1>My Certificates</h1>
      <div className={styles.certificatesContent}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          interval={4000}
          pause={"hover"}
        >
          <Carousel.Item>
            <img
              src="/images/certificates/javascript.jpg"
              alt="First slide"
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/certificates/java11.jpg"
              alt="Second slide"
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/certificates/springboot.jpg"
              alt="Third slide"
              className="d-block w-100"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
