document.addEventListener("DOMContentLoaded", () => {
  const fixButton = document.getElementById("fixButton");
  const closeError = document.getElementById("closeError");
  const log = document.getElementById("log");
  const userCSS = document.getElementById("userCSS");
  const outputText = document.getElementById("outputText");
  const loadingPage = document.getElementById("loadingPage");
  const hahaMessage = document.getElementById("hahaMessage");

  const memes = [
    "memes/meme1.jpg",
    "memes/meme2.jpg",
    "memes/meme3.jpg",
    "memes/meme4.jpg",
    "memes/meme5.png",
    "memes/meme6.jpg",
    "memes/meme7.jpg",
    "memes/meme8.jpg",
    "memes/meme9.jpg",
    "memes/meme10.jpg"
  ];

  function applyUserCSS() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = userCSS.value;
    document.head.appendChild(styleTag);
    logMessage("User CSS applied. Chaos starts now!");
  }

  // Random chaos generator
  function createChaos() {
    const randomBug = Math.floor(Math.random() * 5); // Random number between 0 and 4
    console.log(`Random Bug: ${randomBug}`); // Debugging: Log the randomBug value

    // Apply a random chaotic effect based on the randomBug value
    switch (randomBug) {
      case 0:
        const randomColor = getRandomColor();
        console.log("Applying Background Color:", randomColor); // Debugging
        document.body.style.backgroundColor = randomColor; // Set background color
        document.body.style.backgroundImage = "none"; // Remove background image
        logMessage("Background color changed!");
        break;
      case 1:
        randomShake(); // Buttons Shake
        logMessage("An element is shaking uncontrollably!");
        break;
      case 2:
        spawnError(); // Displays Error Message
        logMessage("An error appeared!");
        break;
      case 3:
        randomFont(); // Chanhges font
        logMessage("Fonts have gone wild!");
        break;
      case 4:
        spawnDivRain(); // Random divs falls on the screen
        logMessage("It's raining divs!");
        break;
      default:
        logMessage("Nothing happened... this time.");
        break;
    }
  }

  // Display a random meme 
  function displayRandomMeme() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]; /*https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array */
    const img = document.createElement("img");
    img.src = randomMeme;
    img.alt = "Random Meme";
    img.style.position = "absolute";
    img.style.top = `${Math.random() * window.innerHeight}px`;
    img.style.left = `${Math.random() * window.innerWidth}px`;
    img.style.maxWidth = "200px";
    img.style.height = "auto";
    img.style.borderRadius = "8px";
    img.style.cursor = "pointer";
    img.addEventListener("click", () => img.remove()); // Remove meme when clicked
    document.body.appendChild(img);
    logMessage("A random meme appeared!");
  }

  // Generates random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; /*https://stackoverflow.com/questions/75865675/paint2-elemnets-at-sa-e-random-color*/
    }
    return color;
  }

  // Shakes element
  function randomShake() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.style.animation = "shake 0.5s infinite"; // Shaking Animation
    });
  }

  // Spawns 404 error message
  function spawnError() {
    const error = document.createElement("div");
    error.id = "error";
    error.innerText = "404: Chaos Found!";
    document.body.appendChild(error);
  }

  // Changes font of the webpage
  function randomFont() {
    document.body.style.fontFamily = Math.random() > 0.5 ? "Comic Sans MS" : "Papyrus";
  }

  // Spawn divs
  function spawnDivRain() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = `${Math.random() * 100}%`;
    div.style.left = `${Math.random() * 100}%`;
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = getRandomColor();
    document.body.appendChild(div);
  }

  // Message in console section
  function logMessage(message) {
    const li = document.createElement("li");
    li.innerText = message;
    log.appendChild(li);
  }

  // POp-up message
  function showPopup(message) {
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.backgroundColor = "#ffcccc";
    popup.style.color = "#000";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // Remove the popup after 3 seconds
    setTimeout(() => {
      popup.remove();
    }, 3000);
  }

  // Event Listeners for "Fix Grammar button"
  fixButton.addEventListener("click", () => {
    if (userCSS.value.trim() === "") {
      showPopup("Please enter some text before fixing grammar!");
      return; // Exits the function if the text box is empty
    }

    // Display "fixed grammar" text in the output text box
    outputText.value = "Fixed Grammar: " + userCSS.value.toUpperCase(); // Example transformation
    applyUserCSS();
    createChaos();
    displayRandomMeme();
  });

    // Event listener for closing the fake error message
  closeError.addEventListener("click", () => {
    const error = document.getElementById("error");
    if (error) {
      error.remove(); // Removes error message
      loadingPage.style.display = "block"; // Shows loading screen
      
      setTimeout(() => {
        loadingPage.style.display = "none";
        hahaMessage.style.display = "block";
        setTimeout(() => {
          hahaMessage.style.display = "none";
        }, 3000);
      }, 3000);
    } else {
      logMessage("No errors to close!");
    }
  });
});