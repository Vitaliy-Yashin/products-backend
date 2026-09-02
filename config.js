export const config = {
  port: process.env.PORT || 5000,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'products_db',
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    authSource: process.env.DB_AUTH_SOURCE || 'admin',
    get url() {
      return `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.name}?authSource=${this.authSource}`
    }
  }
} 
