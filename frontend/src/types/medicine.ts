export interface Medicine {
    id: number
    name: string
    price: number
    stock: number
}

export type CreateMedicineDto = Omit<Medicine, 'id'>
