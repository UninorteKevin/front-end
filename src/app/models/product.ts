export class Product {
    constructor(
        public code: String,
        public name: String,
        public description: String,
        public price: Number,
        public stock: Number,
        public rate: Number,
        public created_at: Date
    ){}
}
