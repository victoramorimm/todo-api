interface ICreateTaskUseCase {
	execute(request: CreateTaskRequestDTO): Promise<void>
}

type CreateTaskRequestDTO = {
	done: boolean;
	task: 'Tarefa 01'
}

export { ICreateTaskUseCase, CreateTaskRequestDTO }