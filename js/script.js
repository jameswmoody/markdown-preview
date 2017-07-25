var MarkdownWidget = function(textarea, preview) {
  // this.preview = document.getElementById(preview.substring(1));

  insertIntoPreview = function() {


    var input = document.getElementById(textarea.substring(1)).value
    var toPreview = document.getElementById(preview.substring(1))

    var boldToHTML = input.replace("**", "<b>");
    var italicsToHTMLOne = boldToHTML.replace("*", "<em>");
    var italicsToHTMLTwo = italicsToHTMLOne.replace("_", "<em>");
    var formattedInput = italicsToHTMLTwo

    toPreview.innerHTML = "";
    toPreview.innerHTML = toPreview.innerHTML + formattedInput;
    console.log(input);
  };

};


var widget = new MarkdownWidget("#source-id", "#preview-div")

// $(document).ready(function() {
//   var test = 1
//
//   var insertIntoPreview = function() {
//     test++
//     console.log(test);
//   };
// });
