// Navigate from index page to Disney page
function navigateToDisney() {
  window.location.href = "disney.html"
}

// Play music when Disney page loads
window.addEventListener("load", () => {
  const music = document.getElementById("birthdayMusic")
  if (music) {
    // Auto-play with user interaction
    music.play().catch((error) => {
      console.log("Auto-play prevented. Music will play on first interaction.")
    })
  }
})

// Enable music play on first user interaction
document.addEventListener(
  "click",
  function enableAudio() {
    const music = document.getElementById("birthdayMusic")
    if (music && music.paused) {
      music.play()
    }
  },
  { once: true },
)

// Open ticket dialog
function openTicketDialog() {
  const dialog = document.getElementById("ticketDialog")
  if (dialog) {
    dialog.classList.remove("hidden")
  }
}

// Close ticket dialog
function closeTicketDialog() {
  const dialog = document.getElementById("ticketDialog")
  if (dialog) {
    dialog.classList.add("hidden")
  }
}

// Close dialog when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("ticketDialog")
  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeTicketDialog()
      }
    })
  }
})

// Copy account ID to clipboard
function copyAccountId() {
  const input = document.getElementById("accountIdInput")
  if (input) {
    input.select()
    document.execCommand("copy")

    // Visual feedback
    const button = event.target
    const originalText = button.textContent
    button.textContent = "Copied!"
    setTimeout(() => {
      button.textContent = originalText
    }, 2000)
  }
}

// Open Disney app (or fallback to website)
function openDisneyApp() {
  // Try to open Disney app, fallback to website
  const accountId = document.getElementById("accountIdInput").value

  // Try opening Disney app via deep link (if on mobile)
  const disneyAppUrl = "disneyworld://"
  const disneyWebUrl = "https://apps.apple.com/jp/app/tokyo-disney-resort-app/id1313147771"

  // For mobile, try app first
  window.location.href = disneyAppUrl

  // Fallback to web after 1.5 seconds if app doesn't open
  setTimeout(() => {
    window.location.href = disneyWebUrl
  }, 1500)
}