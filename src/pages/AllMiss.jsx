import SelectedList from "../components/SelectedList";
import candidates from "../data/candidates.json";
import { useMiss } from "../context/MissContext";

export default function AllMiss() {
    const { selected15, setSelected15 } = useMiss();

    return (
        <div>
            <SelectedList
                consigne="Sélectionne tes 15 préférées !"
                src_candidates={candidates}
                selected={selected15}
                setSelected={setSelected15}
                maxSelection={15}
            />
        </div>
    );
}
