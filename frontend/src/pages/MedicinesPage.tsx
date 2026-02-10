import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchMedicines, createMedicine } from '../api/medicines'
import { MedicineForm } from '../components/MedicineForm'

export function MedicinesPage() {
    const queryClient = useQueryClient()

    const { data, isLoading, error } = useQuery({
        queryKey: ['medicines'],
        queryFn: fetchMedicines,
    })

    const mutation = useMutation({
        mutationFn: createMedicine,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['medicines'] })
        },
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading medicines</p>

    return (
        <div>
            <MedicineForm onSubmit={mutation.mutate} />

            <ul>
                {data?.map((m) => (
                    <li key={m.id}>
                        {m.name} – {m.price} € – Stock: {m.stock}
                    </li>
                ))}
            </ul>
        </div>
    )
}
