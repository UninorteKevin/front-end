export class Product {
    constructor(
        public codigo: String,
        public nombre: String,
        public descripcion: String,
        public costo:   Number,
        public precio_venta: Number,
        public stock    : Number,
        public ubicacion: String,
        public estado: String,
        public imagenes: String,
        public calificacion: Number
    ){}
}
