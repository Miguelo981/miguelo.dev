export async function createContactForm(data: unknown) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                error: false,
                i18n: 'response.success'
            })
        }, 3000)
    })
}