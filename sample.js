if(sessionStorage.code){
	const FIGMA_API_KEY = sessionStorage.code;
}
const FIGMA_FILE_ID = '0t9SMmG2b9CsmIs32UgCfN';

var db = {};
db.data = {};

function startCreation(pg){
	page = db.pages[pg];
}

function signIn(){
    var st = Math.floor(Math.random() * 100000)
    window.open("https://www.figma.com/oauth?client_id=IdLyDnXPNECnczbCoMxARm&redirect_uri=https://roger-padrell.github.io/figmaToSite/callback&scope=files:read&state=" + st + "&response_type=code")
}

function loadVars(response){
	db.data = response;
	db.document = response.document;
	db.pages = response.document.children;

	startCreation(0)
}

const getFigmaFile = function() {
  try {
    fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}`, {
		method: 'GET',
		headers: {
			'X-Figma-Token': FIGMA_API_KEY,
		},
	})
		.then(response => response.json())
		.then(response => db.data = response)
    
  } catch (error) {
    console.error(error);
  }
};
