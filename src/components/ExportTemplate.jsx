import { forwardRef } from "react";
import RankingList from "./RankingList";

const ExportTemplate = forwardRef(({ ranking, candidatesData }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute", // hors flux normal
        top: "-10000px",      // très haut, hors écran
        left: "-10000px",
        width: "800px",       // largeur de ton PNG
        backgroundColor: "#fce4ec",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#d81b60" }}>
        Mon Classement Miss France
      </h1>
      <RankingList ranking={ranking} setRanking={() => {}} candidatesData={candidatesData} />
    </div>
  );
});

export default ExportTemplate;
