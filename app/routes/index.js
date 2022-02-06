import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Restaurant', 'Grocery Store', 'Bar'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/services.json');
    let { data } = await response.json();
    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}
