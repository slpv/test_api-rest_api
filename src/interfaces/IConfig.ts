export default interface IConfig {
    PORT: number,
    MONGO: {
        USER: string,
        "PASSWORD": string,
        "URI": string
    }
}
