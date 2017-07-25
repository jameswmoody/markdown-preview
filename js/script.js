var MarkdownWidget = function(textarea, preview) {
  insertIntoPreview = function() {

    var input = document.getElementById(textarea.substring(1)).value
    var toPreview = document.getElementById(preview.substring(1))

    var formattedInput = input.replace(/(?:\r\n|\r|\n)/g, '<br />')
                          .replace("**", "<b>")
                          .replace("*", "<em>")
                          .replace("_", "<em>");

    toPreview.innerHTML = "";
    toPreview.innerHTML = toPreview.innerHTML + formattedInput;
  };
};

var widget = new MarkdownWidget("#source-id", "#preview-div")
