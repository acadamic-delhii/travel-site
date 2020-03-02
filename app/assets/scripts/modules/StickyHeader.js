import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		//this.lazyImages = $(".lazyload");
		
		this.siteHeader = $(".site-header");
		this.largeHeroTitle  = $(".large-hero__title");
		this.createHeaderWaypoint();
		
		this.headerLinks  = $(".primary-nav a");
		this.pageSections = $(".page-section");
		this.createPageSectionWaypoints();
		
		this.addSmoothScroll();
		
		//this.refreshWaypoints();
	}
	
	addSmoothScroll() {
		this.headerLinks.smoothScroll();
	}
	
	createHeaderWaypoint() {
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
	
	createPageSectionWaypoints() {
		var objHeaderLinks = this.headerLinks;
		this.pageSections.each( function() {
			var currentPageSection = this;
			
			new Waypoint({
				element: currentPageSection, 
				handler: function(direction) {
					if ( direction == "down" ) {
						objHeaderLinks.removeClass("is-current-link");
						$(currentPageSection.getAttribute("data-matching-link")).addClass("is-current-link");
					}
				}, 
				offset: "18%"
			});
			
			new Waypoint({
				element: currentPageSection, 
				handler: function(direction) {
					if ( direction == "up" ) {
						objHeaderLinks.removeClass("is-current-link");
						$(currentPageSection.getAttribute("data-matching-link")).addClass("is-current-link");
					}
				}, 
				offset: "-40%"
			});
		} );
	}
	
	refreshWaypoints() {
		/*lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});*/
	}
}

export default StickyHeader;