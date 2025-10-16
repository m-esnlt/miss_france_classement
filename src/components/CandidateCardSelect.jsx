function Photo({photo_url}) {
    return (
        <img src={photo_url} alt="Photo de la candidate" />
    )
}



export default function CandidateCardSelected({ candidate, region }) {
    return (
        <div>
            <Photo photo_url={candidate.photo_url} />
            <div>
                <h3>{region}</h3>
                <p>{candidate.nom}</p>
            </div>
            <div>
                <p>{candidate.taille}</p>
                <p>{candidate.age}</p>
            </div>
            {/* <LikeButton /> */}
        </div>
    );
}