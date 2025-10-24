import candidates from "../data/candidates.json"
import CandidateCardSelected from "./CandidateCardSelect/CandidateCardSelect"

export default function SelectedList(props) {
    return (
        <div>
            <h1>{props.consigne}</h1>

            <ul>
                {
                    Object.entries(props.src_candidates).map(([region, infos]) => (
                        <CandidateCardSelected key={region} candidate={infos} region={region} />
                    ))
                }
            </ul>
        </div>
    )
}