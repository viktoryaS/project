import React from "react";
import Slider from "./Component/Slider";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import Kilka from "../src/img/ryba-hamsa-2.jpeg";
import JumbotronExample from "./Component/Jumbotron";




export const Home = () => {
    return (
    <>
    <Slider />
    <Container  style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
           <Col>
           <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Kilka} />
            <Card.Body>
                <Card.Title>Килька мороженая</Card.Title>
                <Card.Text>
                 Гост 32744-2014
                 Упаковка белый гофракоробе
                 Вес рыбной продукции в одной коробке 22кг
                </Card.Text>
                <Button variant="primary"> Продробнее</Button>
            </Card.Body>
           </Card>
           </Col>
           <Col>
           <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Kilka} />
            <Card.Body>
                <Card.Title>Тюлька мороженая</Card.Title>
                <Card.Text>
                 Гост 32744-2014
                 Упаковка белый гофракоробе
                 Вес рыбной продукции в одной коробке 22кг
                </Card.Text>
                <Button variant="primary">Продробнее</Button>
            </Card.Body>
           </Card>
           </Col>
           <Col>
           <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Kilka} />
            <Card.Body>
                <Card.Title>Хамса мороженая</Card.Title>
                <Card.Text>
                 Гост 32744-2014
                 Упаковка
                 Вес рыбной продукции в одной коробке 10кг
                </Card.Text>
                <Button variant="primary"> Продробнее</Button>
            </Card.Body>
           </Card>
           </Col>
        </Row>
    </Container>
    <JumbotronExample />
    </>
)
}