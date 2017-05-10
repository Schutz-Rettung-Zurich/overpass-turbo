webpackJsonp([16],{190:function(e,t){e.exports={"nav.run":"Pokreni","nav.run_tt":"execute this query on Overpass API","nav.share":"Dijeli","nav.share_tt":"get a permalink for this query","nav.export":"Izvoz","nav.export_tt":"various export tools","nav.save":"Spremi","nav.save_tt":"spremi ovaj upit","nav.load":"Učitaj","nav.load_tt":"load saved query or example","nav.wizard":"Wizard","nav.wizard_tt":"a query builder","nav.settings":"Postavke","nav.settings_tt":"razne postavke","nav.help":"Pomoć","nav.help_tt":"help, about and attributions","tabs.map":"Karta","tabs.map_tt":"map view","tabs.data":"Podaci","tabs.data_tt":"data view","map_controlls.zoom_to_data":"zoom to data","map_controlls.localize_user":"lociraj me!","map_controlls.select_bbox":"ručno odaberi okvir","map_controlls.select_bbox_disabled":"disabled as the current query doesn't require a bbox","map_controlls.toggle_wide_map":"toggle wide map","map_controlls.toggle_data":"toggle data overlay","map_controlls.suggest_zoom_to_data":"click here to show the data","settings.title":"Postavke","settings.section.general":"Opće postavke","settings.ui_lang":"UI Language","settings.server":"Poslužitelj","settings.force_simple_cors":"Force simple CORS requests","settings.force_simple_cors_expl":'use when the server doesn\'t support preflighted <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a> requests',"settings.disable_autorepair":"Disable warning/autorepair message when Overpass API returns no visible data.","settings.section.editor":"Uređivač","settings.enable_rich_editor":"Enable rich code editor","settings.enable_rich_editor_expl":"disable this on mobile devices; requires a page-reload to take effect","settings.editor_width":"Width of editor","settings.editor_width_expl":'e.g. "400px", leave blank for defaults',"settings.section.map":"Karta","settings.tile_server":"Tile-Server","settings.tile_opacity":"Tiles Opacity","settings.tile_opacity_expl":"transparency of background tiles: 0=tansparent … 1=visible","settings.show_crosshairs":"Show crosshairs at the map center.","settings.disable_poiomatic":"Don't display small features as POIs.","settings.show_data_stats":"Show some stats about loaded and displayed data.","settings.section.sharing":"Dijeljenje","settings.include_map_state":"Include current map state in shared links","settings.compression":"Sažimanje","settings.section.export":"Izvoz","settings.export_image_scale":"Show scale on exported images.","settings.export_image_attr":"Show attribution on exported images.","save.title":"Spremi","save.enter_name":"Enter a name for this query","load.title":"Učitaj","load.delete_query":"obriši ovaj upit","load.saved_queries":"Spremljeni upiti","load.examples":"Primjeri","load.no_saved_query":"još nema spremljenog upita","export.title":"Izvoz","export.section.map":"Karta","export.as_png":'as <a id="export-image" href="">png image</a>',"export.as_interactive_map":'as <a id="export-interactive-map" href="">interactive Map</a>',"export.current_map_view":'current <a id="export-map-state" href="">map view</a>',"export.map_view_expl":"okvir, centar, itd.","export.section.data":"Data","export.as_geoJSON":'as <a id="export-geoJSON" href="">geoJSON</a>',"export.as_GPX":'as <a id="export-GPX" href="">GPX</a>',"export.as_KML":'as <a id="export-KML" href="">KML</a>',"export.raw":'raw <a id="export-raw" href="">data</a>',"export.raw_interpreter":'raw data directly from <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'save GeoJSON to <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Upit","export.as_text":'as <a id="export-text" href="" download="query.txt" target="_blank">text</a> (<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn\'t include additional overpass turbo features such as MapCSS.">standalone query</abbr>)',"export.as_text_raw":'as <a id="export-text-raw" href="" download="query-raw.txt" target="_blank">text</a> (<abbr title="Unaltered overpass turbo query – just as in the code editor">raw query</abbr>)',"export.as_text_wiki":'as <a id="export-text-wiki" href="" download="query-wiki.txt" target="_blank">text</a> (<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">osm wiki</abbr>)',"export.to_xml":'convert to <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'convert to (<a id="export-convert-compact" href="" target="_blank" class="external">compact</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"load data into an OSM editor:","export.geoJSON.title":"Export - GeoJSON","export.geoJSON.expl":"The currently shown data as GeoJSON:","export.geoJSON.no_data":"No GeoJSON data available! Please run a query first.","export.geoJSON_gist.title":"Spremljeno kao gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Uredi sa geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Izvoz - GPX","export.GPX.expl":"Prikazani podaci kao GPX:","export.GPX.no_data":"No GPX data available! Please run a query first.","export.KML.title":"Export - KML","export.KML.expl":"The currently shown data as KML:","export.KML.no_data":"No KML data available! Please run a query first.","export.raw.title":"Izvoz - sirovi podaci","export.raw.no_data":"Nema sirovih podataka! Molim prvo pokrenite upit.","export.map_view.title":"Current Map View","export.map_view.permalink":"Permalink","export.map_view.permalink_osm":"na osm.org","export.map_view.center":"Centar","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Granice","export.map_view.bounds_selection":"Bounds (manually selected bbox)","export.map_view.bounds_expl":"south, west, north, east","export.map_view.zoom":"Zoom","export.image.title":"Izvoz - slika","export.image.alt":"the exported map","export.image.download":"Download","export.image.attribution_missing":"Make sure to include proper attributions when distributing this image!","share.title":"Share","share.header":"Permalink","share.copy_this_link":'Copy this <a href="" id="share_link_a">link</a> to share the current code:',"share.options":"Opcije","share.incl_map_state":"include current map state","share.run_immediately":"run this query immediately after loading","help.title":"Pomoć","help.section.introduction":"Uvod","help.intro.0":'This is <i>overpass turbo</i>, a web-based data filtering tool for <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'With overpass turbo you can run <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> queries and analyse the resulting OSM data interactively on a map.',"help.intro.1b":'There is an integrated <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Wizard</a> which makes creating queries super easy.',"help.intro.2":'More information about <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> and how to write <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass queries</a> can be found in the OSM wiki.',"help.section.queries":"Overpass Queries","help.queries.expl":'Overpass API allows to query for OSM data by your own search criteria. For this purpose, it has a specifically crafted <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">query language</a>.',"help.intro.shortcuts":"In addition to regular Overpass API queries one can use the following handy shortcuts in overpass turbo:","help.intro.shortcuts.bbox":"bounding box coordinates of the current map view","help.intro.shortcuts.center":"koordinate centra karte","help.intro.shortcuts.date":"ISO 8601 date-time-string a certain time interval ago (e.g. “24 hours”)","help.intro.shortcuts.style":'defines a <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS stylesheet</a>',"help.intro.shortcuts.custom":"Arbitrary shortcuts can be defined by putting <i>{{shortcut=value}}</i> somewhere in the script.","help.intro.shortcuts.more":'More overpass-turbo shortcuts, additional information about the above and usage examples can be found in the <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"IDE","help.ide.share.title":"Dijeljenje","help.ide.share.expl":"It is possible to send a permalink with the query you are currently working on to someone else. This is found in the <i>Share</i> tool and shows you a link which you can send to a friend or post online. (Note that others will work on their own copy of the query.)","help.ide.save_load.title":"Učitaj i Spremi","help.ide.save_load.expl":"You can also save and load your queries. For a start, there are a few example queries preloaded. Take a look at them for a short glimpse of what overpass can do.","help.ide.keyboard.title":"Kratice za tipkovnicu:","help.ide.keyboard.run":"Run the current query.","help.ide.keyboard.wizard":"Start the query wizard.","help.ide.keyboard.load_save":"Load (open) / Save a query.","help.ide.keyboard.help":"Open this help dialog.","help.section.key":"Map Key","help.key.example":"various map features","help.key.description":"Ways are shown as bold blue lines, Polygons as yellow areas with a thin blue outline, POIs (nodes with tags) as yellow circles with a thin blue outline. Circles with a red filling stand for polygons or ways that are too small to be displayed normally. Pink lines or outlines mean, that an object is part of at least one (loaded) relation. Dashed lines mean that a way or polygon has incomplete geometry (most likely because some of its nodes have not been loaded).","help.section.export":"Export","help.export":'The <i>Export</i> tool holds a variety of options to do with the query and/or data loaded by the query.<br />Options with this symbol:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> rely on or refer to external (online) tools.',"help.export.query_data.title":"Query / Data","help.export.query_data.expl":"This holds some things you can do with the raw query or data, like converting the query between the various query languages or exporting the data as geoJSON. A very usefull option is the possibility to send the query to JOSM.","help.export.map.title":"Karta","help.export.map.expl":"Convert the current map-with-data view to a static png image, or a (fullscreen) interactive map, etc.","help.section.about":"Više o","help.about.maintained":"<i>overpass turbo</i> održava Martin Raifer (tyr.asd at gmail.com).","help.about.feedback.title":"Feedback, Bug Reports, Feature Requests","help.about.feedback":'If you would like to give feedback, report issues or ask for a particular feature, please use the <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> on github or the <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">discussion page</a> on the OSM-wiki.',"help.about.source.title":"Source Code","help.about.source":'The <a href="https://github.com/tyrasd/overpass-turbo">source code</a> of this application is released under the MIT <a href="LICENSE">license</a>.',"help.section.attribution":"Attribution","help.attr.data_sources":"Izvori podataka","help.attr.data":'Data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Terms</a>)</span>',"help.attr.mining":"Data mining by","help.attr.tiles":'Map tiles &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" style="font-size:smaller;">CC-BY-SA</a>',"help.attr.search":"Search provided by","help.attr.software":"Software & Libraries","help.attr.leaflet":"Map powered by","help.attr.codemirror":"Editor powered by","help.attr.other_libs":"Other libraries:","ffs.title":"Query Wizard","ffs.placeholder":"search","ffs.expl":'The <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">wizard</a> assists you with creating Overpass queries. Here are some usage examples:',"ffs.parse_error":"Sorry, this search cannot be understood.","ffs.parse_error_expl":'Note that you must use quotation marks with strings containing spaces or special characters and that multiple search filters must be separated by appropriate boolean operators (<i>and</i> or <i>or</i>). Read the <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentation</a> for more information.',"ffs.typo":"Did you mean:","dialog.dismiss":"odustani","dialog.cancel":"odustani","dialog.save":"spremi","dialog.delete":"obriši","dialog.close":"zatvori","dialog.done":"gotovo","dialog.abort":"odustani","dialog.repair_query":"popravi upit","dialog.continue_anyway":"svejedno nastavi","dialog.show_data":"prikaži podatke","dialog.wizard_build":"build query","dialog.wizard_run":"build and run query","dialog.delete_query.title":"Obrisati upit?","dialog.delete_query.expl":"Do you really want to delete the following query","error.query.title":"Greška u upitu","error.query.expl":"An error occured during the execution of the overpass query! This is what overpass API returned:","error.ajax.title":"Greška Ajaxa","error.ajax.expl":"Dogodila se greška kod pokretanja overpass upita!","error.mapcss.title":"Pogreška u MapCSS","error.mapcss.expl":"Loš MapCSS stylesheet:","error.remote.title":"Remote Control Error","error.remote.incompat":"Error: incompatible JOSM remote control version","error.remote.not_found":"Remote control not found. :( Make sure JOSM is already running and properly configured.","error.nominatim.title":"Nominatim Error","error.nominatim.expl":"Could not find anything with the following name:","warning.browser.title":"Vaš preglednik nije podržan :(","warning.browser.expl.1":'The browser you are currently using, is (most likely) not capable of running (significant parts of) this Application. <small>It must support <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Note that you may have to enable cookies and/or "local Data" for this site on some browsers (such as Firefox and Chrome).',"warning.browser.expl.3":'Please upgrade to a more up-to-date version of your browser or switch to a more capable one! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work. Alternatively, you can still use the <a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>.',"warning.incomplete.title":"Nepotpuni podaci","warning.incomplete.expl.1":"This query returned no nodes. In OSM, only nodes contain coordinates. For example, a way cannot be displayed without its nodes.","warning.incomplete.expl.2":'If this is not what you meant to get, <i>overpass turbo</i> can help you to repair (auto-complete) the query by choosing "repair query" below. Otherwise you can continue to the data.',"warning.incomplete.not_again":"do not show this message again.","warning.incomplete.remote.expl.1":"It looks like if this query will not return OSM data in XML format with metadata. Editors like JOSM require the data to be in that format, though.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> can help you to correct the query by choosing "repair query" below.',"warning.share.long":"Warning: This share-link is quite long. It may not work under certain circumstances","warning.share.very_long":"Warning: This share-link is very long. It is likely to fail under normal circumstances (browsers, webservers). Use with caution!","warning.huge_data.title":"Velike količine podataka","warning.huge_data.expl.1":"This query returned quite a lot of data (approx. {{amount_txt}}).","warning.huge_data.expl.2":"Your browser may have a hard time trying to render this. Do you really want to continue?","waiter.processing_query":"obrađivanje upita...","waiter.export_as_image":"exporting as image...","data_stats.loaded":"Učitano","data_stats.displayed":"Prikazano","data_stats.nodes":"točke","data_stats.ways":"linije","data_stats.relations":"relacije","data_stats.areas":"površine","data_stats.pois":"pois","data_stats.lines":"linije","data_stats.polygons":"polygons","data_stats.lag":"Currentness of data","data_stats.lag_areas":"Currentness of areas","data_stats.lag.expl":"behind main OSM db","map.intentionally_blank":"Karta je namjerno prazna"}}});