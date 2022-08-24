const coletarUrls = ({
  vetoresId,
  vetoresLeitura,
  format, 
}) => {
  let urls = []

  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  
  vetoresId.map((_, index) => {
      urls.push(`${baseUrlApi+vetoresId[index]}/${index + 1}/${
        vetoresLeitura[index]
      }/baixar/${format}`);
      console.log(urls)
      return urls;
    });

};

export default coletarUrls;
