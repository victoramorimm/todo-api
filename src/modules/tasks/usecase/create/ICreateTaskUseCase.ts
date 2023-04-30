interface ICreateTaskUseCase {
	execute(request: CreateTaskRequestDTO): Promise<void>
}

type CreateTaskRequestDTO = {
	done: boolean;
	task: string;
}

export { ICreateTaskUseCase, CreateTaskRequestDTO }