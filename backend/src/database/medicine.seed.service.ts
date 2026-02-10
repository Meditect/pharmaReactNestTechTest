import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicine } from '../medicines/medicine.entity';

@Injectable()
export class MedicineSeedService implements OnModuleInit {
    constructor(
        @InjectRepository(Medicine)
        private readonly repo: Repository<Medicine>
    ) {}

    async onModuleInit() {
        const count = await this.repo.count();
        if (count > 0) return;

        const medicines: Partial<Medicine>[] = [
            { name: 'Paracetamol', price: 1.5, stock: 120 },
            { name: 'Ibuprofen', price: 2.1, stock: 95 },
            { name: 'Amoxicilline', price: 3.2, stock: 80 },
            { name: 'Aspirine', price: 1.8, stock: 110 },
            { name: 'Vitamine C', price: 0.9, stock: 200 },

            ...Array.from({ length: 45 }).map((_, i) => ({
                name: `GenericMed-${i + 1}`,
                price: Number((Math.random() * 8 + 0.5).toFixed(2)),
                stock: Math.floor(Math.random() * 200)
            }))
        ];

        await this.repo.save(medicines);
        console.log('✅ Medicines database seeded');
    }
}
