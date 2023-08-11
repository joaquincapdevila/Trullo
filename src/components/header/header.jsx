import logoTrullo from "../../assets/logo-small.svg";

const Header = () => {
  return (
    <header class="flex shadow-md overflow-hidden bg-slate-600">
      <nav className="flex justify-between align-middle w-full mx-4 py-3 ">
        <div className="brand flex justify-between align-middle">
          <img className="pr-4" src={logoTrullo} alt="" />
          <h1 className="">Trullo</h1>
        </div>
        <div className="flex justify-between ">
          <div className="search flex justify-between align-middle mx-4 py-2 px-3 bg-teal-50 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="my-auto"
              viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>{" "}
            <input
              className="ml-8 border-none focus:border-none active:border-none "
              type="text"
            />
          </div>
          <div className="usuario flex align-middle">
            <button>
              <img src="" alt="" />
              <p>nombre de la persona</p>
            </button>
            <button>svg dorp</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
