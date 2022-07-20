export const convertDocToPdf = async (req, res) => {
    try {
        const documentData = req.body
        res.status(200).send(documentData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}