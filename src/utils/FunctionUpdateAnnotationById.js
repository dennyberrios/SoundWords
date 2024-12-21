export function updateAnnotationById(element, id, notePadDate, setNotepadDate) {
    const updatedNote = notePadDate.map(card =>
        card.id === id ? { ...card, annotation: element } : card
    );
    setNotepadDate(updatedNote);
}