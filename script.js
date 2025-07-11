function saveNote() {
  const input = document.getElementById("noteInput").value;
  if (input.trim() !== "") {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(input);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    showNotes();
  }
}

function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

window.onload = showNotes;
