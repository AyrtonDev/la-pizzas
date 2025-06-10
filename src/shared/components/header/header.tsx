import logo from '/public/logoHorizontal.svg';

export default function Header() {
  return (
    <div className="w-screen h-[10vh] flex pl-5 bg-[#fdb94c] ">
      <img src={logo} alt="logo" className="w-25" />
    </div>
  );
}
