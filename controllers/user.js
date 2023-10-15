import  dbConnect  from "../dbConnect.js"

export const getUser = async (req, res) => {

    const googleSheets = await dbConnect();

   const spreadsheetId = "1-Fa_-xAxwDg25xD-oG9U74gk2lxMwmCb4Ektj34Kq3I";

  // Read rows from spreadsheet
  const getUsuarios = await googleSheets.spreadsheets.values.get({
   spreadsheetId,
   range: "db!A1:C",
  });

  const usuarios = getUsuarios.data.values;
    res.status(200).json({data: usuarios})
}