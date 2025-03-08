function preventSpaces(event) {
    if (event.key === ' ') {
      event.preventDefault(); // Prevent the default action (adding a space)
    }
  }