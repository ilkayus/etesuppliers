import { useEffect, useState } from "react";
import { tableHeaders, tableKeys, ago } from "./table.helper";
import useAuth from "hooks/useAuth";
import TableSortArrows from "./TableSortArrows";
import "./style/Table.css";

export interface Props {
  selected: any;
  setSelected: any;
  fetchFn: any;
  type: string;
}

const Table = ({ selected, setSelected, fetchFn, type }: Props) => {
  const { auth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any[]>([]);
  const [jsxTable, setJsxTable] = useState<any>();
  const [filter, setFilter] = useState(
    Array(tableKeys[type === "product" ? "product" : "company"].length).fill(0)
  );
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchFn(auth);
      console.log(res);
      return res;
    };
    getProducts().then((res) => setData(res));
  }, []);

  const dataKeys = tableKeys[type === "product" ? "product" : "company"];
  const tableData = data.map((x, ind) =>
    dataKeys.map((el: any, idx: number) => (
      <td key={idx + 1 + ind * dataKeys.length}>
        {el === "photo" ? (
          <img src={x[el]} alt="logo" className="table-image" />
        ) : el === "createdAt" ? (
          `${ago(x[el])} ago`
        ) : el === "website" ? (
          <a href={x[el]} target="_blank">
            {x[el]}
          </a>
        ) : el === "company" ? (
          x[el].name
        ) : (
          x[el]
        )}
      </td>
    ))
  );

  const tableRowClickEventHandler = (e: any) => {
    if (!e.target.parentElement.dataset.rowid) return;
    setSelected(
      ...data.filter((el) => el._id === e.target.parentElement.dataset.rowid)
    );
  };
  const tableColumnClickEventHandler = (e: any) => {
    if (!e.target.dataset.columnname) return;
    const sortBy = e.target.dataset.columnname;
    const idx = dataKeys.indexOf(sortBy);
    //console.log(sortBy, data[0][sortBy]);
    setFilter((prev) =>
      prev.map((el, index) => (index === idx ? (el === 2 ? 1 : 2) : 0))
    );
    setData((prev) =>
      prev.sort((a, b) => {
        return a[sortBy] > b[sortBy]
          ? filter[idx] === 2
            ? -1
            : 1
          : filter[idx] === 2
          ? 1
          : -1;
      })
    );
    // [
    //   ...prev.slice(0, idx),
    //   !prev[idx],
    //   ...prev.slice(idx + 1),
    // ]);
  };
  useEffect(() => {
    //console.log(filter);
    setJsxTable(
      <table>
        <thead onClick={(e) => tableColumnClickEventHandler(e)}>
          <tr key={1}>
            {tableHeaders[type === "product" ? "product" : "company"].map(
              (el, idx) => (
                <th key={1000 + idx} data-columnname={dataKeys[idx]}>
                  <TableSortArrows arrow={filter[idx]} />
                  {el}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody onClick={(e) => tableRowClickEventHandler(e)}>
          {tableData.map((el, idx) => (
            <tr
              key={idx + 1}
              className={
                data[idx]._id === selected._id
                  ? "selected-row"
                  : "not-selected-row"
              }
              data-rowid={data[idx]._id}
            >
              {el}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }, [data, filter, selected]);

  return <div className="table-table">{jsxTable}</div>;
};

export default Table;
