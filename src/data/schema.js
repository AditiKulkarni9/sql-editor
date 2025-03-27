// src/data/mockSchema.js
export const schema = [
    {
      dbName: "musicDB",
      tables: [
        {
          tableName: "artists",
          columns: ["id", "name", "genre"]
        },
        {
          tableName: "albums",
          columns: ["id", "title", "artist_id", "release_year"]
        }
      ]
    },
    {
      dbName: "salesDB",
      tables: [
        {
          tableName: "customers",
          columns: ["id", "name", "email"]
        },
        {
          tableName: "orders",
          columns: ["order_id", "customer_id", "amount"]
        }
      ]
    }
  ];
  