import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.largeHeroTitle  = $(".large-hero__title");
		this.createWaypoints();
	}
	
	createWaypoints() {
		var triggerPoint    = this.largeHeroTitle[0];
		var objStickyHeader = this.siteHeader;
		new Waypoint({
			element: triggerPoint, 
			handler: function( direction ) {
				if ( direction == "down" ) {
					objStickyHeader.addClass("site-header--dark");
				} else {
					objStickyHeader.removeClass("site-header--dark");
				}
			}
		});
	}
}

export default StickyHeader;