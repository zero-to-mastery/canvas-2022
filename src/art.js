
    let cards = [
  {
    "name": "Philippine Flag",
    "page_link": "./art/Insidiae/index.html",
    "art_icon": "./art/Insidiae/icon.png",
    "author_name": "Insidiae",
    "author_github_url": "https://github.com/Insidiae/"
  },
  {
    "name": "HacktoberSnake",
    "page_link": "./art/KWiczling_Snake/index.html",
    "art_icon": "./art/KWiczling_Snake/icon.png",
    "author_name": "K-Wiczling",
    "author_github_url": "https://github.com/K-Wiczling"
  },
  {
    "name": "HacktoberFox",
    "page_link": "./art/christinarepou/index.html",
    "art_icon": "./art/christinarepou/icon.png",
    "author_name": "ChristinaRepou",
    "author_github_url": "https://github.com/ChrRepou/"
  },
  {
    "name": "ZTM MASCOT",
    "page_link": "./art/haider-ali/index.html",
    "art_icon": "./art/haider-ali/icon.png",
    "author_name": "Haider Ali",
    "author_github_url": "https://github.com/Haider-Ali-Dev"
  },
  {
    "name": "HacktoberFox!",
    "page_link": "./art/mattcsmith/index.html",
    "art_icon": "./art/mattcsmith/icon.png",
    "author_name": "Matt",
    "author_github_url": "https://github.com/MattCSmith/"
  },
  {
    "name": "Hanging moon",
    "page_link": "./art/rachelktyjohnson/index.html",
    "art_icon": "./art/rachelktyjohnson/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
  },
  {
    "name": "Russian Flag",
    "page_link": "./art/yellowbeard/index.html",
    "art_icon": "./art/yellowbeard/icon.png",
    "author_name": "Mayank Goel",
    "author_github_url": "https://github.com/yellowberard/"
  }
]

    
  // +--------------------------------------------------------------------------------+
  // +                                                                                +
  // +                 YOU DO NOT NEED TO CHANGE ANYTHING IN THIS FILE!               +
  // +                                                                                +
  // +--------------------------------------------------------------------------------+
  
  // Creates cards from the array above
  // You don't need to modify this
  let contents = [];
  Shuffle(cards).forEach((c) => {
    contents.push([
      `<li class="card">` +
        `<a href='${c.page_link}' target="_blank">` +
        `<img class="art-image" src='${c.art_icon}' alt='${c.name}' onerror="this.src='https://cdn.discordapp.com/attachments/870676772683919390/891310666596630538/coming-soon-logo_okok.png';"/>` +
        `</a>` +
        `<div class="flex-content">` +
        `<a href='${c.page_link}' target="_blank"><h3 class="art-title">${c.name}</h3></a>` +
        `<p class='author'><a href="${c.author_github_url}" target="_blank"><i class="fab fa-github"></i> ${c.author_name}</a> </p>` +
        `</div>` +
        `</li>`
    ]);
  });
  
  document.getElementById('cards').innerHTML = contents.join('');
  
  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }  
  