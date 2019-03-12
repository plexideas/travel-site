import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor() {
    this.itemToReveal = $('.feature-item, .testimonial, .headline');
    this.hideInitially();
    this.createWaypoins();
  }

  hideInitially() {
    this.itemToReveal.addClass('reveal-item');
  }

  createWaypoins() {
    this.itemToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: "85%",
      });
    });
  }
}

export default RevealOnScroll; 