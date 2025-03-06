import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function SeedProductCard({ SeedDataObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={SeedDataObj.product.images} />
      <Card.Body>
        <Card.Title>{SeedDataObj.product.title}</Card.Title>
        <Card.Text>{SeedDataObj.product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{SeedDataObj.product.category}</ListGroup.Item>
        <ListGroup.Item>{SeedDataObj.product.stock}</ListGroup.Item>
        <ListGroup.Item>{SeedDataObj.product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

SeedProductCard.propTypes = {
  SeedDataObj: PropTypes.shape({
    product: PropTypes.shape({
      images: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      stock: PropTypes.number,
      price: PropTypes.number,
    }),
  }).isRequired,
};
export default SeedProductCard;
