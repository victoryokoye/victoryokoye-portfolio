
export default function Navbar() {
  return (
    <>
      <nav className="bg-white p-4 flex">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-500 rounded-full p-3 size-10 text-white flex items-center justify-center">V</div>
          <h3>Victory Okoye</h3>
        </div>
        <div className="ml-auto flex gap-2">
          <span className="bg-blue-500">bulb</span>
          <span className="bg-blue-500">menu</span>
        </div>
      </nav>
    </>
  );
};
