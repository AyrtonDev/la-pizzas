import logo from '/public/logoHorizontal.svg';

export default function Header() {
  return (
    <div className="flex h-[10vh] w-screen bg-[#fdb94c] pl-5">
      <img src={logo} alt="logo" className="w-25" />
    </div>
  );
}
