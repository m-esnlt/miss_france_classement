import SelectedList from "../components/SelectedList";

export default function Finalistes() {
    return(
        <div>
            {/* <RankingList /> //la liste où on peut glisser pour ajuster nos préférées*/}
            <SelectedList consigne="Range tes candidates selon leur rang final !"/>
        </div>
    )
}