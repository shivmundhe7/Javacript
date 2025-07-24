

    const terminal = document.getElementById("terminal");

    const messages = [
      "Initializing Hacking",
      "Reading your Files",
      "Password files Detected",
      "Sending all passwords and personal files to server",
      "Cleaning up"
    ];
    // random numbers
    const wait = (seconds) => new 
    Promise(resolve => setTimeout(resolve, seconds * 1000));

    async function startHacking() {
      for (let msg of messages) {
        const line = document.createElement("div");
        line.classList.add("message");
        line.innerHTML = `${msg}<span class="blinking">...</span>`;
        terminal.appendChild(line);
        await wait(Math.floor(Math.random() * 7) + 1); // 1 to 7 seconds delay
      }
    }

    // Start the simulation
    startHacking();
