import { Request, Response } from 'express'

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest: any = {
      body: req.body
    }

    const httpResponse = await controller.handle(httpRequest)

		res.status(200).json(httpResponse)

    // if (httpResponse.statusCode >= 200 || httpResponse.statusCode <= 299) {
    //   res.status(httpResponse.statusCode).json(httpResponse.body)
    // } else {
		// 	console.log(httpResponse)

    //   res.status(httpResponse.statusCode).json({
    //     error: httpResponse.body.message
    //   })
    // }
  }
}
