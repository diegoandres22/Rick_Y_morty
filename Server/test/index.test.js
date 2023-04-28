const app = require('../src/app')
const session = require('supertest')
const request = request(app);

const obj = {
    id: 12,
    name: "die",
    species: "especial",
    image: "image.jpg",
    gender: "male",
    status: "matatan"
}
describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("responde con status: 200", async () => {
            await request.get('/rickandmorty/character/1').expect(200)
        });

        it("responde un objeto con las propiedades : 'id', 'name', 'species', 'gender', 'status' e 'image' ", async () => {
            const response = await request.get("/rickandmorty/character/1");
            for (const prop in obj) {
                expect(response.body).toHaveProperty(prop)
            }
        })

        it("si hay un error responde status 500", async () => {
            const response = await request.get("/rickandmorty/character/9999p");
            expect(response.statusCode).toBe(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("responde con un obj con la propiedad access en true si la informacion del usuario es valida", async () => {
            const response = await request.get("/rickandmorty/login?email=diego@andres.com&password=diego123")
            const access = { access: true }
            expect(response.body).toEqual(access)
        })

        it("responde con un obj con la propiedad access en true si la informacion del usuario no es valida", async () => {
            const response = await request.get("/rickandmorty/login?email=die@as.co&password=di123ego")
            const access = { access: false }
            expect(response.body).toEqual(access)
        })
    })
    describe("POST /rickandmorty/fav", async () => {
        it("debe guardar el personaje en favoritos", async () => {

            const response = await request.post("rickandmorty/fav").send(obj);
            expect(response.body).toContainEqual(obj)
        })

        it("debe agregar sin eliminar existentes", async () => {
            obj.id = 1923;
            obj.name = "zatanico";
            const response = await request.post("rickandmorty/fav").send(obj);
            expect(response.body.length).toBe(2)
        })
    })
    describe("DELETE /rickandmorty/fav", async ()=>{
        it("si el id enviado no existe, retorna el mismo arr sin alterarse", async ()=>{
            const response = await request.delete("rickandmorty/fav/2");
            expect(response.body.length).toBe(2)
        })

        it("si el id enviado existe, deberia eliminarlo", async()=>{
            const response = await request.delete("rickandmorty/fav/1923");
            expect(response.body.length).toBe(1)
        })
    })
})
