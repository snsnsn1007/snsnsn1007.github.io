// index.html → Disneyページ遷移（iOS対応）
function navigateToDisney() {
  const music = document.getElementById("preloadMusic")

  if (music) {
    // ユーザー操作内で一瞬再生 → 即停止（iOSの再生許可を取る）
    music.play().then(() => {
      music.pause()
      music.currentTime = 0

      // 再生許可を得た状態で遷移
      window.location.href = "disney.html"
    }).catch(() => {
      // 失敗しても遷移はする
      window.location.href = "disney.html"
    })
  } else {
    window.location.href = "disney.html"
  }
}


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