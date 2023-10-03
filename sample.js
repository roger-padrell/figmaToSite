const FIGMA_API_KEY = 'figd_-6qbnuP5kExseVf3evYD9pvlj2rIfc1hTGSrDAiU';
const FIGMA_FILE_ID = '0t9SMmG2b9CsmIs32UgCfN';

const getFigmaFile = async () => {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_API_KEY,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

getFigmaFile();
