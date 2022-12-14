export default class Notes {
    constructor() {
        this.noteList = [
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
		
		this.notesInfotmation = {
			"githubDates": {
				"userName": "CiroMirkin",
				"nameRepository": "Apuntes",
				"branchName": "main"
			},
            "noteList": this.noteList
		}
    }
    getNotes(){
        return {...this.notesInfotmation}
    }
}