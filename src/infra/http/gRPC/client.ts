import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { TaskModel } from '../../../modules/model/TaskModel';
import path from 'path';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const protoPath = path.resolve(__dirname, '..', '..', '..', '..', 'proto', 'todo.proto')

const packageDefinition = protoLoader.loadSync(protoPath, options);

const TodoService: any = grpc.loadPackageDefinition(packageDefinition).TodoService;

const client = new TodoService('localhost:50051', grpc.credentials.createInsecure())

client.list({}, (error: any, todos: TaskModel[]) => {
	if (error) throw error;
})