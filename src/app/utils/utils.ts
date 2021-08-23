import moment from 'moment'

export const formatDate = (date: any, format: string) => {
    return moment(new Date(date)).format(format)
}

export const toBase64 = async (file: File) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error);
    })
}
