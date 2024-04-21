function getGeminiiii(){

  var apiKey = "REPLACE_WITH_GEMINI_APIKEY";
  var apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
  var url = apiUrl +"?key="+apiKey;

  var headers = {
    "Content-Type": "application/json"

  };

  var requestBody = {
    "contents": [
        {
            "parts": [
                {
                    "text": "list top 5 electic car name and brands "
                }
            ]
        }
    ]
};
  var options = {

    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(requestBody)
  };

  var response = UrlFetchApp.fetch(url,options);
  var data = JSON.parse(response.getContentText());
  var output = data.candidates[0].content.parts[0].text
  Logger.log(output);

}