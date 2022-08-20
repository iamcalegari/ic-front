import { useEffect, useState } from "react";

const fetchData = async (api, option) => {
  const [leituraMax, setLeituraMax] = useState(1);
  useEffect(async () => {
    try {
      const res = await fetch(api);
      if (res.status === 200) {
        const data = await res.json();
        // setId(data.id);
        if (option === "leituras") {
          localStorage.setItem("vetoresId", data.id);
          localStorage.setItem("vetoresTamanho", data.tamanho);
          localStorage.setItem("vetoresLeitura", data.leitura);
        }
        if (option === "leituraMax") {
          setLeituraMax(data.leituraMax);
        }
      } else {
        throw "Error";
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
};

export default fetchData;
