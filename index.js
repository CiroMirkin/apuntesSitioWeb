"use strict"
import Notes from "./src/notes.js"

const getGithubDatesAndNoteList = () => {
	const notes = new Notes()
	return notes.getNotes() 
}

const createNoteDatesList = () => {
    const { githubDates, noteList } = getGithubDatesAndNoteList()
    const githubUrl = `https://github.com/${githubDates.userName}/${githubDates.nameRepository}/blob/${githubDates.branchName}/apuntes/`

    return noteList.map(noteDates => ({
        noteName: noteDates.name,
        noteUrl: `${githubUrl}${noteDates.name}.md`.split(' ').join('%20')
    }))
}

const createNoteHTML = ({ noteName, noteUrl }) => {
    const noteElement = document.createElement('A')
    noteElement.classList.add('list-group-item', 'list-group-item-action')
	noteElement.setAttribute('href', noteUrl)
	noteElement.setAttribute('target', "_blank")
	noteElement.setAttribute('title', "El enlace te llavara a Github")
    noteElement.innerText = noteName

    return noteElement
}

const renderNoteList =  () => {
    const noteDatesList =  createNoteDatesList()

    const noteListFragment = document.createDocumentFragment()
    noteDatesList.forEach(noteDates => {
        const noteHTML = createNoteHTML(noteDates)
        noteListFragment.appendChild(noteHTML)
    })

    document.getElementById('note-list').appendChild(noteListFragment)
    document.getElementById('noteCount').innerText = noteDatesList.length
}

renderNoteList()
