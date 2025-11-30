import { createContext, useContext, useState, useEffect } from "react";

const MissContext = createContext();

export function MissProvider({ children }) {
  const [selected15, setSelected15] = useState(() => {
    return JSON.parse(localStorage.getItem("selected15")) || [];
  });
  const [final5, setFinal5] = useState(() => {
    return JSON.parse(localStorage.getItem("final5")) || [];
  });
  const [ranking, setRanking] = useState(() => {
    return JSON.parse(localStorage.getItem("ranking")) || [];
  });

  // Sauvegarde dans localStorage
  useEffect(() => {
    localStorage.setItem("selected15", JSON.stringify(selected15));
  }, [selected15]);

  useEffect(() => {
    localStorage.setItem("final5", JSON.stringify(final5));
  }, [final5]);

  useEffect(() => {
    localStorage.setItem("ranking", JSON.stringify(ranking));
  }, [ranking]);

  // 🔹 Effet pour enlever du final5 et ranking si la candidate est supprimée de selected15
useEffect(() => {
  // Supprime du final5 et du ranking toute candidate qui n'est plus dans selected15
  setFinal5(prev => prev.filter(region => selected15.includes(region)));
  setRanking(prev => prev.filter(region => selected15.includes(region)));
}, [selected15]);


  return (
    <MissContext.Provider value={{ selected15, setSelected15, final5, setFinal5, ranking, setRanking }}>
      {children}
    </MissContext.Provider>
  );
}

export function useMiss() {
  return useContext(MissContext);
}

