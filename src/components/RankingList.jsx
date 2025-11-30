import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import CandidateCardDrag from "./CandidateCardSelect/CandidateCardDrag";

export default function RankingList({ ranking, setRanking, candidatesData }) {

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newRanking = Array.from(ranking);
        const [moved] = newRanking.splice(result.source.index, 1);
        newRanking.splice(result.destination.index, 0, moved);
        setRanking(newRanking);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="ranking">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ listStyle: "none", padding: 0 }}
                    >
                        {ranking.map((region, index) => {
                            const candidate = candidatesData[region];
                            return (
                                <Draggable key={region} draggableId={region} index={index}>
                                    {(provided, snapshot) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                marginBottom: "8px",
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            <CandidateCardDrag candidate={candidate} region={region} />
                                        </li>
                                    )}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}
