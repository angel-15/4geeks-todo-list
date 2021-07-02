import React from "react";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				"Hacer la cama",
				"Hacer el desayuno",
				"Alimentar a Lola",
				"Limpiar la caja de arena"
			],
			newTask: ""
		};

		this.handleChangeTask = this.handleChangeTask.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
	}

	handleChangeTask(event) {
		/* eslint-disable no-console */
		//console.log(event);
		this.setState({
			...this.state.tasks,
			newTask: event.target.value
		});
	}

	handleAddTask(event) {
		if (event.key == "Enter" && this.state.newTask.length > 4) {
			console.log(...this.state.tasks);
			this.setState({
				tasks: [...this.state.tasks, this.state.newTask],
				newTask: ""
			});
		}
	}

	handleDeleteTask = indexTask => {
		let filteredTasks = this.state.tasks.filter(
			(currentTask, indexCurrentTask) => indexCurrentTask !== indexTask
		);
		console.log(filteredTasks, indexTask, this.state);
		this.setState({
			...this.state,
			tasks: filteredTasks
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="text-center mt-5">
				<h1>las tareas de 4geeks</h1>

				<input
					Value={this.state.newTask}
					placeholder="Escribe tu tarea acá"
					onChange={event => this.handleChangeTask(event)}
					onKeyPress={event => this.handleAddTask(event)}
				/>
				<ul>
					{this.state.tasks.map((task, index) => {
						console.log(task, index);
						return (
							<li key={index}>
								{task}
								<button
									type="button"
									onClick={() =>
										this.handleDeleteTask(index)
									}>
									X
								</button>
							</li>
						);
					})}
				</ul>
				<footer>Tareas por hacer: {this.state.tasks.length}</footer>
			</div>
		);
	}
}
