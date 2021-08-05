import moment from 'moment'

export const formatDate = (date: string, format: string) => {
    return moment(new Date(date)).format(format)
}

export const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error);
    })
}
