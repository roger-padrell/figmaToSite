const FIGMA_API_KEY = 'figd_-6qbnuP5kExseVf3evYD9pvlj2rIfc1hTGSrDAiU';
const FIGMA_FILE_ID = '0t9SMmG2b9CsmIs32UgCfN';

var db = {};
db.data = {};

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

getFigmaFile();
