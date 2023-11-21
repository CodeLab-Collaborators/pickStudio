const Reviewers = () => {
  return (
    <div className="p-6 pb-12 flex flex-col gap-5  shadow border-slate-400 rounded-lg ">
      <div className="flex gap-2">
        <div className="w-[50px] h-[50px] rounded-[50%] bg-sky-900 text-white flex items-center justify-center text-xl font-semibold" >A</div>
        <div className="flex flex-col gap-1 text-base font-[600]">
          <div>Tarek</div>
          <div className="text-sm text-slate-800">August 2023</div>
        </div>
      </div>
      <div>
       <p className="font-normal"> Just the perfect getaway! Friendly Staff and beautiful house with
        stunning views.</p>
      </div>
    </div>
  );
};

export default Reviewers;
