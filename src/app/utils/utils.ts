import moment from 'moment'

export const formatDate = (date: string, format: string) => {
    return moment(new Date(date)).format(format)
}

export const toBase64 = async (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => resolve(fileReader.result)
        fileReader.onerror = error => reject(error)
    })

}

