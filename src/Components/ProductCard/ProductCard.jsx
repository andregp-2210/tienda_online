import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import './index.css';

const ProductCard = ({
  product: {
    nombre = '',
    metodoPago = '',
    idProduct = '',
    filePortada = '',
    fechaInicioCurso = '',
    descripcionCorta = '',
    catDescripcion = '',
    precioNormal = '',
  },
}) => (
  <MDBCard data-testid={`product_card-${idProduct}`} className='product_card'>
    {metodoPago && (
      <p
        data-testid={`product_card_payment-${idProduct}`}
        className='product_card_payment'
      >
        {metodoPago}
      </p>
    )}
    <MDBCardTitle
      data-testid={`product_card_title-${idProduct}`}
      className='product_card_title text-ellipsis'
    >
      {nombre}
    </MDBCardTitle>
    <MDBCardImage
      data-testid={`product_card_img-${idProduct}`}
      className='product_card_img'
      alt={nombre}
      src={filePortada}
      waves
    />
    {fechaInicioCurso && (
      <MDBCardText
        className='product_card_date'
      >
        Fecha de inicio:
        <span data-testid={`product_card_date-${idProduct}`}>{fechaInicioCurso}</span>
      </MDBCardText>
    )}
    <MDBCardBody
      data-testid={`product_card_boddy-${idProduct}`}
      className='product_card_boddy'
    >
      <MDBCardText
        data-testid={`product_card_boddy_description-${idProduct}`}
        className='product_card_boddy_description text-ellipsis'
      >
        {descripcionCorta}
      </MDBCardText>
      <MDBCardText className='product_card_boddy_category'>
        Categoría:
        <span data-testid={`product_card_boddy_category-${idProduct}`}>
          {catDescripcion}
        </span>
      </MDBCardText>
      <MDBCardText
        data-testid={`product_card_boddy_price-${idProduct}`}
        className='product_card_boddy_price'
      >
        {parseFloat(precioNormal).toFixed(2) !== '0.00' ? (
          <>{`S/ ${parseFloat(precioNormal).toFixed(2)}`}</>
        ) : (
          <>Gratuito</>
        )}
      </MDBCardText>
    </MDBCardBody>
    {parseFloat(precioNormal).toFixed(2) === '0.00' ? (
      <MDBBtn
        color=''
        data-testid={`product_card_button-${idProduct}`}
        className='product_card_button'
      >
        Descargar
      </MDBBtn>
    ) : (
      <MDBBtn
        color=''
        data-testid={`product_card_button-${idProduct}`}
        className='product_card_button'
      >
        Agregar
      </MDBBtn>
    )}
  </MDBCard>
);

export default ProductCard;
