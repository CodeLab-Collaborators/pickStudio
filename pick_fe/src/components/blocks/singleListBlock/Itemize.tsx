type iTemize = {
  icon: any;
  title: string;
  content: string;
};

const Itemize: React.FC<iTemize> = ({ icon, title, content }) => {
  return (
    <div className="flex gap-2">
      <div className="mt-1 text-xl text-slate-800">{icon}</div>
      <div className="flex flex-col gap-1">
        <div className="font-[600] text-base">{title}</div>
        <div className="text-sm font-thin">{content}</div>
      </div>
    </div>
  );
};

export default Itemize;
