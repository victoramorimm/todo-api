import express, { json } from 'express';
import router from './routes';
import '../../../index'

const app = express()

app.listen(3333, () => {
	console.log('Server running at 3333')
})

app.use(json())

app.use('/grpc-example', router)

export default app