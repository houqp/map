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


var mapapp = angular.module('map', ['OC']);

mapapp.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
}]);


$(document).ready(function() {
	var map = new OCMap({
		'api_key': 'BC9A493B41014CAABB98F0471D759707',
		'default_zoom': 18,
	});
	map.addTileLayer();

	function onSearch(e) {
		e.preventDefault();
		map.search($("#search_field input").val());
	}

	function showSidebar() {
		$('#sidebar_button_panel').hide();
		$('#sidebar').show('slide', {direction: 'left'}, 200);
	}

	function hideSidebar() {
		$('#sidebar').hide('slide', {direction: 'left'}, 200);
		$('#sidebar_button_panel').show();
	}

	$('#search_launch').click(onSearch);
	$('#search_field form').submit(onSearch);
	$('#sidebar_button').click(showSidebar);

	var close_sb_btn = $('#close_sidebar_button');
	close_sb_btn.css('top', -getFullHeight(close_sb_btn));
	close_sb_btn.click(hideSidebar);
});

