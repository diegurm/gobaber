module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root$1234',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
