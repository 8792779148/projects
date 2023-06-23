const btnEl = document.querySelector(".btn");
const appEl = document.querySelector("#app");
getNote().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});
function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty note";
  element.value = content;
  element.addEventListener("dblclick", () => {
    const warning = confirm("Do You want to delete this note");
    if (warning) {
      deletenote(id, element);
    }
  });

  element.addEventListener("input", () => {
    update(id, element.value);
  });
  return element;
}
function deletenote(id, element) {
  const notes = getNote().filter((note) => note.id != id);
  saveNote(notes);
  appEl.removeChild(element);
}
function update(id, content) {
  const notes = getNote();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}
function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}
function getNote() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}
function addnote() {
  const notes = getNote();
  const noteObje = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObje.id, noteObje.content);
  appEl.insertBefore(noteEl, btnEl);
  notes.push(noteObje);
  saveNote(notes);
}

btnEl.addEventListener("click", addnote);
