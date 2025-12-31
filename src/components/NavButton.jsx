function NavButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 hover:bg-white/20 backdrop-blur-md transition"
    >
      {icon}
      {label}
    </button>
  );
}
export default NavButton;