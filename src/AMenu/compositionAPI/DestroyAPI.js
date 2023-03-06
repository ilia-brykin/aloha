export default function DestroyAPI() {
  const removeBodyClasses = () => {
    document.body.classList.remove("a_menu__wrapper_close");
    document.body.classList.remove("a_menu__wrapper_open");
  };

  return {
    removeBodyClasses,
  };
}
