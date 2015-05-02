## About

This map show Casualties from the April 25th earthquake in Nepal. Casualty data can be found [here](https://docs.google.com/spreadsheets/d/1Q3QSx1_p78T4_qo_JVj5vEQtzuCFWP2AfxYnVBSNzLQ/pubhtml), 

This app frame is built using the [Foundation](http://foundation.zurb.com/) responsive framework and jeykll pages.

## Dependencies
- Download and install [Jekyll](http://jekyllrb.com/)
- Download and install [Topojson](https://github.com/mbostock/topojson), which requires Node.
	`npm install -g topojson`
- GIT access to KTMLivingLabs

## Steps to update the data
1) See if data has been updated here [](https://docs.google.com/spreadsheets/d/1Q3QSx1_p78T4_qo_JVj5vEQtzuCFWP2AfxYnVBSNzLQ/pubhtml).
2) Make a copy the most recently created data in /Nepal/quake_casualties and update the name. Naming should be `nepal_quake_YY_MM_DD_HH` using military time in NST.
3) The first page `autocopied` contains the data automatically ported over from the gov't website.
4) `names` and `population 2011` are static and used for calculating names/totals in `casualty and population`. Leave these two alone.
5) Check `casualty and population` sums (at bottom) and ensure that they are calculating the correct totals
6) Export `casualty and population` as a csv named same as above: `nepal_quake_YY_MM_DD_HH`
7) Run topojson in your /data/ folder using the following script, inputting your csv name as shown:

`topojson -o districts_topo.json --id-property 'distID, distID' --external-properties=casualty_YY_MM_DD_HH.csv --properties='district=district' --properties='dead=dead' --properties='injured=injured' --properties='GovComplete=GovComplete' --properties='GovPartial=GovPartial' --properties='OthComplete=OthComplete' --properties='OthPartial=OthPartial' --properties='population=population' --properties='deadpercent=deadpercent' --properties='injuredpercent=injuredpercent' -- districts_id.json;
bounds: 80.0601425170899 26.347515106201172 88.204010`

8) Update date in index.html, iframe.html
9) Update casualty totals in index.html, iframe.html
10) Check to make sure that the correct numbers are showing on the map, and there are no errors, on localhost:4000
11) push to gh-pages on github.

### Updated: 5/2/15 Nepal