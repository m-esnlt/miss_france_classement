import { useRef, useEffect } from "react";
import { useMiss } from "../context/MissContext";
import candidates from "../data/candidates.json";
import RankingList from "../components/RankingList";
import html2canvas from "html2canvas";

export default function Finalistes() {
  const { final5, ranking, setRanking } = useMiss();
  const rankingRef = useRef();

  // Synchroniser ranking avec final5
  useEffect(() => {
    setRanking(prev => {
      const validPrev = prev.filter(region => final5.includes(region));
      const updated = [...validPrev, ...final5.filter(region => !validPrev.includes(region))];
      return updated;
    });
  }, [final5, setRanking]);

  // Télécharger l'image
  const downloadImage = async () => {
    if (!rankingRef.current) return;

    // html2canvas capture le div et applique ton CSS
    const canvas = await html2canvas(rankingRef.current, {
      backgroundColor: null, // pour garder ton fond CSS
      scale: 2,              // meilleure résolution
      useCORS: true          // pour les images externes
    });

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "classement_finalistes.png";
    link.click();
  };

  return (
    <div>
      <h1>Classe tes 5 finalistes !</h1>

      {/* Div qui contient toutes les cartes */}
      <div ref={rankingRef}>
        <RankingList ranking={ranking} setRanking={setRanking} candidatesData={candidates} />


      {/* Bouton pour télécharger */}

        <button onClick={downloadImage}>
          Télécharger le classement en PNG
        </button>
      </div>
    </div>
  );
}
