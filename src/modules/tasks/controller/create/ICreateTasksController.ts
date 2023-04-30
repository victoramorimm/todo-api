interface ICreateTaskController {
	handle(request: void): Promise<void>
}

export { ICreateTaskController }