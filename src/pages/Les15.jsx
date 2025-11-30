import SelectedList from "../components/SelectedList";
import { useMiss } from "../context/MissContext";
import candidates from "../data/candidates.json";

export default function Les15() {
    const { selected15, final5, setFinal5 } = useMiss();

    // Préparer les données des 15 candidates seulement
    const candidates15 = {};
    selected15.forEach(region => {
        candidates15[region] = candidates[region];
    });

    return (
        <div>
            <SelectedList
                consigne="Sélectionne tes 5 finalistes !"
                src_candidates={candidates15}
                selected={final5}
                setSelected={setFinal5}
                maxSelection={5}
            />
        </div>
    );
}
