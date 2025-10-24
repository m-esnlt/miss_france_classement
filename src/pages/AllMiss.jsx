import SelectedList from "../components/SelectedList";
import candidates from "../data/candidates.json"

export default function AllMiss() {
    return(
        <div>
            <SelectedList consigne="Selectionne tes 15 préférées !" src_candidates={candidates}/>
        </div>
    )
}