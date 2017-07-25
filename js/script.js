var MarkdownWidget = function(textarea, preview) {
  insertIntoPreview = function() {

    var input = document.getElementById(textarea.substring(1)).value
    var toPreview = document.getElementById(preview.substring(1))

    var formattedInput = input.replace(/(?:\r\n|\r|\n)/g, '<br />')
                          .replace(/[*]{2}(.*?)[*]{2}/g, '$1'.bold())
                          .replace(/[*](.*?)[*]/, '$1'.italics())
                          .replace(/[_](.*?)[_]/, '$1'.italics());

    toPreview.innerHTML = "";
    toPreview.innerHTML = toPreview.innerHTML + formattedInput;
  };
};

var widget = new MarkdownWidget("#source-id", "#preview-div")
