import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Tiago'},
    { id: 2, name: 'Karen'},
    { id: 3, name: 'Adrian'},
  ]

  return response.json(users)
}