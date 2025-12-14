import logo from "../assets/qupay-logo.png";

export function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Qupay Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}