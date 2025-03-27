export const queries = [
    {
      id: 0,
      title: 'Top 10 Customers',
      query: 'SELECT * FROM customers LIMIT 10;'
    },
    {
      id: 1,
      title: 'customers whose country field is "Germany".',
      query: "SELECT * FROM customers WHERE country = 'Germany';"
    },
    {
      id: 2,
      title: 'customers who have a non-empty fax value.',
      query: 'SELECT * FROM customers WHERE fax IS NOT NULL;'
    }
  ];
  