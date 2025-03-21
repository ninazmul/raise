import { lusitana } from "@/ui/fonts";

const RaiseLogo = () => {
  return (
    <div className={`${lusitana.className} space-y-2 leading-none`}>
      <h1 className="text-5xl font-bold font-sans text-gray-500">Raise</h1>
      <p className="font-sans text-gray-500">by</p>
      <h3 className="text-red-500 text-xl font-sans font-semibold">
        Matrix Consulting
      </h3>
    </div>
  );
};

export default RaiseLogo;

const RaiseLogoLong = () => {
  return (
    <div className={`${lusitana.className} space-x-2 px-4 py-2 leading-none flex flex-row items-center`}>
      <h1 className="text-3xl font-bold font-sans text-gray-500">Raise</h1>
      <div>
        <p className="font-sans text-gray-500 text-xs">by</p>
        <h3 className="text-red-500 text-sm font-sans font-semibold">
          Matrix Consulting
        </h3>
      </div>
    </div>
  );
};

export { RaiseLogoLong };
