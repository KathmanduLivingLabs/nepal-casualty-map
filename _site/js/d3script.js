

function addD3(i) {

	bS = 5000;	
	dS = 10000;
	cS = 1000;

  burritos = data[i].burritos;
  dynamite = data[i].dynamite;
  coal = data[i].coal;

	// Burrito calculations
	burritos = Math.floor(data[i].burritos / bS); 
	burRemainder = Math.floor(((data[i].burritos / bS) - burritos) * 3);
	dynamite = data[i].dynamite / dS;
	dynBundle = Math.floor(dynamite / 5);
	dynSingle = Math.floor(dynamite % 5);
	coal = Math.floor(data[i].coal / cS * 10) / 10;  

	console.log(burritos);
	console.log(burRemainder);
  console.log(dynBundle);
  console.log(dynSingle);
  console.log(coal);
}