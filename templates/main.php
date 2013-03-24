{{ style('app') }}
{{ style('vendor/leaflet/leaflet') }}

{{ script('vendor/angular/angular', 'appframework') }}
{{ script('public/app', 'appframework') }}
{{ script('vendor/leaflet/leaflet') }}
{{ script('app/map') }}
{{ script('app/helper') }}
{{ script('app/main') }}
{{ script('app/controllers/controllers') }}

<div ng-app="map">

<div id="search_field">
	<form>
		<input id="" class="svg" name="query" value=""
			 placeholder="Search a place" autocomplete="off" type="search">
		<button id="search_launch"> Search </button>
	</form>
</div>


<div id="sidebar_button_panel">
	<button id="sidebar_button" class="side_button">Side bar</button>
	<button id="foo_button" class="side_button">bar</button>
	<button id="bar_button" class="side_button">bar</button>
</div>

<div id="sidebar">
	<button id="close_sidebar_button">Close</button>
	<div class="main_panel">
		<h1>Bookmark</h1>
		<div>
			<ul ng-controller="PointBookmarkCtrl">
				<li ng-repeat="bm in bookmarks">
					<!-- @TODO take care of toid  (houqp)-->
					<i class="icon"></i>
					<a href="#">
						[[bm.name]]
					</a>
				</li>
			</ul>
		</div>
		<div>
			<h2>Route</h2>
			<ul>
				<li>
				</li>
			</ul>
			<a href="#" class="panel_change" data-toid="1">back</a>
		</div>
	</div>
</div>

</div>

<div id="map"></div>
