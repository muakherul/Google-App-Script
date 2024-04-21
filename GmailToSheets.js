// Replace with the ID of your Google Sheet
var spreadsheetId = "REPLACE_WITH_GOOGLE_SHEETS_ID";

function getEmailsAndImportToSheet() {
  var sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  var lastRow = sheet.getLastRow();

  for (var row = 2; row <= lastRow; row++) { // Start from row 2 to skip header
    var searchQuery = sheet.getRange(row, 1).getValue();
    var threads = GmailApp.search(searchQuery, 0, 1); // Limit to one latest email

    var data = [];

    if (threads.length > 0) {
      var latestMessage = threads[0].getMessages()[0];
      var date = latestMessage.getDate();
      var time = new Date(date).toLocaleTimeString();
      var subject = latestMessage.getSubject();
      var body = latestMessage.getPlainBody();

      data.push([date, time, subject, body]);

      sheet.getRange(row, 2, 1, 4).setValues(data);
      Logger.log("Latest email imported for row " + row);
    } else {
      Logger.log("No emails found for row " + row);
    }
  }
}