var FIGMA_API_KEY = 'vehrsN3yZVv8zXt82g8Jm0CiLDlRM8';

var db = {};
db.data = {};

window.onload = function(){
	if(sessionStorage.code){
		console.log(sessionStorage.code)
		FIGMA_API_KEY = sessionStorage.code;
		getFigmaFile()
	}
}

function startCreation(pg){
	page = db.pages[pg];
}

function signIn(){
    var st = Math.floor(Math.random() * 100000)
    window.location.href = "https://www.figma.com/oauth?client_id=IdLyDnXPNECnczbCoMxARm&redirect_uri=https://roger-padrell.github.io/figmaToSite/callback&scope=files:read&state=" + st + "&response_type=code";
}

function loadVars(response){
	db.data = response;
	db.document = response.document;
	db.pages = response.document.children;

	startCreation(0)
}

const getFigmaFile = function() {
 const FILE_KEY = prompt("Write the file ID:", '0t9SMmG2b9CsmIs32UgCfN');
const ACCESS_TOKEN = FIGMA_API_KEY;

fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
  headers: {
    'X-Figma-Token': ACCESS_TOKEN
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
};
