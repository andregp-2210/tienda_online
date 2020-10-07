const productBase = {
  idProduct: 34,
  idProdCam: 0,
  itemTarifario: 0,
  precioRebajado: 0.0,
  precioNormal: 0,
  filePortada:
    'https://ied.blob.core.windows.net/academico/ventadigital/files/GUIAPRACTICAFISICAII2DAEDICIN_yyFihf17WDBlsO1UJDgn_38513026-0ac5-47d7-991e-ae8c705114f4.jpg',
  nombre: 'Fisica II',
  descripcionCorta: 'Guía de Práctica',
  descripcionExtendida: null,
  catDescripcion: 'LIBRO',
  peso: 0.0,
  dimensiones: null,
  valoraciones: false,
  tiendaIdTienda: 2,
  idCatego: 1,
  nombreTienda: 'Todos',
  fechaInicioCurso: null,
  metodoPago: null,
  productosVinculados: null,
  academico: true,
  grupo: null,
  curso: 'IND16-0317,CIV14-0320',
};

const productWithPaymentMethod = {
  ...productBase,
  metodoPago: 'Pronto Pago',
};
const productWithDate = {
  ...productBase,
  fechaInicioCurso: '2020-10-07T17:00:00',
};
const productWithPrice = {
  ...productBase,
  precioNormal: 10,
};

export { productBase, productWithDate, productWithPaymentMethod, productWithPrice };
