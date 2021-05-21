export const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    MONGO_URL
} = process.env;

export const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
console.log({MONGO_URL});
export const url = MONGO_URL ? MONGO_URL : `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}${MONGO_PORT ? ":" + MONGO_PORT + "/" : "/"}${MONGO_DB}?authSource=admin`;

