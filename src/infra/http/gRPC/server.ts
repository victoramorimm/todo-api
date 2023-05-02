import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { makeListTasksController } from '../../../modules/tasks/controller/list/factory/ListTasksControllerFactory';
import path from 'path';
import '../../../index'
import { makeCreateTaskController } from '../../../modules/tasks/controller/create/factory/CreateTasksControllerFactory';

const todoProtoPath = path.resolve(__dirname, '..', '..', '..', '..', 'proto', 'todo.proto')

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const todoPackageDefinition = protoLoader.loadSync(todoProtoPath, options);

const todoProto: any = grpc.loadPackageDefinition(
  todoPackageDefinition
);

const server = new grpc.Server()

server.addService(todoProto.TodoService.service, {
	list: async (request: any, callback: Function) => {
		const controller = makeListTasksController()
		
		const result = await controller.handle(request.request)
	
		callback(null, result)
	},

	create: async (request: any, callback: Function) => {
		const controller = makeCreateTaskController()

		const result = await controller.handle(request)
	
		callback(null, result)
	}
})

server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), function callback(error, port) {
	console.log('Running at: localhost:50051')
	server.start()
})