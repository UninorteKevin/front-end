export class User {
    constructor(
        public id: string,
        public names: string,
        public surnames: string,
        public fecha_nacimiento: Date,
        public email: string,
        public password: string,
        public estado: string,
        public role: string,
        public createdAt: Date
    ){ }
}
