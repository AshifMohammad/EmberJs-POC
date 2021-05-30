import Route from '@ember/routing/route';

export default class Production extends Route {
  model() {
    return {
      productName: 'ashifPro',
      dimensionName: 'testdimenstions',
    };
  }
}
