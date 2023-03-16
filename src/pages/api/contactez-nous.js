import prisma from "../lib/prisma"

export default async function handler(req, res) {

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', req.body)

  // Get data submitted in request's body.
  const { nom, email, objectif, message } = req.body


  if (req.method === 'POST') {

    // Guard clause checks for nom, email, objectif, and message,
    // and returns early if they are not found
    if (!nom || !email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Nom ou E-mail introuvable' })
    }

    // Processes a POST request
    try {
      // Creating a new contact record
      await prisma.contact.create({
        data: {
          nom,
          email,
          objectif,
          message
        },
      })

      return res.status(200).json({ message: "Votre message a été bien envoyé!" })

    } catch (error) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: error.message })
    }

  } else {

    // Handles any other HTTP methods (GET, PUT, DELETE)

    // Sends a HTTP success code
    return res.status(200).json({ nom, email, objectif, message })
  }

}