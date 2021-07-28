export interface SearchParamsInterface {
   name?: string
   surname?: string
   patronymic?: string
   dateFrom?: string
   dateTo?: string
   gender?: string
   maritalStatus?: string
   nationality?: string
   email?: string
   currenJob?: string
   address?: {
      fullAddress?: string
      city?: string
      country?: string
      street?: string
      building?: string
      flat?: string
      zipCode?: string
   }
}
