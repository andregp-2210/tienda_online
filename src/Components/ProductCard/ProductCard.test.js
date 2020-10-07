import React from 'react';
import { shallow } from 'enzyme';
import { productBase, productWithDate, productWithPaymentMethod, productWithPrice } from '../../Utils/TestConstants/ProductCard'
import ProductCard from './ProductCard';

describe('Testing <ProductCard />', () => {
  test('should render ProductCard component', () => {
    const productCard = shallow(<ProductCard product={productBase} />);
    expect(productCard.length).toEqual(1);
  });
  test('should render correct ProductCard component based on parameters', () => {
    const productCard = shallow(<ProductCard product={productBase} />);
    expect(productCard.find(`[data-testid='product_card_payment-${productBase.idProduct}']`)).toHaveLength(0);
    expect(productCard.find(`[data-testid='product_card_title-${productBase.idProduct}']`).children().text()).toEqual('Fisica II');
    expect(productCard.find(`[data-testid='product_card_img-${productBase.idProduct}']`).prop('src')).toEqual('https://ied.blob.core.windows.net/academico/ventadigital/files/GUIAPRACTICAFISICAII2DAEDICIN_yyFihf17WDBlsO1UJDgn_38513026-0ac5-47d7-991e-ae8c705114f4.jpg');
    expect(productCard.find(`[data-testid='product_card_img-${productBase.idProduct}']`).prop('alt')).toEqual('Fisica II');
    expect(productCard.find(`[data-testid='product_card_date-${productBase.idProduct}']`).children()).toHaveLength(0);
    expect(productCard.find(`[data-testid='product_card_boddy_description-${productBase.idProduct}']`).children().text()).toEqual('Guía de Práctica');
    expect(productCard.find(`[data-testid='product_card_boddy_category-${productBase.idProduct}']`).text()).toEqual('LIBRO');
    expect(productCard.find(`[data-testid='product_card_boddy_price-${productBase.idProduct}']`).children().text()).toEqual('Gratuito');
    expect(productCard.find(`[data-testid='product_card_button-${productBase.idProduct}']`).children().text()).toEqual('Descargar');
  })
  test('should render paymentMethod', () => {
    const productCard = shallow(<ProductCard product={productWithPaymentMethod} />);
    expect(productCard.find(`[data-testid='product_card_payment-${productBase.idProduct}']`)).toHaveLength(1);
    expect(productCard.find(`[data-testid='product_card_payment-${productBase.idProduct}']`).text()).toEqual('Pronto Pago');
  })
  test('should render date', () => {
    const productCard = shallow(<ProductCard product={productWithDate} />);
    expect(productCard.find(`[data-testid='product_card_date-${productBase.idProduct}']`)).toHaveLength(1);
    expect(productCard.find(`[data-testid='product_card_date-${productBase.idProduct}']`).children().text()).toEqual('2020-10-07T17:00:00');
  })
  test('should render price ', () => {
    const productCard = shallow(<ProductCard product={productWithPrice} />);
    expect(productCard.find(`[data-testid='product_card_boddy_price-${productBase.idProduct}']`).children().text()).toEqual('S/ 10.00');
    expect(productCard.find(`[data-testid='product_card_button-${productBase.idProduct}']`).children().text()).toEqual('Agregar');
  });
});
