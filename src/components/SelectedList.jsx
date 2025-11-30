import CandidateCardSelected from "./CandidateCardSelect/CandidateCardSelect";

export default function SelectedList({ consigne, src_candidates, selected, setSelected, maxSelection = 15 }) {

    const toggleSelect = (region) => {
        if (selected.includes(region)) {
            setSelected(selected.filter(r => r !== region));
        } else if (selected.length < maxSelection) {
            setSelected([...selected, region]);
        } else {
            alert(`Tu peux sélectionner au maximum ${maxSelection} candidates !`);
        }
    };

    return (
        <div className="ranking_list">
            <h1>{consigne}</h1>
            <p>({selected.length}/{maxSelection} sélectionnées)</p>

            <ul>
                {Object.entries(src_candidates).map(([region, infos]) => {
                    const isSelected = selected.includes(region);
                    return (
                        <CandidateCardSelected
                            key={region}            // 🔹 region comme key unique
                            candidate={infos}
                            region={region}
                            selected={isSelected}
                            onToggle={() => toggleSelect(region)}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
