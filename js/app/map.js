/**
*
* ownCloud - Map
*
* @author Brice Maron
* @author Qingping Hou
* @copyright 2013 Brice Maron merzhin@gmail.com
* @copyright 2013 Qingping Hou qingping.hou@gmail.com
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
* License as published by the Free Software Foundation; either
* version 3 of the License, or any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU AFFERO GENERAL PUBLIC LICENSE for more details.
*
* You should have received a copy of the GNU Affero General Public
* License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*
*/


/*
 * Wrapper around leaflet map
 */
function OCMap(attr) {
	var self = this;

	self.llmap = L.map('map').setView([51.505, -0.09], 13);
	self.api_key = attr.api_key;
	self.default_zoom = attr.default_zoom;

	self.addTileLayer = function() {
		L.tileLayer(
			'http://{s}.tile.cloudmade.com/'
				+ self.api_key + '/997/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; '
				+ '<a href="http://openstreetmap.org">OpenStreetMap</a> '
				+ 'contributors, '
				+ '<a href="http://creativecommons.org/licenses/by-sa/2.0/">'
				+ 'CC-BY-SA</a>, Imagery ? '
				+ '<a href="http://cloudmade.com">CloudMade</a>',
			maxZoom: self.default_zoom,
		}).addTo(self.llmap);
	}

	self.setCenter = function(markerLocation) {
		self.llmap.setView(markerLocation, self.default_zoom);
	}

	self.displaySearchAddress = function(data) {
		console.log(data[0]);
		var markerLocation = new L.LatLng(data[0].lat, data[0].lon);
		self.setCenter(markerLocation);

		var marker = new L.Marker(markerLocation);
		self.llmap.addLayer(marker);

		marker.bindPopup("<b>Hello world!</b><br />I am a popup.");
	}

	self.search = function(address) {
		if (address === '')
			return;

		self.geoCode(address, self.displaySearchAddress);
	}

	self.geoCode = function(address, callback) {
		var url = 'http://open.mapquestapi.com/nominatim/v1/search';
		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: url,
			success: callback,
			jsonp: 'json_callback',
			data: {
				format:'json',
				q: address,
			}
		});
	}
}

