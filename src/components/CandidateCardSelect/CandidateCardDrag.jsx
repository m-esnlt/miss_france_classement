import "./CandidateCardDrag.css";

function Photo({ photo_url }) {
    return <img className="candidate-photo" src={photo_url} alt="Photo de la candidate" />;
}

export default function CandidateCardDrag({ candidate, region }) {
    return (
        <div className="candidate-card">
            <Photo photo_url={candidate.photo_url} />
            <div className="candidate-main-info">
                <h3>Miss {region}</h3>
                <p>{candidate.nom}</p>
            </div>
            <div className="candidate-details">
                <p>{candidate.taille}</p>
                <p>{candidate.age}</p>
            </div>
        </div>
    );
}
