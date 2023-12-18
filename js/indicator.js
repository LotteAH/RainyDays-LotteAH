const loadingIndicator = document.getElementById("loading-indicator");

export function showLoadingIndicator() {
  loadingIndicator.style.display = "block";
}

export function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}