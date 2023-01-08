// const text = "This is a heading in markup";

let text = "## This is a text with an [Example Link](https://www.example.com) in it";
let text_2;

//check for string wrapped in ()
// let regexUrl = /\(.*\)/g;

//Find markdown link that starts with [ and ends with )
let mdLink = text.match(/\[.*\)/g);
// console.log("markdown link", mdLink);

//Is there a link in the input text?
if (mdLink) {
  convertMdLinkToHtml(mdLink);
  text_2 = text.replace(mdLink, convertMdLinkToHtml(mdLink));
  // console.log("what is this", text_2);
}

function convertMdLinkToHtml(mdLink) {
  //find text in markdown that is within [ ]
  let htmlText = text.match(/[^([]+(?=\])/g);
  //find text in md that is within ()
  let href = text.match(/[^([]+(?=\))/g);
  
  const convertedHtmlLink = 
      mdLink[0].replace(mdLink, `<a href="` + href + `">` + htmlText + `</a>`)
  
  console.log(convertedHtmlLink);
  return convertedHtmlLink;
}

//RegEx: match # at the start of the string, count all the occurrences, then check for a whitespace
let hasHash = text_2.match(/(^#+)\s/g);

if (hasHash) {
  //if we have hash symbols, we need to count the number of hash symbols
  let headingCount = hasHash[0].split(" ")[0].length;
  convertHeadingToHtml(text_2, headingCount);
} else {
  console.log("There isn't a hashtag at the start");
  setPTag(text_2);
}

// let matchedTextWithWhiteSpace = testHeadingCount[0];
// console.log("heading count", matchedTextWithWhiteSpace)
// let matchedTextSplitOnWhiteSpace = matchedTextWithWhiteSpace.split(" ");
// console.log(matchedTextSplitOnWhiteSpace);
// let headingCount = matchedTextSplitOnWhiteSpace[0];
// console.log(headingCount.length);

// console.log("matched text with white space", matchedTextWithWhiteSpace)
// console.log("matched text split", matchedTextSplitOnWhiteSpace)

// Check if hashtag is at the start of the string using indexOf
// if (headingCount.length < 1) {
//   setPTag(text);
// } else if (headingCount.length > 6) {
//   convertHeadingToHtml(text, 6);
// } else {
//   convertHeadingToHtml(text, headingCount.length);
// }

function convertHeadingToHtml(text, headingCount) {
  if (headingCount > 6) {
    headingCount = 6;
  }
  //Remove the md element from the string
  messageArray = text.split(" ");
  //splice deletes and replaces: start, deleteCount, elements to add
  messageArray.splice(0, 1);
  // messageArray.push(heading);
  htmlSentence = messageArray.join(" ");
  htmlSentence = `<h` + headingCount + `>` + htmlSentence;
  htmlSentence = htmlSentence += `</h` + headingCount + `>`;
  console.log(htmlSentence);
}

function setPTag(message) {
  message = `<p>` + message + `</p>`;
  console.log(message);
}

//old work, ignore


//1. Surround link with <a href="">
//2. Put a tag at start of text in brackets
//3. End with </a> tag
//If there is text wrapped in parentheses, treat as link. Remove brackets

//indexOf returns the position of the substring
// if (link.indexOf(linkChecker) != 0) {
//   console.log("No links here");
// } else {
//   console.log("There's a link");
// }

// //switch matches a case to an expression, breaking out if a match
// switch (hCount) {
//   case 1:
//     convertMdHeadingToHtml(message, "1");
//     break;
//   case 2:
//     convertMdHeadingToHtml(message, "2");
//     break;
//   case 3:
//     convertMdHeadingToHtml(message, "3");
//     break;
//   case 4:
//     convertMdHeadingToHtml(message, "4");
//     break;
//   case 5:
//     convertMdHeadingToHtml(message, "5");
//     break;
//   case 6:
//     convertMdHeadingToHtml(message, "6");
//     break;
//   //default runs if there is no case match
//   default:
//     console.log("Unfortunately, there wasn't a match");
// }

//This method doesn't work in all cases, because if there is an h3 tag in the text, h1 and h2 will also be valid, since ### also includes ## and #
// function findH1(text) {
//   if (text.includes(h1)) {
//     console.log("This text contains an h tag");
//   } else {
//     console.log("No h tag here, buddy")
//   }
// }

// findH1(message);

//Another method used while learning https://regex-generator.olafneumann.org/
// function useRegex(input) {
//     let regex = /#\s/i; //start regex, recognize # and whitespace
//     return regex.test(input);
// }

// console.log(useRegex(message));

// // Split: Take pattern, divide string into substrings based on pattern, return array of substrings
// const messageArray = message.split(" ");
// splice replaces elements of an array with new elements
// messageArray.splice(0, 1, "<h1>"); //what does splice do
// messageArray.push("</h1>");
// console.log(messageArray);

// let newSentence = messageArray.join(" ")
// console.log(newSentence);
