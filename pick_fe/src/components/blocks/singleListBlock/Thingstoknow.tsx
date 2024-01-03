const ThingsToKnow = () => {
  return (
    <div className="flex flex-wrap-reverse md:justify-between md:border-t-slate-200 md:border-t-[1px] pb-10">
      <div className="py-10 md w-full md:w-[250px] border-t-slate-400 border-t-[1px] md:border-t-[0px] flex flex-col gap-3">
        <div className="text-[23px] w-fit font-[600]">Cancellation policy</div>
        <div className="text-base flex flex-col gap-2">
          <div>Free cancellation before Aug 27.</div>
          <div>
            Review the Host’s full cancellation policy which applies even if you
            cancel for illness or disruptions caused by COVID-19.
          </div>
        </div>
      </div>
      <div className="py-5 w-full md:w-[250px] border-t-slate-400 border-t-[1px] md:border-t-[0px] flex flex-col gap-3">
        <div className="text-[23px] w-fit font-[600]">House rules</div>
        <div className="text-base flex flex-col gap-1">
          <div>Check-in after 3:00 PM</div>
          <div>Checkout before 12:00 PM</div>
          <div>7 guests maximum</div>
        </div>
        <div className="font-[600] underline">Show more</div>
      </div>
      <div className="py-5 w-full md:w-[250px] border-t-slate-400 border-t-[1px] md:border-t-[0px] flex flex-col gap-3">
        <div className="text-[23px] w-fit font-[600]">Safety & property</div>
        <div className="text-base flex flex-col gap-1">
          <div>Pool/hot tub without a gate or lock</div>
          <div>Nearby lake, river, other body of water</div>
          <div>Carbon monoxide alarm</div>
        </div>
        <div className="font-[600] underline">Show more</div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
