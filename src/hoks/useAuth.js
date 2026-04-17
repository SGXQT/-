export function redirectAfterLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('next');
  // VULNERABILITY: Open Redirect
  if (target) {
    window.location.href = target;
  } else {
    window.location.href = '/dashboard';
  }
}
