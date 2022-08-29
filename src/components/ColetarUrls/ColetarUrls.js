const coletarUrls = ({ vetoresId, vetoresLeitura, format }) => {
  let vetoresObj = [];

  vetoresId.forEach((id, index) => {
    vetoresObj = [
      ...vetoresObj,
      {
        index,
        id,
        leitura: vetoresLeitura[index],
      },
    ];
  });

  vetoresObj.sort((a, b) => a.leitura - b.leitura);

  let urls = [];

  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";

  vetoresObj.map((item, index) => {
    urls.push(
      `${baseUrlApi + item.id}/${item.leitura}/${index + 1}/baixar/${format}`
    );
  });
  return urls;
};

export default coletarUrls;
