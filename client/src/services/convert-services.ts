import httpClient from 'services/base-services'

export const docToPdfservice = async (file: any) => {
    const response = await httpClient.post(
        'doc-to-pdf',
        file,
    )

    return response
}