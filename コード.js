function writeDataToSheet() {
  // スプレッドシートのIDを指定します
  var spreadsheetId = '1QTUtVR7BlEx-9sxfT4Kp2jaWlNcvk8W4v9wWXXzYLKY';
  // シート名を指定します
  var sheetName = 'シート1';

  // スプレッドシートとシートを取得します
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  // 書き込みたいデータを配列として用意します
  var data = [
    ['名前', '年齢', '住所'],
    ['山田太郎', 30, '東京都'],
    ['田中花子', 25, '大阪府'],
    ['佐藤次郎', 28, '北海道']
  ];

  // シートにデータを書き込みます
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}
