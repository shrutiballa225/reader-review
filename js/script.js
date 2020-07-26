// HOME PAGE BOOKMARK SHORT NAVIGATION THING //

var content1 =  "Do you have trouble picking up a book? It is definitely difficult to become interested in reading after years, or even months. This page will help you get started and explore your interests. Click the icon to get started!";
var content2 = "What are the different genres to choose from? Some of my personal favorites are fantasy, historical fiction, dystopian fiction, and non-fiction adventure. There are many more, and they are discussed in Genres. Check it out through the icon!"
var content3 = "Ah, the page with my own insights. In Recommendations, I'll provide a Top 5 list of my all-time favorites. I'll also list some great books in a couple different genres. If you want recommendations from a human being who (probably) isn't a complete robot, click the icon!"

var content = [content1, content2, content3];

function change_background(id, id2, id3) {
  document.getElementById(id).style.color = "black";
  document.getElementById(id2).style.color = "black";
  document.getElementById(id3).style.color = "#2F75A5";
}

function click_get_involved() {
  document.getElementById("change").innerHTML = content1;
  change_background("genres", "recommend", "get_involved");
  document.getElementById("bookmark").style.display = "inline-block";
  document.getElementById("bookmark").style.float = "left";
  document.getElementById("reference").href = "getting-involved.html";
}
function click_genres() {
  document.getElementById("change").innerHTML = content2;
  change_background("get_involved", "recommend", "genres");
  document.getElementById("bookmark").style.display = "none";
  document.getElementById("reference").href = "genres.html";
}
function click_recommendations() {
  document.getElementById("change").innerHTML = content3;
  change_background("get_involved", "genres", "recommend");
  document.getElementById("bookmark").style.display = "inline-block";
  document.getElementById("bookmark").style.float = "right";
  document.getElementById("reference").href = "recommended.html";

}
function nav() {
  if (document.getElementById("myLinks").style.display == "none") {
    document.getElementById("myLinks").style.display = "block";
    document.getElementById("bars").className = "fas fa-times fa-4x";
  } else {
    document.getElementById("myLinks").style.display = "none";
    document.getElementById("bars").className = "fas fa-bars fa-4x";
  }
}

// TOP 5 CONTAINER //

var top5 = "At number 5 we have Internment by Samira Ahmed. Internment is about a 17 year old girl named Layla living in a futuristic United States. When the government begins to transport Muslim families to internment camps, Layla and her family are forced to live under constant scrutiny with hundreds of other families. Layla is absolutely furious, and she takes a stand, with newly made friends and modern technology, to fight against oppression.";

var top5_2 = "I classified this book as dystopian fiction. I really love this book because it makes several connections to previous oppressive camps in U.S history, and it paints the vivid picture of how history does, in fact, repeat itself. It has the whole package; societal messages, humor, despair, hope, love. It has everything a modern book needs, especially its eye-opening qualities.";

var top4 = "At number four we have The Fever Code by James Dashner. It is the last book in The Maze Runner series, which I classify as dystopian fiction. The Fever Code is a prequel book to the beginning of The Maze Runner, and it tells the tale of how Thomas and Teresa became wrapped up in the building of the maze. It tells how the events fell into place, how Thomas and Teresa became friends with Minho, Alby, and Newt only to have their memories stripped away in the maze.";

var top4_2 = "This book is much more unique than the others in this list, and that's one of the reasons why I love it so much. The fact that this book is meant to be read after the main story makes it so much more brutal. You know the fate of the characters, and it carries a weight that wouldn't be felt if the books had been read out of order. Not only that, but you reach the end of the book with just as many, if not more, questions than you began with. It still maintains the whole theme of creating confusion.";

var top3 = "At number three we have Wildcard by Marie Lu. This is the sequel to Warcross, and this is another dystopian fiction book (at this point you can tell what kind of books I like, but trust me, this is the last dystopian fiction book on this list). Wildcard tells the story of how Emika teams up with Zero to stop Hideo's plan, but with dangerous consquences. Emika ventures deep into Zero's digital memories, determined to find out the truth about him. She learns about trust and friendship in this beautifully built world where the entertainment industry is dominated by the 4D video game Warcross.";

var top3_2 = "I love this book because not only does it creatively incorporate coding into real world conflicts, but it also has extremely strong character development for Emika and Hideo. There are so many vivid, epic scenes in the book that I can picture in my mind as being iconic in a movie.";

var top2 = "At number two we have All the Light we Cannot See by Anthony Doerr. This is a historical fiction book, and it takes place throughout the course of World War II. It was one of the first historical fiction books that I've ever read, and it was my first true introduction to the details of WWII. The book has two alternating perspectives. One is from a girl named Marie-Laure, who is French, blind, and 15 years old during the main conflicts of the story. Another is from a boy named Werner, who is German, talented with radio tech, orphaned, and 18 years old during the main conflicts of the story. The book tells the coming-of-age story of both characters; how Marie-Laure's father had come in possession of a dangerous, desirable gem, how they had to flee to Saint Malo, all in the middle of a time when it was dangerous to be French. How Werner was drafted and immediately accepted to assist Hitler's army, and how his team was dispatched to Saint Malo.";

var top2_2 = "This book is utterly amazing; the fictional aspect with the gem has consequences that align with the greed of man, the brief relationship between Marie-Laure and Werner has the slightest pinch of romance, the end has a lingering feeling of missed opportunity and devastation, and there are so many more amazing details that would make this section excessively long.";

var top1 = "Finally, number one: Return of the King by J.R.R Tolkien. I felt that this book was the best out of the three in the Lord of the Rings because of the sheer epicness that comes with finishing a series with a grand finale, but it is very difficult to choose. I would've put the other books as #2 and #3, but I feel like that gives much less insight. Return of the King is a fantasy book, and it takes place in Tolkien's genius world of Middle-Earth. The book follows the story of Frodo Baggins and Sam Gamgee, who have finally reunited in Mordor and attempt to finish off the task of destroying the One Ring. The journey and the Ring weigh heavily on Frodo, and Sam's loyalty is repeatedly tested. The book also follows the story of the rest of the surviving Fellowship, with Aragorn leading the forces of good against Sauron's army.";

var top1_2 = "This book is just so iconic, so epic, and creates such a strong bond between characters. Personally, I like books that have an element of battle and fantasy to them, like <a href='https://www.amazon.com/-/es/John-Flanagan/dp/B00PHO4HZ8' target='_blank'>Ranger's Apprentice</a>. But Return of the King blows everything out of the water with its vivid details, genius worldbuilding, bittersweet ending, and changing my perspective and attitude towards reading forever.";

var all_top_5 = [top5, top4, top3, top2, top1];
var all_headers = ["5. Internment", "4. The Fever Code", "3. Wildcard", "2. All the Light we Cannot See", "1. Return of the King"];
var images5 = ["images/internment.jpg", "images/fever-code.jpg", "images/wildcard.jpg", "images/all-the-light.jpg", "images/return-del-king.jpg"];
var alt_title = ["Internment", "The Fever Code", "Wildcard", "All the Light we Cannot See", "The Return of the King"];
var top_5_p2 = [top5_2, top4_2, top3_2, top2_2, top1_2]

function changeBook() {
  if (document.getElementById("top-5").innerHTML == top1) {
    document.getElementById("book-changer").innerHTML = "Next Book!";
    document.getElementById("top-5").innerHTML = top5;
    document.getElementById("top-5-header").innerHTML = all_headers[0];
    document.getElementById("top-5-image").src = images5[0];
    document.getElementById("top-5-image").alt = alt_title[0];
    document.getElementById("top-5-image").title = alt_title[0];
    document.getElementById("top-5-p2").innerHTML = top5_2;
  } else {
    for (var i=0; i < 4; i++) {
      if (document.getElementById("top-5").innerHTML == all_top_5[i]) {
        document.getElementById("top-5").innerHTML = all_top_5[i+1];
        document.getElementById("top-5-header").innerHTML = all_headers[i+1];
        document.getElementById("top-5-image").src = images5[i+1];
        document.getElementById("top-5-image").alt = alt_title[i+1];
        document.getElementById("top-5-image").title = alt_title[i+1];
        document.getElementById("top-5-p2").innerHTML = top_5_p2[i+1];
        if (document.getElementById("top-5").innerHTML == top1) {
          document.getElementById("book-changer").innerHTML = "Back to Book #5";
        }
        break;
      }
    }
  }
}
// Trust me, I've tried saving all of these into variables, but it doesn't work. I've tried on multiple devices on different browsers, but it just doesn't seem to work. //

function open_details() {
if (screen.width > 1000) {
    if (document.getElementById("details").hasAttribute("open") == false){
        document.getElementById("details").setAttribute('open','true');
    }
  }
}
// Aninmation Code!!! //

//var images = ["file:///C:/Users/shrut/Coursera/images/frame1.jpg", "file:///C:/Users/shrut/Coursera/images/frame2.jpg", "file:///C:/Users/shrut/Coursera/images/frame3.jpg", "file:///C:/Users/shrut/Coursera/images/frame4.jpg", "file:///C:/Users/shrut/Coursera/images/frame5.jpg", "file:///C:/Users/shrut/Coursera/images/frame6.jpg", "file:///C:/Users/shrut/Coursera/images/frame7.jpg", "file:///C:/Users/shrut/Coursera/images/frame8.jpg", "file:///C:/Users/shrut/Coursera/images/frame9.jpg", "file:///C:/Users/shrut/Coursera/images/frame10.jpg", "file:///C:/Users/shrut/Coursera/images/frame11.jpg", "file:///C:/Users/shrut/Coursera/images/frame12.jpg"];

var images = ["images/frame1.jpg", "images/frame2.jpg", "images/frame3.jpg", "images/frame4.jpg", "images/frame5.jpg", "images/frame6.jpg", "images/frame7.jpg", "images/frame8.jpg", "images/frame9.jpg", "images/frame10.jpg", "images/frame11.jpg", "images/frame12.jpg"];

function animate() {
  setInterval(rotate, 250);
}
function rotate() {
  for (var i=0; i < images.length; i++) {
    if (document.getElementById("animation").getAttribute("src") == images[images.length - 1]) {
      document.getElementById("animation").setAttribute("src", images[0]);
      break;
    }
    else if (document.getElementById("animation").getAttribute("src") == images[i]) {
    document.getElementById("animation").setAttribute("src", images[i+1]);
    break;
    }
  }
}
