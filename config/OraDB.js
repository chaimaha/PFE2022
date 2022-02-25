const oracledb = require("oracledb");
let connectoracle =async ()=>{}
oracledb.getConnection(
  {
    //   erp/erpodoo3107@172.20.95.123:1521/dbprod
    user: "erp",
    password: "erpodoo3107",
    connectString: "172.20.95.123//dbprod",
  },
  function (err, connection) {
    if (err) {
      console.error(err);
      return;
    }
  }
);
 