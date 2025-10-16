import candidates from "../data/candidates.json"
import CandidateCardSelected from "./CandidateCardSelect"

export default function SelectedList() {
    return (
        <div>
            <h1>Sélectionne tes 15 miss préselectionnées !</h1>

            <ul>
                {
                    Object.entries(candidates).map(([region, infos]) => (
                        <CandidateCardSelected key={region} candidate={infos} region={region} />
                    ))
                }
            </ul>
        </div>
    )
}