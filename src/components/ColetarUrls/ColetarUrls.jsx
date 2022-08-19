import { useEffect, useState } from "react";

const coletarUrls = (range) => {
  const [urlJson, setUrlJson] = useState([]);
  const [urlTxt, setUrlTxt] = useState([]);
  const [filenameJson, setFilenameJson] = useState([]);
  const [filenameTxt, setFilenameTxt] = useState([]);

  const apiColetarJson = `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/json`;
  const apiColetarTxt = `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/txt`;
  // const apiColetarId = `http://localhost:3000/api/vetores/${range}/baixarall/${formato}`;

  Promise.all([
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(apiColetarJson);
          if (res.status === 200) {
            const data = await res.json();
            setUrlJson(data.url);
            setFilenameJson(data.filename);
          } else {
            throw "Error";
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []),

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(apiColetarTxt);
          if (res.status === 200) {
            const data = await res.json();
            setUrlTxt(data.url);
            setFilenameTxt(data.filename);
          } else {
            throw "Error";
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []),
  ]);

  return {
    urlJson: urlJson,
    urlTxt: urlTxt,
  };
};

export default coletarUrls;
