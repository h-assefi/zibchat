import { Paper } from "@mui/material";
import * as React from "react";
import ZButton from "src/base/coreServices/components/button/ZButton";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import { DataGrid } from "@mui/x-data-grid";
import ZSwitch from "src/base/coreServices/components/switch/ZSwitch";
import NewApp from "./NewApp";
import { GRID_DEFAULT_LOCALE_TEXT } from "src/base/coreServices/components/grid/GridLocaleText";
import ZAvatar from "src/base/coreServices/components/avatar/ZAvatar";

const Apps = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [newApp, setNewApp] = React.useState(false);
  const [rows, setRows] = React.useState([
    {
      id: 1,
      name: "گوگل",
      domainName: "www.google.com",
      active: true,
      appColor: "#6a0380",
    },
    {
      id: 2,
      name: "زیب شاپ",
      domainName: "www.zib-shop.com",
      active: true,
      appColor: "#6a0380",
    },
    {
      id: 3,
      name: "یارپک",
      domainName: "www.yarpack.ir",
      active: false,
      appColor: "#3a2280",
    },
  ]);
  const columns = [
    { field: "name", headerName: "عنوان", width: 130 },
    { field: "domainName", headerName: "نام دامنهءء", width: 190 },
    {
      field: "active",
      headerName: "فعال",
      width: 100,
      type: "boolean",
      renderCell: (params) => (
        <strong>
          <ZSwitch
            checked={params.row.active}
            onChange={() => changeAppStatus(params.row.id)}
          ></ZSwitch>
        </strong>
      ),
    },

    {
      field: "appColor",
      headerName: "رنگ برنامهءء",
      width: 100,
      renderCell: (params) => (
        <ZAvatar width={30} height={30} backgroundColor={params.row.appColor}>
          {""}
        </ZAvatar>
      ),
    },
    {
      field: "tools",
      headerName: "گزینهءء ها",
      width: 100,
      renderCell: (params) => (
        <ZIconButton
          onChange={() => {
            console.log(params);
          }}
        >
          <ZIcon icon={ZIcons.moreVerticalIcon} />
        </ZIconButton>
      ),
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeAppStatus = (id) => {
    debugger;
    let newRows = [...rows];
    let currentStatus = newRows[newRows.findIndex((x) => x.id === id)].active;
    newRows[newRows.findIndex((x) => x.id === id)].active = !currentStatus;
    setRows();
    setRows([...newRows]);
  };

  const newAppOnClose = (data) => {
    setNewApp(false);
    if (data && data.name) {
      setRows([
        ...rows,
        {
          id: 4,
          domainName: data.domainName,
          name: data.name,
          active: true,
          appColor: data.appColor,
        },
      ]);
    }
  };

  return (
    <div>
      <Paper>
        <ZButton onClick={() => setNewApp(true)}>
          اضافهءء کردن سایت جدید
          <ZIcon icon={ZIcons.add}></ZIcon>
        </ZButton>
      </Paper>
      <ZSpacer />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          localeText={GRID_DEFAULT_LOCALE_TEXT}
        />
      </div>

      {newApp && <NewApp onClose={newAppOnClose} />}
    </div>
  );
};

export default Apps;
