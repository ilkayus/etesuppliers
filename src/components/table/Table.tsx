import { useEffect, useState } from "react";
import { tableHeaders, tableKeys, ago } from "./table.helper";
import useAuth from "hooks/useAuth";
import "./style/Table.css";

export interface Props {
  fetchFn: any;
  type: string;
}

const Table = ({ fetchFn, type }: Props) => {
  const { auth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any[]>([]);
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
  const tableData = data.map((x) =>
    dataKeys.map((el: any) => (
      <td>
        {el === "photo" ? (
          <img src={x[el]} alt="logo" className="table-image" />
        ) : el === "createdAt" ? (
          `${ago(x[el])} ago`
        ) : (
          x[el]
        )}
      </td>
    ))
  );

  const tableRowClickEventHandler = (e: any) => {
    console.log(e, e.target.dataset.rowid);
  };

  const ctable = (
    <table>
      <tr key={1}>
        {tableHeaders[type === "product" ? "product" : "company"].map((el) => (
          <th>{el}</th>
        ))}
      </tr>
      {tableData.map((el, idx) => (
        <tr
          key={idx + 1}
          data-rowid={data[idx]._id}
          onClick={(e) => tableRowClickEventHandler(e)}
        >
          {el}
        </tr>
      ))}
    </table>
  );
  return <div className="table-table">{ctable}</div>;
};

export default Table;
