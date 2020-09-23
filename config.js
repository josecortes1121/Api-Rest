module.exports = {
  port: process.env.PORT || 3001,
  //// db: process.env.MONGODB_URI || 'mongodb://localhost:27017/shop',
  db: process.env.MONGODB_URI || 'mongodb+srv://joseCortes:jose123@cluster0.hrafr.mongodb.net/programacion3?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}
