import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';

const posts = [
    {
        title: "Hi Roxie 1",
        note: "Wassup?"
    },
    {
        title: "Hi Roxie 2",
        note: "How you doin?"
    },
    {
        title: "Hi Roxie 3",
        note: "Likes naps"
    },
    {
        title: "Hi Roxie 4",
        note: "And Starbucks"
    },
    {
        title: "Hi Roxie 5",
        note: "Wants to go to Korea"
    },
    {
        title: "Hi Roxie 6",
        note: "And obscure Twitch streamers"
    },
]

let cardCreator = posts.map((item, index) => {
    return(
        <Col lg={4}>
            <Card style={{ width: '15rem', margin: "0 auto" }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.note}
                </Card.Text>
            </Card>
        </Col>
    )
})

function App() {
    return (
        <div className="App">
            <Row>
                {cardCreator}
            </Row>
        </div>
    );
}

export default App;
