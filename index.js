"use strict"

const getGithubDatesAndNoteList = () => {
		const noteList = [
			{
				"name": "Complejidad ciclomatica (CC)"
			},
			{
				"name": "Algoritmos"
			},
			{
				"name": "La refactorizacion"
			},
			{
				"name": "Desarrollo agil"
			},
			{
				"name": "Historias de usuario"
			},
			{
				"name" : "La ley de demeter"
			},
			{
				"name": "Arreglos"
			},
			{
				"name": "Metodo de trabajo Kanban"
			},
			{
				"name": "Tell dont ask"
			},
			{
				"name": "TDD y BDD diferencias"
			},
			{
				"name": "Desarrollo guiado por comportamiento (BDD)"
			},
			{
				"name": "Desarrollo guiado por pruevas (TDD)"
			},
			{
				"name": "Pruevas unitarias"
			},
			{
				"name": "Responsabilidad unica (SOLID)"
			},
			{
				"name": "Recomendaciones GRASP"
			},
			{
				"name": "Programacion basica"
			},
			{
				"name": "Programacion orientada a objetos (POO)"
			},
			{
				"name": "sql & nosql"
			},
			{
				"name": "Patrones de diseño creacionales"
			},
			{
				"name": "Principios SOLID"
			},
			{
				"name": "arquitectura por capas"
			}
		]
		
		return {
			"githubDates": {
				"userName": "CiroMirkin",
				"nameRepository": "Apuntes",
				"branchName": "main"
			},
			"noteList": noteList
		}
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
    const noteElement = document.createElement('Li')
    noteElement.classList.add('list__item')
    noteElement.innerHTML = `
        <!--<img src="./src/pictures/chevron-right.svg" class="list__item-icon">-->
        <a href="${noteUrl}" class="" target="_blank" title="El enlace te llavara a Github">${noteName}</a>
    `
	
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
