import { useMemo } from 'react';
import { useTable } from 'react-table';
import { getColumnsFromData } from '../../services/table';
import './ResultTable.css';

function ResultTable({ data }) {
  const columns = useMemo(() => getColumnsFromData(data), [data]);
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((group, groupIndex) => {
          const groupProps = group.getHeaderGroupProps();
          return (
            <tr key={groupIndex} {...groupProps}>
              {group.headers.map((column, colIndex) => {
                const colProps = column.getHeaderProps();
                return (
                  <th key={colIndex} {...colProps}>
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          const rowProps = row.getRowProps();
          return (
            <tr key={rowIndex} {...rowProps}>
              {row.cells.map((cell, cellIndex) => {
                const cellProps = cell.getCellProps();
                return (
                  <td key={cellIndex} {...cellProps}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
