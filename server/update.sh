#!/bin/bash
git pull origin gh-pages
cd ../data
node ../server/fetcher-archiver.js
topojson -o districts_topo.json --id-property 'distID, distID' --external-properties=data.csv --properties='district=district' --properties='dead=dead' --properties='injured=injured' --properties='GovComplete=GovComplete' --properties='GovPartial=GovPartial' --properties='OthComplete=OthComplete' --properties='OthPartial=OthPartial' --properties='population=population' --properties='deadpercent=deadpercent' --properties='injuredpercent=injuredpercent' -- districts_id.json;
git add -A
git commit -a -m "there was an update..hope there won't ever be another one."
git push origin gh-pages
